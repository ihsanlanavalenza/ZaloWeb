<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
    <UDashboardLayout>
      <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
        <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
          <template #left>
            <div class="flex items-center gap-3 px-2">
              <div class="w-9 h-9 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="text-xl font-bold gradient-text">ZaloWeb</div>
            </div>
          </template>
        </UDashboardNavbar>

        <UDashboardSidebar>
          <template #header>
            <UDashboardSearchButton />
          </template>

          <UDashboardSidebarLinks :links="links" />

          <div class="flex-1" />

          <UDivider />

          <template #footer>
            <UDropdown
              :items="[
                [{
                  label: 'Lihat Website',
                  icon: 'i-heroicons-arrow-top-right-on-square',
                  to: '/',
                  target: '_blank'
                }],
                [{
                  label: 'Settings',
                  icon: 'i-heroicons-cog-8-tooth'
                }],
                [{
                  label: 'Sign out',
                  icon: 'i-heroicons-arrow-left-on-rectangle'
                }]
              ]"
              :popper="{ placement: 'top' }"
            >
              <UButton
                color="gray"
                variant="ghost"
                class="w-full"
                :ui="{ rounded: 'rounded-full' }"
              >
                <UAvatar
                  src="https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff"
                  size="2xs"
                />
                <div class="flex flex-col items-start flex-1">
                  <span class="text-sm font-medium">Admin</span>
                  <span class="text-xs text-gray-500">admin@zaloweb.com</span>
                </div>
              </UButton>
            </UDropdown>
          </template>
        </UDashboardSidebar>
      </UDashboardPanel>

      <slot />
    </UDashboardLayout>
  </div>
</template>

<script setup>
const links = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'i-heroicons-home',
  to: '/admin',
  tooltip: {
    text: 'Dashboard',
    shortcuts: ['G', 'H']
  }
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: 'i-heroicons-chart-bar',
  to: '/admin/analytics',
  badge: 'New',
  tooltip: {
    text: 'Analytics'
  }
}, {
  id: 'leads',
  label: 'Leads',
  icon: 'i-heroicons-users',
  to: '/admin/leads',
  badge: '12',
  tooltip: {
    text: 'Leads'
  }
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'i-heroicons-cog-6-tooth',
  to: '/admin/settings',
  tooltip: {
    text: 'Settings'
  }
}]
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent;
}
</style>
