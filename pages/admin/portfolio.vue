<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Portfolio Management">
        <template #right>
          <UButton
            icon="i-heroicons-plus"
            label="Tambah Project"
            color="primary"
            @click="openAddModal"
            class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent class="p-6 space-y-6">
        <!-- Stats Overview -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-blue-100' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total Projects</p>
                <p class="text-3xl font-bold gradient-text">{{ portfolioItems.length }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-purple-100' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Featured</p>
                <p class="text-3xl font-bold gradient-text">{{ featuredCount }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-star" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-blue-100' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Categories</p>
                <p class="text-3xl font-bold gradient-text">{{ categoriesCount }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-tag" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-purple-100' }" class="glass-card">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Published</p>
                <p class="text-3xl font-bold gradient-text">{{ portfolioItems.length }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- Portfolio Grid -->
        <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-blue-100' }" class="glass-card">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">All Projects</h3>
              <div class="flex items-center gap-2">
                <UInput
                  icon="i-heroicons-magnifying-glass"
                  placeholder="Cari project..."
                  size="sm"
                  class="w-64"
                  v-model="searchQuery"
                />
                <USelectMenu
                  v-model="selectedType"
                  :options="['All', 'Hero', 'Feature', 'About', 'Project', 'Info']"
                  size="sm"
                />
              </div>
            </div>
          </template>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div
              v-for="item in filteredPortfolio"
              :key="item.id"
              class="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              @click="editItem(item)"
            >
              <!-- Image Preview -->
              <div class="aspect-[9/16] relative overflow-hidden bg-gradient-to-br" :class="item.bgGradient">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title"
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                <!-- Badge Type -->
                <div class="absolute top-3 left-3">
                  <UBadge
                    :color="item.type === 'hero' ? 'orange' : item.type === 'feature' ? 'blue' : item.type === 'project' ? 'purple' : 'green'"
                    variant="solid"
                    size="xs"
                  >
                    {{ item.type }}
                  </UBadge>
                </div>

                <!-- Actions -->
                <div class="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <UButton
                    icon="i-heroicons-pencil"
                    size="xs"
                    color="white"
                    variant="solid"
                    @click.stop="editItem(item)"
                  />
                  <UButton
                    icon="i-heroicons-trash"
                    size="xs"
                    color="red"
                    variant="solid"
                    @click.stop="deleteItem(item)"
                  />
                </div>

                <!-- Content Preview -->
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h4 class="text-white font-bold text-sm line-clamp-1 mb-1">{{ item.title }}</h4>
                  <p v-if="item.description" class="text-white/70 text-xs line-clamp-2">{{ item.description }}</p>
                </div>
              </div>

              <!-- Quick Info -->
              <div class="p-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-500">ID: {{ item.id }}</span>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-eye" class="w-4 h-4 text-gray-400" />
                    <span class="text-gray-500">{{ Math.floor(Math.random() * 1000) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredPortfolio.length === 0" class="text-center py-12">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-magnifying-glass" class="w-10 h-10 text-gray-400" />
            </div>
            <p class="text-gray-500 mb-2">Tidak ada project ditemukan</p>
            <p class="text-sm text-gray-400">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>

    <!-- Add/Edit Modal -->
    <UModal v-model="isModalOpen" :ui="{ width: 'sm:max-w-4xl' }">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">{{ editMode ? 'Edit Project' : 'Tambah Project Baru' }}</h3>
        </template>

        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column -->
            <div class="space-y-4">
              <UFormGroup label="Project Type" required>
                <USelectMenu
                  v-model="formData.type"
                  :options="['hero', 'feature', 'about', 'project', 'info']"
                  placeholder="Pilih tipe project"
                />
              </UFormGroup>

              <UFormGroup label="Title" required>
                <UInput v-model="formData.title" placeholder="Masukkan judul project" />
              </UFormGroup>

              <UFormGroup label="Description">
                <UTextarea v-model="formData.description" placeholder="Deskripsi project" :rows="4" />
              </UFormGroup>

              <UFormGroup label="Badge" v-if="['hero', 'about', 'info'].includes(formData.type)">
                <UInput v-model="formData.badge" placeholder="Featured Project" />
              </UFormGroup>

              <UFormGroup label="Category" v-if="formData.type === 'project'">
                <UInput v-model="formData.category" placeholder="branding, packaging, etc" />
              </UFormGroup>

              <UFormGroup label="Client" v-if="formData.type === 'project'">
                <UInput v-model="formData.client" placeholder="Client name" />
              </UFormGroup>
            </div>

            <!-- Right Column -->
            <div class="space-y-4">
              <UFormGroup label="Image URL">
                <UInput v-model="formData.image" placeholder="/images/project/1.png" />
              </UFormGroup>

              <UFormGroup label="Background Gradient">
                <USelectMenu
                  v-model="formData.bgGradient"
                  :options="[
                    'bg-gradient-to-br from-blue-500 to-purple-600',
                    'bg-gradient-to-br from-orange-500 to-red-600',
                    'bg-gradient-to-br from-purple-600 to-purple-800',
                    'bg-gradient-to-br from-blue-600 to-blue-800',
                    'bg-gray-900'
                  ]"
                  placeholder="Pilih gradient"
                />
              </UFormGroup>

              <UFormGroup label="Custom Height">
                <UInput v-model="formData.customHeight" placeholder="450px" />
              </UFormGroup>

              <!-- Preview -->
              <div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4">
                <p class="text-sm text-gray-500 mb-2">Preview:</p>
                <div class="aspect-[9/16] rounded-lg overflow-hidden" :class="formData.bgGradient">
                  <img
                    v-if="formData.image"
                    :src="formData.image"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-white/50">
                    No Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-2">
            <UButton color="gray" variant="ghost" label="Cancel" @click="isModalOpen = false" />
            <UButton
              label="Simpan"
              @click="saveItem"
              class="bg-gradient-to-r from-blue-600 to-purple-600"
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

const { portfolioItems } = usePortfolio()

const searchQuery = ref('')
const selectedType = ref('All')
const isModalOpen = ref(false)
const editMode = ref(false)

const formData = ref({
  id: null,
  type: 'project',
  title: '',
  description: '',
  image: '',
  bgGradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
  customHeight: '320px',
  badge: '',
  category: '',
  client: ''
})

const featuredCount = computed(() => {
  return portfolioItems.filter(item => item.type === 'hero').length
})

const categoriesCount = computed(() => {
  const categories = new Set(portfolioItems.map(item => item.type))
  return categories.size
})

const filteredPortfolio = computed(() => {
  let result = portfolioItems

  if (selectedType.value !== 'All') {
    result = result.filter(item => item.type.toLowerCase() === selectedType.value.toLowerCase())
  }

  if (searchQuery.value) {
    result = result.filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  return result
})

const openAddModal = () => {
  editMode.value = false
  formData.value = {
    id: portfolioItems.length + 1,
    type: 'project',
    title: '',
    description: '',
    image: '',
    bgGradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    customHeight: '320px',
    badge: '',
    category: '',
    client: ''
  }
  isModalOpen.value = true
}

const editItem = (item) => {
  editMode.value = true
  formData.value = { ...item }
  isModalOpen.value = true
}

const saveItem = () => {
  // Logic untuk save akan ditambahkan nanti dengan API
  console.log('Saving item:', formData.value)
  isModalOpen.value = false
}

const deleteItem = (item) => {
  if (confirm(`Hapus project "${item.title}"?`)) {
    console.log('Deleting item:', item.id)
  }
}
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent;
}

.glass-card {
  @apply bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08),
              0 4px 16px rgba(124, 58, 237, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(147, 197, 253, 0.2);
}
</style>
