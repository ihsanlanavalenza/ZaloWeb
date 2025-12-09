<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4">
    <nav class="container mx-auto">
      <div class="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/Logo-ungu-lanscape.svg" alt="ZaloWeb Logo" class="h-16 md:h-20 w-auto dark:hidden">
          <img src="/Logo-putih-lanscpae.svg" alt="ZaloWeb Logo" class="h-16 md:h-20 w-auto hidden dark:block">
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-2">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-400 dark:hover:to-blue-400 hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-300/50 transition-all duration-500 ease-out font-medium text-sm px-4 py-2.5 rounded-xl hover:scale-105 hover:-translate-y-0.5"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Dark Mode Toggle -->
        <div class="hidden md:flex items-center gap-3">
          <button 
            @click="toggleDarkMode($event)"
            class="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Toggle dark mode"
          >
            <svg v-if="isDark" class="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-500 rotate-0 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-500 rotate-0 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu & Dark Mode Toggle -->
        <div class="md:hidden flex items-center gap-2">
          <button 
            @click="toggleDarkMode($event)"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Toggle dark mode"
          >
            <svg v-if="isDark" class="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-500 rotate-0 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-500 rotate-0 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 px-6 py-4 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div class="space-y-2">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium py-2 px-4 rounded-xl text-sm"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const isDark = ref(true) // Default to dark mode

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const toggleDarkMode = async (event) => {
  // Check if browser supports View Transitions API
  if (!document.startViewTransition) {
    // Fallback for browsers that don't support View Transitions
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    return
  }

  // Get click position for ripple animation origin
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  // Use View Transitions API with smooth circular wipe
  const transition = document.startViewTransition(() => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  await transition.ready
  
  // Circular clip-path animation - works both ways (light ↔ dark)
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
    },
    {
      duration: 700,
      easing: 'ease-in-out',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

onMounted(() => {
  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('theme')
  
  // Default to dark if no saved preference
  if (savedTheme === 'dark' || !savedTheme) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style>
/* View Transition API - Smooth Circular Wipe Animation */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
}

/* Default layer order */
::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}

/* No need to reverse - animation works bidirectionally */
</style>
