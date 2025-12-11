export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware di server side
  if (process.server) return

  // Check jika user mencoba akses login page
  if (to.path === '/admin/login') {
    const sessionData = localStorage.getItem('admin_session')
    
    if (sessionData) {
      try {
        const session = JSON.parse(sessionData)
        
        // Check apakah session masih valid
        if (session.token && session.expiresAt && Date.now() < session.expiresAt) {
          // User sudah login, redirect ke dashboard
          return navigateTo('/admin')
        }
      } catch (error) {
        // Invalid session, biarkan akses login page
        localStorage.removeItem('admin_session')
      }
    }
  }
})
