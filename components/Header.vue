<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4">
    <nav class="container mx-auto">
      <div class="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            ZaloWeb
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Buttons & Dark Mode Toggle -->
        <div class="hidden md:flex items-center gap-3">
          <button 
            @click="toggleDarkMode"
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
          <button class="px-5 py-2 rounded-full font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            Sign In
          </button>
          <button class="px-5 py-2 rounded-full font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/30 dark:shadow-purple-500/30">
            Sign Up
          </button>
        </div>

        <!-- Mobile Menu & Dark Mode Toggle -->
        <div class="md:hidden flex items-center gap-2">
          <button 
            @click="toggleDarkMode"
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
        <div class="flex flex-col gap-2 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <button class="w-full px-6 py-2.5 rounded-full font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700">
            Sign In
          </button>
          <button class="w-full px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-lg shadow-blue-500/30 dark:shadow-purple-500/30">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const toggleDarkMode = async () => {
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

  // Use View Transitions API with zoom effect
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
}

onMounted(() => {
  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
