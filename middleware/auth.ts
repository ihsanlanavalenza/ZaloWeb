export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware di server side
  if (process.server) return

  // Check jika route membutuhkan auth
  const isAdminRoute = to.path.startsWith('/admin') && to.path !== '/admin/login'
  
  if (!isAdminRoute) {
    return // Route tidak membutuhkan auth
  }

  // Check session dari localStorage (sementara, nanti pakai cookies)
  const sessionData = localStorage.getItem('admin_session')
  
  if (!sessionData) {
    // Tidak ada session, redirect ke login
    return navigateTo('/admin/login')
  }

  try {
    const session = JSON.parse(sessionData)
    
    // Check apakah session sudah expired
    if (session.expiresAt && Date.now() > session.expiresAt) {
      // Session expired
      localStorage.removeItem('admin_session')
      return navigateTo('/admin/login')
    }

    // Check apakah ada token
    if (!session.token) {
      localStorage.removeItem('admin_session')
      return navigateTo('/admin/login')
    }

    // Session valid, allow access
    // TODO: Nanti tambahkan verifikasi token ke backend

  } catch (error) {
    // Invalid session data
    console.error('Session validation error:', error)
    localStorage.removeItem('admin_session')
    return navigateTo('/admin/login')
  }
})
