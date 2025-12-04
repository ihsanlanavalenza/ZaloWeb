<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Leads Management">
        <template #right>
          <UInput
            icon="i-heroicons-magnifying-glass"
            placeholder="Cari leads..."
            size="sm"
            class="w-64"
            v-model="searchQuery"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent class="p-6 space-y-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total Leads</p>
                <p class="text-3xl font-bold gradient-text">156</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <UIcon name="i-heroicons-users" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Leads Baru</p>
                <p class="text-3xl font-bold gradient-text">12</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Dikontak</p>
                <p class="text-3xl font-bold gradient-text">89</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <UIcon name="i-heroicons-phone" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Converted</p>
                <p class="text-3xl font-bold gradient-text">34</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- Leads Table -->
        <UCard :ui="{ body: { padding: 'p-0' }, ring: 'ring-1 ring-gray-200' }" class="glass-card">
          <template #header>
            <div class="px-6 py-4 flex items-center justify-between">
              <h3 class="text-lg font-semibold">Semua Leads</h3>
              <div class="flex items-center gap-2">
                <USelectMenu
                  v-model="selectedStatus"
                  :options="['Semua', 'Baru', 'Dikontak', 'Converted', 'Lost']"
                  size="sm"
                />
                <UButton
                  icon="i-heroicons-arrow-down-tray"
                  size="sm"
                  color="gray"
                  variant="ghost"
                  label="Export"
                />
              </div>
            </div>
          </template>

          <UTable :rows="filteredLeads" :columns="columns">
            <template #name-data="{ row }">
              <div class="flex items-center gap-3">
                <UAvatar :src="`https://ui-avatars.com/api/?name=${row.name}&background=random`" size="sm" />
                <div>
                  <p class="font-medium text-gray-900">{{ row.name }}</p>
                  <p class="text-xs text-gray-500">{{ row.email }}</p>
                </div>
              </div>
            </template>
            <template #package-data="{ row }">
              <UBadge
                :color="row.package === 'Premium' ? 'purple' : row.package === 'Standard' ? 'blue' : 'gray'"
                variant="subtle"
              >
                {{ row.package }}
              </UBadge>
            </template>
            <template #status-data="{ row }">
              <UBadge
                :color="row.status === 'Baru' ? 'yellow' : row.status === 'Dikontak' ? 'blue' : row.status === 'Converted' ? 'green' : 'red'"
                variant="subtle"
              >
                {{ row.status }}
              </UBadge>
            </template>
            <template #actions-data="{ row }">
              <UDropdown :items="getActions(row)">
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-ellipsis-horizontal"
                  size="sm"
                />
              </UDropdown>
            </template>
          </UTable>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>

    <!-- Lead Detail Modal -->
    <UModal v-model="isModalOpen">
      <UCard v-if="selectedLead" :ui="{ divide: 'divide-y divide-gray-100' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Detail Lead</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark"
              @click="isModalOpen = false"
            />
          </div>
        </template>

        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <UAvatar :src="`https://ui-avatars.com/api/?name=${selectedLead.name}&background=random`" size="xl" />
            <div>
              <h4 class="text-xl font-bold text-gray-900">{{ selectedLead.name }}</h4>
              <p class="text-gray-600">{{ selectedLead.email }}</p>
              <p class="text-gray-600">{{ selectedLead.phone }}</p>
            </div>
          </div>

          <UDivider />

          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-500">Package</p>
              <UBadge :color="selectedLead.package === 'Premium' ? 'purple' : 'blue'" variant="subtle" class="mt-1">
                {{ selectedLead.package }}
              </UBadge>
            </div>
            <div>
              <p class="text-sm text-gray-500">Status</p>
              <UBadge :color="selectedLead.status === 'Converted' ? 'green' : 'yellow'" variant="subtle" class="mt-1">
                {{ selectedLead.status }}
              </UBadge>
            </div>
            <div>
              <p class="text-sm text-gray-500">Tanggal Submit</p>
              <p class="font-medium mt-1">{{ selectedLead.date }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Source</p>
              <p class="font-medium mt-1">{{ selectedLead.source }}</p>
            </div>
          </div>

          <UDivider />

          <div>
            <p class="text-sm text-gray-500 mb-2">Pesan</p>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-gray-700">{{ selectedLead.message }}</p>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-2">
            <UButton color="gray" variant="ghost" label="Close" @click="isModalOpen = false" />
            <UButton
              icon="i-heroicons-phone"
              label="Hubungi via WhatsApp"
              color="green"
            />
          </div>
        </template>
      </UCard>
    </UModal>
  </UDashboardPage>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const searchQuery = ref('')
const selectedStatus = ref('Semua')
const isModalOpen = ref(false)
const selectedLead = ref(null)

const columns = [
  { key: 'name', label: 'Nama & Email' },
  { key: 'phone', label: 'Telepon' },
  { key: 'package', label: 'Package' },
  { key: 'date', label: 'Tanggal' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '' }
]

const leads = ref([
  { id: 1, name: 'Andi Wijaya', email: 'andi@example.com', phone: '081234567890', package: 'Premium', status: 'Baru', date: '4 Des 2024', source: 'Google', message: 'Saya tertarik dengan paket premium untuk website perusahaan saya' },
  { id: 2, name: 'Siti Nurhaliza', email: 'siti@example.com', phone: '081234567891', package: 'Standard', status: 'Dikontak', date: '3 Des 2024', source: 'Direct', message: 'Butuh website untuk toko online saya' },
  { id: 3, name: 'Budi Santoso', email: 'budi@example.com', phone: '081234567892', package: 'Premium', status: 'Converted', date: '2 Des 2024', source: 'Social Media', message: 'Ingin membuat website portfolio profesional' },
  { id: 4, name: 'Maya Putri', email: 'maya@example.com', phone: '081234567893', package: 'Luxury', status: 'Baru', date: '1 Des 2024', source: 'Referral', message: 'Direkomendasikan oleh teman untuk project besar' },
  { id: 5, name: 'Rudi Hermawan', email: 'rudi@example.com', phone: '081234567894', package: 'Standard', status: 'Lost', date: '30 Nov 2024', source: 'Google', message: 'Cari info harga terlebih dahulu' },
  { id: 6, name: 'Dewi Lestari', email: 'dewi@example.com', phone: '081234567895', package: 'Premium', status: 'Dikontak', date: '29 Nov 2024', source: 'Direct', message: 'Website untuk klinik kecantikan saya' },
  { id: 7, name: 'Ahmad Fauzi', email: 'ahmad@example.com', phone: '081234567896', package: 'Standard', status: 'Converted', date: '28 Nov 2024', source: 'Social Media', message: 'Butuh website company profile' },
  { id: 8, name: 'Linda Wijayanti', email: 'linda@example.com', phone: '081234567897', package: 'Premium', status: 'Baru', date: '27 Nov 2024', source: 'Google', message: 'Tertarik paket premium dengan fitur lengkap' }
])

const filteredLeads = computed(() => {
  let result = leads.value

  if (selectedStatus.value !== 'Semua') {
    result = result.filter(lead => lead.status === selectedStatus.value)
  }

  if (searchQuery.value) {
    result = result.filter(lead =>
      lead.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      lead.phone.includes(searchQuery.value)
    )
  }

  return result
})

const getActions = (row) => {
  return [[
    {
      label: 'Lihat Detail',
      icon: 'i-heroicons-eye',
      click: () => {
        selectedLead.value = row
        isModalOpen.value = true
      }
    }
  ], [
    {
      label: 'Hubungi',
      icon: 'i-heroicons-phone',
      click: () => {
        window.open(`https://wa.me/${row.phone}`, '_blank')
      }
    },
    {
      label: 'Email',
      icon: 'i-heroicons-envelope',
      click: () => {
        window.location.href = `mailto:${row.email}`
      }
    }
  ], [
    {
      label: 'Mark as Converted',
      icon: 'i-heroicons-check-circle',
      click: () => {
        row.status = 'Converted'
      }
    }
  ]]
}
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
