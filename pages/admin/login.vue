<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-4">
    <!-- Background Decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Login Card -->
    <div class="relative w-full max-w-md">
      <UCard 
        :ui="{ 
          body: { padding: 'p-8 sm:p-10' },
          ring: 'ring-1 ring-blue-100 dark:ring-gray-800',
          shadow: 'shadow-2xl'
        }" 
        class="glass-card"
      >
        <!-- Logo & Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl shadow-blue-500/30 mb-4">
            <UIcon name="i-heroicons-lock-closed" class="w-10 h-10 text-white" />
          </div>
          <h1 class="text-3xl font-bold gradient-text mb-2">Admin Login</h1>
          <p class="text-sm text-gray-600 dark:text-gray-400">Masuk ke Dashboard Admin</p>
        </div>

        <!-- Error Alert -->
        <UAlert
          v-if="errorMessage"
          color="red"
          variant="soft"
          icon="i-heroicons-exclamation-triangle"
          :title="errorMessage"
          class="mb-6"
          :close-button="{ 
            icon: 'i-heroicons-x-mark-20-solid', 
            color: 'red', 
            variant: 'link',
            padded: false 
          }"
          @close="errorMessage = ''"
        />

        <!-- Success Alert -->
        <UAlert
          v-if="successMessage"
          color="green"
          variant="soft"
          icon="i-heroicons-check-circle"
          :title="successMessage"
          class="mb-6"
        />

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <UFormGroup label="Email" name="email" required>
            <UInput
              v-model="formData.email"
              type="email"
              placeholder="admin@example.com"
              icon="i-heroicons-envelope"
              size="lg"
              :disabled="isLoading"
              autocomplete="email"
              required
            />
          </UFormGroup>

          <!-- Password Field -->
          <UFormGroup label="Password" name="password" required>
            <UInput
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              icon="i-heroicons-lock-closed"
              size="lg"
              :disabled="isLoading"
              autocomplete="current-password"
              required
              :ui="{ icon: { trailing: { pointer: '' } } }"
            >
              <template #trailing>
                <UButton
                  :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                  color="gray"
                  variant="link"
                  :padded="false"
                  @click="showPassword = !showPassword"
                  type="button"
                />
              </template>
            </UInput>
          </UFormGroup>

          <!-- Remember Me -->
          <div class="flex items-center justify-between">
            <UCheckbox
              v-model="formData.rememberMe"
              label="Ingat saya"
              :disabled="isLoading"
            />
            <NuxtLink
              to="/admin/forgot-password"
              class="text-sm text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors"
            >
              Lupa password?
            </NuxtLink>
          </div>

          <!-- Submit Button -->
          <UButton
            type="submit"
            block
            size="lg"
            :loading="isLoading"
            :disabled="isLoading || !formData.email || !formData.password"
            class="login-button"
          >
            <template v-if="!isLoading">
              <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5 mr-2" />
              Masuk
            </template>
            <template v-else>
              Memproses...
            </template>
          </UButton>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white dark:bg-gray-800 text-gray-500">atau</span>
          </div>
        </div>

        <!-- Social Login (Optional - untuk future) -->
        <div class="space-y-3">
          <UButton
            color="gray"
            variant="outline"
            block
            size="lg"
            disabled
            class="opacity-50 cursor-not-allowed"
          >
            <UIcon name="i-heroicons-finger-print" class="w-5 h-5 mr-2" />
            Login dengan Biometric (Coming Soon)
          </UButton>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center">
          <p class="text-xs text-gray-500 dark:text-gray-400">
            🔒 Login ini dilindungi dengan enkripsi SSL
          </p>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors mt-3"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
            Kembali ke Website
          </NuxtLink>
        </div>
      </UCard>

      <!-- Security Info -->
      <div class="mt-6 text-center">
        <p class="text-xs text-gray-600 dark:text-gray-400">
          Default credentials for first-time setup:<br>
          <code class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-blue-600">admin@zaloweb.com</code> / 
          <code class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-purple-600">admin123</code>
        </p>
        <p class="text-xs text-orange-600 dark:text-orange-400 mt-2">
          ⚠️ Segera ubah password setelah login pertama kali!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false, // No layout untuk halaman login
  auth: false // Public page
})

// SEO
useHead({
  title: 'Admin Login - ZaloWeb',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Form state
const formData = ref({
  email: '',
  password: '',
  rememberMe: false
})

const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Login handler
const handleLogin = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    successMessage.value = ''

    // Validasi input
    if (!formData.value.email || !formData.value.password) {
      errorMessage.value = 'Email dan password harus diisi!'
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.value.email)) {
      errorMessage.value = 'Format email tidak valid!'
      return
    }

    // Password minimum length
    if (formData.value.password.length < 6) {
      errorMessage.value = 'Password minimal 6 karakter!'
      return
    }

    // TODO: Ganti dengan API call ke /api/auth/login
    // Sementara hardcoded untuk demo
    const DEMO_CREDENTIALS = {
      email: 'admin@zaloweb.com',
      password: 'admin123'
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (
      formData.value.email === DEMO_CREDENTIALS.email &&
      formData.value.password === DEMO_CREDENTIALS.password
    ) {
      // Success
      successMessage.value = 'Login berhasil! Mengalihkan...'
      
      // Store session (sementara di localStorage, nanti pakai cookies)
      const session = {
        user: {
          id: 1,
          email: formData.value.email,
          name: 'Admin',
          role: 'admin'
        },
        token: 'demo-token-' + Date.now(),
        expiresAt: Date.now() + (formData.value.rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000
      }
      
      localStorage.setItem('admin_session', JSON.stringify(session))

      // Redirect ke dashboard setelah 1 detik
      setTimeout(() => {
        navigateTo('/admin')
      }, 1000)

    } else {
      errorMessage.value = 'Email atau password salah!'
    }

  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = error.message || 'Terjadi kesalahan. Silakan coba lagi.'
  } finally {
    isLoading.value = false
  }
}

// Auto-fill demo credentials (untuk development)
onMounted(() => {
  // Uncomment untuk auto-fill saat development
  // formData.value.email = 'admin@zaloweb.com'
  // formData.value.password = 'admin123'
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #2563eb, #9333ea, #2563eb);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1),
              0 4px 16px rgba(124, 58, 237, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(147, 197, 253, 0.3);
}

.dark .glass-card {
  background: rgba(17, 24, 39, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 4px 16px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(75, 85, 99, 0.4);
}

.login-button {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%);
  background-size: 200% auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.login-button:hover:not(:disabled) {
  background-position: right center;
  box-shadow: 0 6px 30px rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
}

.login-button:active:not(:disabled) {
  transform: translateY(0);
}
</style>
