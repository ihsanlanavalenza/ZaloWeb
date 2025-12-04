<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Dashboard Overview">
        <template #right>
          <UButton
            label="Lihat Website"
            color="gray"
            variant="ghost"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
            to="/"
            target="_blank"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent class="p-6 space-y-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total Pengunjung</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.totalVisitors.toLocaleString() }}</p>
                <p class="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.visitorGrowth }}% dari bulan lalu
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <UIcon name="i-heroicons-users" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Pengunjung Hari Ini</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.todayVisitors.toLocaleString() }}</p>
                <p class="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.todayGrowth }}% dari kemarin
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <UIcon name="i-heroicons-user-group" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total Leads</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.totalLeads.toLocaleString() }}</p>
                <p class="text-xs text-blue-600 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                  {{ stats.newLeads }} lead baru
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <UIcon name="i-heroicons-envelope" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Conversion Rate</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.conversionRate }}%</p>
                <p class="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.conversionGrowth }}% dari bulan lalu
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <UIcon name="i-heroicons-chart-bar" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Visitors Chart -->
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900">Pengunjung Website</h3>
                <USelectMenu
                  v-model="selectedPeriod"
                  :options="['7 Hari', '30 Hari', '90 Hari']"
                  size="sm"
                />
              </div>
            </template>

            <div class="h-64 flex items-center justify-center">
              <div class="text-center">
                <UIcon name="i-heroicons-chart-bar-square" class="w-16 h-16 text-blue-500 mx-auto mb-3" />
                <p class="text-sm text-gray-500">Chart akan ditampilkan di sini</p>
                <p class="text-xs text-gray-400 mt-1">Menggunakan library charting seperti Chart.js atau ApexCharts</p>
              </div>
            </div>
          </UCard>

          <!-- Traffic Sources -->
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900">Sumber Traffic</h3>
            </template>

            <div class="space-y-4">
              <div v-for="source in trafficSources" :key="source.name" class="flex items-center justify-between">
                <div class="flex items-center gap-3 flex-1">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center" :style="{ background: source.color }">
                    <UIcon :name="source.icon" class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">{{ source.name }}</p>
                    <div class="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div class="h-2 rounded-full transition-all" :style="{ width: source.percentage + '%', background: source.color }"></div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-semibold text-gray-900">{{ source.percentage }}%</p>
                    <p class="text-xs text-gray-500">{{ source.visitors.toLocaleString() }} pengunjung</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Recent Activity & Top Pages -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Recent Visitors -->
          <UCard :ui="{ body: { padding: 'p-0' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-gray-900">Pengunjung Terbaru</h3>
              </div>
            </template>

            <UTable :rows="recentVisitors" :columns="visitorColumns" />
          </UCard>

          <!-- Top Pages -->
          <UCard :ui="{ body: { padding: 'p-0' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <div class="px-6 py-4">
                <h3 class="text-lg font-semibold text-gray-900">Halaman Populer</h3>
              </div>
            </template>

            <UTable :rows="topPages" :columns="pageColumns">
              <template #views-data="{ row }">
                <span class="font-semibold text-blue-600">{{ row.views.toLocaleString() }}</span>
              </template>
              <template #trend-data="{ row }">
                <UBadge :color="row.trend > 0 ? 'green' : 'red'" variant="subtle" size="xs">
                  <UIcon :name="row.trend > 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" class="w-3 h-3" />
                  {{ Math.abs(row.trend) }}%
                </UBadge>
              </template>
            </UTable>
          </UCard>
        </div>

        <!-- Device & Browser Stats -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900">Perangkat Pengunjung</h3>
            </template>

            <div class="space-y-3">
              <div v-for="device in deviceStats" :key="device.name" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <UIcon :name="device.icon" class="w-5 h-5 text-white" />
                  </div>
                  <span class="font-medium text-gray-900">{{ device.name }}</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="text-right">
                    <p class="text-sm font-semibold text-gray-900">{{ device.percentage }}%</p>
                    <p class="text-xs text-gray-500">{{ device.count.toLocaleString() }} pengunjung</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900">Browser Populer</h3>
            </template>

            <div class="space-y-3">
              <div v-for="browser in browserStats" :key="browser.name" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <UIcon :name="browser.icon" class="w-5 h-5 text-white" />
                  </div>
                  <span class="font-medium text-gray-900">{{ browser.name }}</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="text-right">
                    <p class="text-sm font-semibold text-gray-900">{{ browser.percentage }}%</p>
                    <p class="text-xs text-gray-500">{{ browser.count.toLocaleString() }} pengunjung</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const selectedPeriod = ref('7 Hari')

// Stats data
const stats = ref({
  totalVisitors: 15842,
  visitorGrowth: 23.5,
  todayVisitors: 342,
  todayGrowth: 12.3,
  totalLeads: 156,
  newLeads: 8,
  conversionRate: 4.2,
  conversionGrowth: 0.8
})

// Traffic sources
const trafficSources = ref([
  { name: 'Google Search', icon: 'i-heroicons-magnifying-glass', percentage: 45, visitors: 7129, color: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)' },
  { name: 'Direct', icon: 'i-heroicons-arrow-right', percentage: 28, visitors: 4436, color: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' },
  { name: 'Social Media', icon: 'i-heroicons-share', percentage: 18, visitors: 2851, color: 'linear-gradient(135deg, #E4405F 0%, #5B51D8 100%)' },
  { name: 'Referral', icon: 'i-heroicons-link', percentage: 9, visitors: 1426, color: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)' }
])

// Recent visitors
const visitorColumns = [
  { key: 'time', label: 'Waktu' },
  { key: 'location', label: 'Lokasi' },
  { key: 'page', label: 'Halaman' }
]

const recentVisitors = ref([
  { time: '2 menit lalu', location: 'Jakarta, Indonesia', page: 'Homepage' },
  { time: '5 menit lalu', location: 'Bandung, Indonesia', page: 'Portfolio' },
  { time: '12 menit lalu', location: 'Surabaya, Indonesia', page: 'Contact' },
  { time: '18 menit lalu', location: 'Bali, Indonesia', page: 'Homepage' },
  { time: '25 menit lalu', location: 'Medan, Indonesia', page: 'Services' }
])

// Top pages
const pageColumns = [
  { key: 'page', label: 'Halaman' },
  { key: 'views', label: 'Views' },
  { key: 'trend', label: 'Trend' }
]

const topPages = ref([
  { page: '/', views: 8234, trend: 15.3 },
  { page: '/portfolio', views: 3421, trend: 23.1 },
  { page: '/contact', views: 2156, trend: -5.2 },
  { page: '/services', views: 1842, trend: 8.7 },
  { page: '/about', views: 1189, trend: 12.4 }
])

// Device stats
const deviceStats = ref([
  { name: 'Desktop', icon: 'i-heroicons-computer-desktop', percentage: 52, count: 8238 },
  { name: 'Mobile', icon: 'i-heroicons-device-phone-mobile', percentage: 38, count: 6020 },
  { name: 'Tablet', icon: 'i-heroicons-device-tablet', percentage: 10, count: 1584 }
])

// Browser stats
const browserStats = ref([
  { name: 'Chrome', icon: 'i-heroicons-globe-alt', percentage: 58, count: 9188 },
  { name: 'Safari', icon: 'i-heroicons-globe-alt', percentage: 24, count: 3802 },
  { name: 'Firefox', icon: 'i-heroicons-globe-alt', percentage: 12, count: 1901 },
  { name: 'Edge', icon: 'i-heroicons-globe-alt', percentage: 6, count: 951 }
])
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent;
}

.glass-card {
  @apply bg-white/90 backdrop-blur-xl;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>
