<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Monitor kinerja website Anda</p>
        </div>
        <UButton
          label="Lihat Website"
          color="gray"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-top-right-on-square"
          to="/"
          target="_blank"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6 space-y-6">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard :ui="{ body: { padding: 'p-5 sm:p-6' }, ring: 'ring-1 ring-blue-100 dark:ring-gray-800' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Pengunjung</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.totalVisitors.toLocaleString() }}</p>
                <p class="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.visitorGrowth }}% dari bulan lalu
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <UIcon name="i-heroicons-users" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5 sm:p-6' }, ring: 'ring-1 ring-purple-100 dark:ring-gray-800' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Pengunjung Hari Ini</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.todayVisitors.toLocaleString() }}</p>
                <p class="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.todayGrowth }}% dari kemarin
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
                <UIcon name="i-heroicons-user-group" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5 sm:p-6' }, ring: 'ring-1 ring-blue-100 dark:ring-gray-800' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Leads</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.totalLeads.toLocaleString() }}</p>
                <p class="text-xs text-blue-600 dark:text-blue-400 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                  {{ stats.newLeads }} lead baru
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <UIcon name="i-heroicons-envelope" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5 sm:p-6' }, ring: 'ring-1 ring-purple-100 dark:ring-gray-800' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Conversion Rate</p>
                <p class="text-3xl font-bold gradient-text">{{ stats.conversionRate }}%</p>
                <p class="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4" />
                  +{{ stats.conversionGrowth }}% dari bulan lalu
                </p>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
                <UIcon name="i-heroicons-chart-bar" class="w-7 h-7 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Visitors Chart -->
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-blue-100 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pengunjung Website</h3>
                <USelectMenu
                  v-model="selectedPeriod"
                  :options="['7 Hari', '30 Hari', '90 Hari']"
                  size="sm"
                />
              </div>
            </template>

            <div class="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl border border-blue-100 dark:border-gray-700">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/30 animate-pulse">
                  <UIcon name="i-heroicons-chart-bar-square" class="w-10 h-10 text-white" />
                </div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Chart akan ditampilkan di sini</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Menggunakan library charting seperti Chart.js atau ApexCharts</p>
              </div>
            </div>
          </UCard>

          <!-- Traffic Sources -->
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-purple-100 dark:ring-gray-800' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Sumber Traffic</h3>
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
      </div>
    </div>
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
  background: linear-gradient(to right, #2563eb, #9333ea, #2563eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08),
              0 4px 16px rgba(124, 58, 237, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(147, 197, 253, 0.2);
}

.dark .glass-card {
  background: rgba(17, 24, 39, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              0 4px 16px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(75, 85, 99, 0.3);
}
</style>
