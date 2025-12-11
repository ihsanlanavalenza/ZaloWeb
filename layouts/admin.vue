<template>
  <div class="min-h-screen flex bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside class="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col fixed h-screen overflow-y-auto">
      <!-- Sidebar Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <svg class="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div class="text-lg font-bold gradient-text">ZaloWeb</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">Admin Panel</div>
          </div>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 p-4 space-y-1">
        <template v-for="link in links" :key="link.id">
          <!-- Links with children -->
          <div v-if="link.children">
            <button
              @click="toggleMenu(link.id)"
              class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 group"
            >
              <div class="flex items-center gap-3">
                <UIcon :name="link.icon" class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span class="text-sm font-medium">{{ link.label }}</span>
              </div>
              <UIcon 
                :name="openMenus[link.id] ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" 
                class="w-4 h-4 text-gray-400 transition-transform"
              />
            </button>
            
            <!-- Submenu -->
            <div v-show="openMenus[link.id]" class="ml-4 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3">
              <NuxtLink
                v-for="child in link.children"
                :key="child.id"
                :to="child.to"
                class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm"
                active-class="bg-gradient-to-r from-blue-500 to-purple-600 !text-white shadow-lg shadow-blue-500/30"
              >
                <UIcon :name="child.icon" class="w-4 h-4" />
                <span>{{ child.label }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Regular links -->
          <NuxtLink
            v-else
            :to="link.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 group relative"
            active-class="bg-gradient-to-r from-blue-500 to-purple-600 !text-white shadow-lg shadow-blue-500/30"
          >
            <UIcon :name="link.icon" class="w-5 h-5" />
            <span class="text-sm font-medium">{{ link.label }}</span>
            <UBadge v-if="link.badge" :label="link.badge" color="primary" size="xs" class="ml-auto" />
          </NuxtLink>
        </template>
      </nav>

      <!-- Quick Stats -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Quick Stats
        </div>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3">
            <div class="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Leads</div>
            <div class="text-lg font-bold text-blue-900 dark:text-blue-300">12</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-3">
            <div class="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">Projects</div>
            <div class="text-lg font-bold text-purple-900 dark:text-purple-300">8</div>
          </div>
        </div>

        <NuxtLink to="/" target="_blank" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
          <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          <span class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">Lihat Website</span>
        </NuxtLink>
      </div>

      <!-- User Profile Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <UDropdown
          :items="[
            [{
              label: 'Profile Settings',
              icon: 'i-heroicons-user-circle',
              click: () => navigateTo('/admin/settings/profile')
            }],
            [{
              label: 'Lihat Website',
              icon: 'i-heroicons-arrow-top-right-on-square',
              click: () => window.open('/', '_blank')
            }],
            [{
              label: 'Sign out',
              icon: 'i-heroicons-arrow-left-on-rectangle',
              click: () => handleSignOut()
            }]
          ]"
          :popper="{ placement: 'top' }"
        >
          <UButton
            color="gray"
            variant="ghost"
            class="w-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
            :ui="{ rounded: 'rounded-xl', padding: { sm: 'p-3' } }"
          >
            <template #leading>
              <div class="relative">
                <UAvatar
                  :src="userSession?.user?.avatar || 'https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff'"
                  size="sm"
                  :ui="{ rounded: 'rounded-lg' }"
                />
                <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>
            </template>
            
            <div class="flex flex-col items-start flex-1 min-w-0">
              <span class="text-sm font-semibold text-gray-900 dark:text-white truncate w-full">{{ userSession?.user?.name || 'Admin User' }}</span>
              <span class="text-xs text-gray-500 dark:text-gray-400 truncate w-full">{{ userSession?.user?.email || 'admin@zaloweb.com' }}</span>
            </div>

            <template #trailing>
              <UIcon name="i-heroicons-chevron-up-down" class="w-4 h-4 text-gray-400" />
            </template>
          </UButton>
        </UDropdown>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 ml-72">
      <slot />
    </main>
  </div>
</template>

<script setup>
// Auth middleware
definePageMeta({
  middleware: 'auth'
})

// Get user session
const userSession = ref(null)

onMounted(() => {
  const sessionData = localStorage.getItem('admin_session')
  if (sessionData) {
    try {
      userSession.value = JSON.parse(sessionData)
    } catch (error) {
      console.error('Failed to parse session:', error)
    }
  }
})

const openMenus = ref({
  content: false,
  settings: false
})

const toggleMenu = (id) => {
  openMenus.value[id] = !openMenus.value[id]
}

const handleSignOut = () => {
  // Clear session
  localStorage.removeItem('admin_session')
  
  // Redirect to login
  navigateTo('/admin/login')
}

const links = [
  // Dashboard
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/admin',
    tooltip: {
      text: 'Dashboard Overview',
      shortcuts: ['G', 'D']
    }
  },
  
  // Banner Management (NEW)
  {
    id: 'banner',
    label: 'Banner',
    icon: 'i-heroicons-photo',
    to: '/admin/banner',
    tooltip: {
      text: 'Manage Banner Slider'
    }
  },
  
  // Portfolio/Paket Management
  {
    id: 'portfolio',
    label: 'Portfolio & Paket',
    icon: 'i-heroicons-briefcase',
    to: '/admin/portfolio',
    tooltip: {
      text: 'Manage Portfolio & Pricing Packages'
    }
  },
  
  // Testimonials
  {
    id: 'testimonials',
    label: 'Testimonials',
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    to: '/admin/testimonials',
    tooltip: {
      text: 'Manage Client Testimonials'
    }
  },
  
  // FAQ Management
  {
    id: 'faq',
    label: 'FAQ',
    icon: 'i-heroicons-question-mark-circle',
    to: '/admin/faq',
    tooltip: {
      text: 'Manage FAQ Questions'
    }
  },
  
  // Contact Form / Leads
  {
    id: 'contact',
    label: 'Contact Form',
    icon: 'i-heroicons-envelope',
    to: '/admin/contact',
    tooltip: {
      text: 'View Contact Submissions'
    }
  }
]
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent;
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
