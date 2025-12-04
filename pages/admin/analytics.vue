<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Analytics & Insights">
        <template #right>
          <UButtonGroup size="sm" orientation="horizontal">
            <UButton
              v-for="period in periods"
              :key="period"
              :label="period"
              :color="selectedPeriod === period ? 'primary' : 'gray'"
              :variant="selectedPeriod === period ? 'solid' : 'ghost'"
              @click="selectedPeriod = period"
            />
          </UButtonGroup>
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent class="p-6 space-y-6">
        <!-- Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard v-for="metric in metrics" :key="metric.label" :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200' }" class="glass-card hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="text-sm text-gray-500 mb-2">{{ metric.label }}</p>
                <p class="text-3xl font-bold mb-2" :class="metric.color">{{ metric.value }}</p>
                <div class="flex items-center gap-2">
                  <UBadge :color="metric.change > 0 ? 'green' : 'red'" variant="subtle" size="xs">
                    <UIcon :name="metric.change > 0 ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'" class="w-3 h-3" />
                    {{ Math.abs(metric.change) }}%
                  </UBadge>
                  <span class="text-xs text-gray-500">vs periode sebelumnya</span>
                </div>
              </div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" :style="{ background: metric.gradient }">
                <UIcon :name="metric.icon" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- Time Series Chart -->
        <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">Trend Pengunjung</h3>
              <UButton
                icon="i-heroicons-arrow-down-tray"
                size="sm"
                color="gray"
                variant="ghost"
                label="Export"
              />
            </div>
          </template>

          <div class="h-80 flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-xl">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <UIcon name="i-heroicons-chart-bar" class="w-10 h-10 text-white" />
              </div>
              <p class="text-lg font-semibold text-gray-900 mb-2">Visualisasi Chart</p>
              <p class="text-sm text-gray-500 max-w-md">
                Integrasikan dengan ApexCharts, Chart.js, atau library charting lainnya<br/>
                untuk menampilkan grafik interaktif pengunjung website
              </p>
            </div>
          </div>
        </UCard>

        <!-- Geographic Distribution -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold">Distribusi Geografis</h3>
            </template>

            <div class="space-y-3">
              <div v-for="(location, index) in topLocations" :key="location.city" class="group">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ location.city }}</p>
                      <p class="text-xs text-gray-500">{{ location.country }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-semibold text-gray-900">{{ location.visitors.toLocaleString() }}</p>
                    <p class="text-xs text-gray-500">{{ location.percentage }}%</p>
                  </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                    :style="{ width: location.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <template #header>
              <h3 class="text-lg font-semibold">Waktu Kunjungan Tertinggi</h3>
            </template>

            <div class="grid grid-cols-7 gap-2 mb-4">
              <div v-for="day in days" :key="day.name" class="text-center">
                <p class="text-xs text-gray-500 mb-2">{{ day.name }}</p>
                <div class="h-32 bg-gray-100 rounded-lg flex items-end p-1">
                  <div 
                    class="w-full rounded transition-all duration-500 bg-gradient-to-t from-blue-500 to-purple-600"
                    :style="{ height: day.percentage + '%' }"
                  ></div>
                </div>
                <p class="text-xs font-semibold mt-2">{{ day.count }}</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Page Performance -->
        <UCard :ui="{ body: { padding: 'p-0' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
          <template #header>
            <div class="px-6 py-4 flex items-center justify-between">
              <h3 class="text-lg font-semibold">Performa Halaman</h3>
              <UInput
                icon="i-heroicons-magnifying-glass"
                placeholder="Cari halaman..."
                size="sm"
                class="w-64"
              />
            </div>
          </template>

          <UTable :rows="pagePerformance" :columns="performanceColumns">
            <template #page-data="{ row }">
              <div class="flex items-center gap-2">
                <UIcon :name="row.icon" class="w-4 h-4 text-blue-600" />
                <span class="font-medium">{{ row.page }}</span>
              </div>
            </template>
            <template #views-data="{ row }">
              <span class="font-semibold text-blue-600">{{ row.views.toLocaleString() }}</span>
            </template>
            <template #avgTime-data="{ row }">
              <span class="text-gray-700">{{ row.avgTime }}</span>
            </template>
            <template #bounceRate-data="{ row }">
              <UBadge :color="row.bounceRate < 40 ? 'green' : row.bounceRate < 60 ? 'yellow' : 'red'" variant="subtle">
                {{ row.bounceRate }}%
              </UBadge>
            </template>
            <template #conversions-data="{ row }">
              <div class="flex items-center gap-2">
                <span class="font-medium">{{ row.conversions }}</span>
                <UBadge color="green" variant="subtle" size="xs">{{ row.conversionRate }}%</UBadge>
              </div>
            </template>
          </UTable>
        </UCard>

        <!-- Real-time Activity -->
        <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
          <template #header>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 class="text-lg font-semibold">Aktivitas Real-time</h3>
              <UBadge color="green" variant="subtle" size="xs">{{ onlineUsers }} online sekarang</UBadge>
            </div>
          </template>

          <div class="space-y-3">
            <div v-for="activity in realtimeActivity" :key="activity.id" class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <UAvatar :src="`https://ui-avatars.com/api/?name=${activity.user}&background=random`" size="sm" />
              <div class="flex-1">
                <p class="text-sm text-gray-900">
                  <span class="font-medium">{{ activity.user }}</span>
                  {{ activity.action }}
                  <span class="font-medium text-blue-600">{{ activity.page }}</span>
                </p>
                <div class="flex items-center gap-2 mt-1">
                  <UIcon name="i-heroicons-map-pin" class="w-3 h-3 text-gray-400" />
                  <span class="text-xs text-gray-500">{{ activity.location }}</span>
                  <span class="text-xs text-gray-400">•</span>
                  <span class="text-xs text-gray-500">{{ activity.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const periods = ['7 Hari', '30 Hari', '90 Hari', 'Tahun Ini']
const selectedPeriod = ref('7 Hari')

const metrics = [
  {
    label: 'Total Pengunjung',
    value: '15,842',
    change: 23.5,
    icon: 'i-heroicons-users',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'text-purple-600'
  },
  {
    label: 'Pengunjung Unik',
    value: '12,453',
    change: 18.2,
    icon: 'i-heroicons-user-group',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    color: 'text-blue-600'
  },
  {
    label: 'Avg. Session Duration',
    value: '3m 24s',
    change: 12.8,
    icon: 'i-heroicons-clock',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'text-pink-600'
  },
  {
    label: 'Bounce Rate',
    value: '42.3%',
    change: -5.4,
    icon: 'i-heroicons-arrow-path',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'text-cyan-600'
  }
]

const topLocations = [
  { city: 'Jakarta', country: 'Indonesia', visitors: 5234, percentage: 33 },
  { city: 'Surabaya', country: 'Indonesia', visitors: 3421, percentage: 22 },
  { city: 'Bandung', country: 'Indonesia', visitors: 2856, percentage: 18 },
  { city: 'Bali', country: 'Indonesia', visitors: 2134, percentage: 13 },
  { city: 'Medan', country: 'Indonesia', visitors: 1456, percentage: 9 }
]

const days = [
  { name: 'Sen', count: 342, percentage: 68 },
  { name: 'Sel', count: 456, percentage: 91 },
  { name: 'Rab', count: 389, percentage: 78 },
  { name: 'Kam', count: 501, percentage: 100 },
  { name: 'Jum', count: 423, percentage: 84 },
  { name: 'Sab', count: 234, percentage: 47 },
  { name: 'Min', count: 189, percentage: 38 }
]

const performanceColumns = [
  { key: 'page', label: 'Halaman' },
  { key: 'views', label: 'Views' },
  { key: 'avgTime', label: 'Avg. Time' },
  { key: 'bounceRate', label: 'Bounce Rate' },
  { key: 'conversions', label: 'Conversions' }
]

const pagePerformance = [
  { page: 'Homepage', icon: 'i-heroicons-home', views: 8234, avgTime: '2m 45s', bounceRate: 38, conversions: 156, conversionRate: 4.2 },
  { page: 'Portfolio', icon: 'i-heroicons-briefcase', views: 3421, avgTime: '3m 12s', bounceRate: 42, conversions: 89, conversionRate: 3.8 },
  { page: 'Contact', icon: 'i-heroicons-envelope', views: 2156, avgTime: '1m 34s', bounceRate: 28, conversions: 124, conversionRate: 5.8 },
  { page: 'About', icon: 'i-heroicons-information-circle', views: 1842, avgTime: '2m 18s', bounceRate: 51, conversions: 34, conversionRate: 2.1 },
  { page: 'Services', icon: 'i-heroicons-wrench-screwdriver', views: 1456, avgTime: '3m 45s', bounceRate: 35, conversions: 67, conversionRate: 4.6 }
]

const onlineUsers = ref(24)

const realtimeActivity = ref([
  { id: 1, user: 'Andi Wijaya', action: 'mengunjungi', page: 'Homepage', location: 'Jakarta', time: 'Baru saja' },
  { id: 2, user: 'Siti Nurhaliza', action: 'melihat', page: 'Portfolio', location: 'Bandung', time: '30 detik lalu' },
  { id: 3, user: 'Budi Santoso', action: 'mengisi form di', page: 'Contact', location: 'Surabaya', time: '1 menit lalu' },
  { id: 4, user: 'Maya Putri', action: 'mengunjungi', page: 'Services', location: 'Bali', time: '2 menit lalu' },
  { id: 5, user: 'Rudi Hermawan', action: 'melihat', page: 'About', location: 'Medan', time: '3 menit lalu' }
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
