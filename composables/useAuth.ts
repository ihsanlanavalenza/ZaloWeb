export const useAuth = () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(true)

  // Check authentication status
  const checkAuth = () => {
    if (process.server) {
      isLoading.value = false
      return
    }

    try {
      const sessionData = localStorage.getItem('admin_session')
      
      if (sessionData) {
        const session = JSON.parse(sessionData)
        
        // Check expiration
        if (session.expiresAt && Date.now() < session.expiresAt) {
          user.value = session.user
          isAuthenticated.value = true
        } else {
          // Session expired
          logout()
        }
      }
    } catch (error) {
      console.error('Auth check error:', error)
      logout()
    } finally {
      isLoading.value = false
    }
  }

  // Login function
  const login = async (email: string, password: string, rememberMe = false) => {
    try {
      // TODO: Replace with actual API call
      // const response = await $fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: { email, password, rememberMe }
      // })

      // Demo login
      if (email === 'admin@zaloweb.com' && password === 'admin123') {
        const session = {
          user: {
            id: 1,
            email: email,
            name: 'Admin',
            role: 'admin',
            avatar: 'https://i.pravatar.cc/150?img=68'
          },
          token: 'demo-token-' + Date.now(),
          expiresAt: Date.now() + (rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000
        }

        localStorage.setItem('admin_session', JSON.stringify(session))
        user.value = session.user
        isAuthenticated.value = true

        return { success: true, user: session.user }
      } else {
        throw new Error('Email atau password salah!')
      }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('admin_session')
    user.value = null
    isAuthenticated.value = false
  }

  // Get session token
  const getToken = () => {
    if (process.server) return null

    try {
      const sessionData = localStorage.getItem('admin_session')
      if (sessionData) {
        const session = JSON.parse(sessionData)
        return session.token
      }
    } catch (error) {
      console.error('Get token error:', error)
    }
    return null
  }

  // Update user profile
  const updateProfile = (updates: any) => {
    if (user.value) {
      user.value = { ...user.value, ...updates }
      
      // Update session in localStorage
      const sessionData = localStorage.getItem('admin_session')
      if (sessionData) {
        const session = JSON.parse(sessionData)
        session.user = user.value
        localStorage.setItem('admin_session', JSON.stringify(session))
      }
    }
  }

  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    isLoading: readonly(isLoading),
    checkAuth,
    login,
    logout,
    getToken,
    updateProfile
  }
}
