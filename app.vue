<template>
  <div>
    <!-- Modern Loading Screen -->
    <Transition name="fade-scale">
      <div 
        v-if="isLoading" 
        class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        :class="isDark ? 'bg-gray-900' : 'bg-white'"
      >
        <!-- Animated Background Blobs -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-blob"></div>
          <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <!-- Logo & Loading -->
        <div class="relative z-10 text-center">
          <!-- Logo -->
          <div class="mb-8">
            <img 
              src="/Logo-putih-lanscpae.svg" 
              v-if="isDark"
              alt="ZaloWeb" 
              class="h-24 md:h-32 w-auto mx-auto animate-float drop-shadow-2xl"
            />
            <img 
              src="/Logo-ungu-lanscape.svg" 
              v-else
              alt="ZaloWeb" 
              class="h-24 md:h-32 w-auto mx-auto animate-float drop-shadow-2xl"
            />
          </div>

          <!-- Progress Bar -->
          <div class="w-64 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
            <div class="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 rounded-full animate-progress"></div>
          </div>

          <!-- Loading Text -->
          <p class="text-gray-600 dark:text-gray-400 text-sm font-medium animate-pulse">
            Memuat halaman...
          </p>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const isLoading = ref(true)

// Check if dark mode
const isDark = computed(() => {
  if (process.client) {
    return document.documentElement.classList.contains('dark')
  }
  return true
})

// Set dark mode immediately before page renders (prevent flash)
if (process.client) {
  const savedTheme = localStorage.getItem('theme')
  // Default to dark if no saved preference
  if (savedTheme === 'dark' || !savedTheme) {
    document.documentElement.classList.add('dark')
  }
}

onMounted(() => {
  // Show content after component mounted
  document.documentElement.style.visibility = 'visible'
  const nuxtApp = document.getElementById('__nuxt')
  if (nuxtApp) {
    nuxtApp.style.opacity = '1'
    nuxtApp.style.transition = 'opacity 0.3s ease'
  }

  const minLoadTime = 1200 // Minimum 1.2 seconds for smooth UX
  const startTime = Date.now()
  
  const hideLoading = () => {
    const elapsedTime = Date.now() - startTime
    const remainingTime = Math.max(0, minLoadTime - elapsedTime)
    
    setTimeout(() => {
      isLoading.value = false
    }, remainingTime)
  }

  // Hide loading when page is fully loaded
  if (document.readyState === 'complete') {
    hideLoading()
  } else {
    window.addEventListener('load', hideLoading)
  }

  // Fallback: Force hide after 3 seconds
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<style>
/* Fade scale transition */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Float animation for logo */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Blob animation for background */
@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Progress bar animation */
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.animate-progress {
  animation: progress 1.5s ease-in-out infinite;
}
</style>
