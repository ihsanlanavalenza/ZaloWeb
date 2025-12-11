<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Testimonials Management</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Kelola testimoni dan review dari klien</p>
        </div>
        <UButton
          label="Tambah Testimonial"
          icon="i-heroicons-plus"
          color="primary"
          @click="openModal()"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6 space-y-6">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard class="glass-card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Testimonials</p>
              <p class="text-3xl font-bold gradient-text">{{ testimonials.length }}</p>
            </div>
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-6 h-6 text-white" />
            </div>
          </div>
        </UCard>

        <UCard class="glass-card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Avg Rating</p>
              <p class="text-3xl font-bold gradient-text">{{ averageRating.toFixed(1) }}</p>
            </div>
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-star" class="w-6 h-6 text-white" />
            </div>
          </div>
        </UCard>

        <UCard class="glass-card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Published</p>
              <p class="text-3xl font-bold gradient-text">{{ publishedCount }}</p>
            </div>
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-white" />
            </div>
          </div>
        </UCard>

        <UCard class="glass-card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Featured</p>
              <p class="text-3xl font-bold gradient-text">{{ featuredCount }}</p>
            </div>
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <UIcon name="i-heroicons-trophy" class="w-6 h-6 text-white" />
            </div>
          </div>
        </UCard>
      </div>

      <!-- Filter & Search -->
      <UCard class="glass-card">
        <div class="flex flex-col sm:flex-row gap-4">
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass"
            placeholder="Cari nama atau perusahaan..."
            class="flex-1"
          />
          <USelectMenu
            v-model="filterStatus"
            :options="['All', 'Published', 'Draft', 'Featured']"
            placeholder="Filter Status"
            class="w-full sm:w-48"
          />
          <USelectMenu
            v-model="filterRating"
            :options="['All Ratings', '5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']"
            placeholder="Filter Rating"
            class="w-full sm:w-48"
          />
        </div>
      </UCard>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="testimonial in filteredTestimonials"
          :key="testimonial.id"
          class="glass-card hover:shadow-xl transition-all duration-300 group"
        >
          <div class="space-y-4">
            <!-- Header with Avatar & Info -->
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <UAvatar
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  size="lg"
                />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.position }}</p>
                  <p class="text-xs text-gray-400 dark:text-gray-500">{{ testimonial.company }}</p>
                </div>
              </div>
              <UDropdown
                :items="[
                  [{ label: 'Edit', icon: 'i-heroicons-pencil', click: () => openModal(testimonial) }],
                  [{ label: 'Toggle Featured', icon: 'i-heroicons-star', click: () => toggleFeatured(testimonial.id) }],
                  [{ label: 'Toggle Published', icon: 'i-heroicons-eye', click: () => togglePublished(testimonial.id) }],
                  [{ label: 'Delete', icon: 'i-heroicons-trash', click: () => deleteTestimonial(testimonial.id) }]
                ]"
              >
                <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" />
              </UDropdown>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-1">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'"
                class="w-5 h-5"
              />
              <span class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">{{ testimonial.rating }}.0</span>
            </div>

            <!-- Content -->
            <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{{ testimonial.content }}</p>

            <!-- Badges -->
            <div class="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <UBadge v-if="testimonial.featured" color="yellow" variant="subtle" size="xs">
                <UIcon name="i-heroicons-star" class="w-3 h-3 mr-1" />
                Featured
              </UBadge>
              <UBadge :color="testimonial.published ? 'green' : 'gray'" variant="subtle" size="xs">
                <UIcon :name="testimonial.published ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" class="w-3 h-3 mr-1" />
                {{ testimonial.published ? 'Published' : 'Draft' }}
              </UBadge>
              <span class="text-xs text-gray-400 dark:text-gray-500 ml-auto">{{ testimonial.date }}</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Empty State -->
      <div v-if="filteredTestimonials.length === 0" class="text-center py-12">
        <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-10 h-10 text-gray-400" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No testimonials found</h3>
        <p class="text-gray-500 dark:text-gray-400">Try adjusting your filters or add a new testimonial</p>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <UModal v-model="isModalOpen" :ui="{ width: 'sm:max-w-2xl' }">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">{{ editingItem ? 'Edit Testimonial' : 'Add New Testimonial' }}</h3>
        </template>

        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UFormGroup label="Name" required>
              <UInput v-model="formData.name" placeholder="John Doe" />
            </UFormGroup>

            <UFormGroup label="Position" required>
              <UInput v-model="formData.position" placeholder="CEO" />
            </UFormGroup>
          </div>

          <UFormGroup label="Company" required>
            <UInput v-model="formData.company" placeholder="Company Name" />
          </UFormGroup>

          <UFormGroup label="Avatar URL">
            <UInput v-model="formData.avatar" placeholder="https://..." />
          </UFormGroup>

          <UFormGroup label="Rating" required>
            <div class="flex items-center gap-2">
              <button
                v-for="i in 5"
                :key="i"
                @click="formData.rating = i"
                class="focus:outline-none"
              >
                <UIcon
                  name="i-heroicons-star-solid"
                  :class="i <= formData.rating ? 'text-yellow-400' : 'text-gray-300'"
                  class="w-8 h-8 transition-colors hover:text-yellow-300 cursor-pointer"
                />
              </button>
              <span class="ml-2 text-sm font-medium">{{ formData.rating }}.0</span>
            </div>
          </UFormGroup>

          <UFormGroup label="Testimonial Content" required>
            <UTextarea
              v-model="formData.content"
              placeholder="Write the testimonial here..."
              :rows="5"
            />
          </UFormGroup>

          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Published">
              <UToggle v-model="formData.published" />
            </UFormGroup>

            <UFormGroup label="Featured">
              <UToggle v-model="formData.featured" />
            </UFormGroup>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton label="Cancel" color="gray" variant="ghost" @click="isModalOpen = false" />
            <UButton label="Save" icon="i-heroicons-check" @click="saveTestimonial" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const isModalOpen = ref(false)
const editingItem = ref(null)
const searchQuery = ref('')
const filterStatus = ref('All')
const filterRating = ref('All Ratings')

const formData = ref({
  name: '',
  position: '',
  company: '',
  avatar: '',
  rating: 5,
  content: '',
  published: true,
  featured: false
})

// Sample data - nanti diganti dengan API
const testimonials = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Tech Solutions Inc',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=7c3aed&color=fff',
    rating: 5,
    content: 'Luar biasa! Tim mereka sangat profesional dan hasil kerja melebihi ekspektasi. Website kami sekarang jauh lebih modern dan user-friendly.',
    published: true,
    featured: true,
    date: '2024-12-01'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Digital Ventures',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=2563eb&color=fff',
    rating: 5,
    content: 'Pengalaman bekerja dengan tim ini sangat menyenangkan. Komunikasi lancar, deadline tepat waktu, dan hasilnya sempurna!',
    published: true,
    featured: true,
    date: '2024-11-28'
  },
  {
    id: 3,
    name: 'Lisa Anderson',
    position: 'Product Manager',
    company: 'Startup Hub',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=10b981&color=fff',
    rating: 4,
    content: 'Sangat puas dengan hasilnya. Website kami sekarang lebih cepat dan responsif. Highly recommended untuk digital agency!',
    published: true,
    featured: false,
    date: '2024-11-25'
  },
  {
    id: 4,
    name: 'David Kumar',
    position: 'Founder',
    company: 'E-Commerce Pro',
    avatar: 'https://ui-avatars.com/api/?name=David+Kumar&background=f59e0b&color=fff',
    rating: 5,
    content: 'Platform e-commerce kami sekarang berjalan dengan sempurna. Tim sangat membantu dan support after-sales nya excellent!',
    published: true,
    featured: false,
    date: '2024-11-20'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    position: 'Operations Head',
    company: 'Restaurant Chain',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=ec4899&color=fff',
    rating: 5,
    content: 'Sistem reservasi yang mereka buat sangat membantu operasional kami. Customer satisfaction meningkat drastis!',
    published: false,
    featured: false,
    date: '2024-11-15'
  }
])

const averageRating = computed(() => {
  if (testimonials.value.length === 0) return 0
  const sum = testimonials.value.reduce((acc, t) => acc + t.rating, 0)
  return sum / testimonials.value.length
})

const publishedCount = computed(() => {
  return testimonials.value.filter(t => t.published).length
})

const featuredCount = computed(() => {
  return testimonials.value.filter(t => t.featured).length
})

const filteredTestimonials = computed(() => {
  return testimonials.value.filter(testimonial => {
    // Search filter
    const searchLower = searchQuery.value.toLowerCase()
    const matchesSearch = !searchQuery.value || 
      testimonial.name.toLowerCase().includes(searchLower) ||
      testimonial.company.toLowerCase().includes(searchLower) ||
      testimonial.content.toLowerCase().includes(searchLower)

    // Status filter
    let matchesStatus = true
    if (filterStatus.value === 'Published') matchesStatus = testimonial.published
    if (filterStatus.value === 'Draft') matchesStatus = !testimonial.published
    if (filterStatus.value === 'Featured') matchesStatus = testimonial.featured

    // Rating filter
    let matchesRating = true
    if (filterRating.value !== 'All Ratings') {
      const rating = parseInt(filterRating.value.split(' ')[0])
      matchesRating = testimonial.rating === rating
    }

    return matchesSearch && matchesStatus && matchesRating
  })
})

const openModal = (item = null) => {
  if (item) {
    editingItem.value = item
    formData.value = { ...item }
  } else {
    editingItem.value = null
    formData.value = {
      name: '',
      position: '',
      company: '',
      avatar: '',
      rating: 5,
      content: '',
      published: true,
      featured: false
    }
  }
  isModalOpen.value = true
}

const saveTestimonial = () => {
  if (editingItem.value) {
    // Update existing
    const index = testimonials.value.findIndex(t => t.id === editingItem.value.id)
    testimonials.value[index] = { ...formData.value, id: editingItem.value.id }
  } else {
    // Add new
    const newId = Math.max(...testimonials.value.map(t => t.id), 0) + 1
    testimonials.value.unshift({
      ...formData.value,
      id: newId,
      date: new Date().toISOString().split('T')[0]
    })
  }
  isModalOpen.value = false
}

const deleteTestimonial = (id) => {
  if (confirm('Are you sure you want to delete this testimonial?')) {
    testimonials.value = testimonials.value.filter(t => t.id !== id)
  }
}

const togglePublished = (id) => {
  const testimonial = testimonials.value.find(t => t.id === id)
  if (testimonial) testimonial.published = !testimonial.published
}

const toggleFeatured = (id) => {
  const testimonial = testimonials.value.find(t => t.id === id)
  if (testimonial) testimonial.featured = !testimonial.featured
}
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
  border: 1px solid rgba(147, 197, 253, 0.2);
}

.dark .glass-card {
  background: rgba(17, 24, 39, 0.95);
  border: 1px solid rgba(75, 85, 99, 0.3);
}
</style>
