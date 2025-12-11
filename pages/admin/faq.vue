<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="FAQ Management">
        <template #right>
          <UButton
            icon="i-heroicons-plus"
            label="Tambah FAQ"
            @click="openAddModal"
            class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent class="p-6 space-y-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-blue-100' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total FAQs</p>
                <p class="text-3xl font-bold gradient-text">{{ faqs.length }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-purple-100' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Categories</p>
                <p class="text-3xl font-bold gradient-text">{{ categoriesCount }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-tag" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>

          <UCard :ui="{ body: { padding: 'p-5' }, ring: 'ring-1 ring-blue-100' }" class="glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 mb-1">Published</p>
                <p class="text-3xl font-bold gradient-text">{{ publishedCount }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-white" />
              </div>
            </div>
          </UCard>
        </div>

        <!-- FAQ List -->
        <UCard :ui="{ body: { padding: 'p-6' }, ring: 'ring-1 ring-blue-100' }" class="glass-card">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">All Questions</h3>
              <div class="flex items-center gap-2">
                <UInput
                  icon="i-heroicons-magnifying-glass"
                  placeholder="Cari FAQ..."
                  size="sm"
                  class="w-64"
                  v-model="searchQuery"
                />
                <USelectMenu
                  v-model="selectedCategory"
                  :options="['All', ...categories]"
                  size="sm"
                />
              </div>
            </div>
          </template>

          <div class="space-y-3">
            <div
              v-for="(faq, index) in filteredFAQs"
              :key="faq.id"
              class="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 overflow-hidden"
            >
              <div class="p-5">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <!-- Question -->
                    <div class="flex items-start gap-3 mb-3">
                      <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span class="text-white text-sm font-bold">Q</span>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ faq.question }}</h4>
                        <div class="flex items-center gap-2">
                          <UBadge :color="categoryColor(faq.category)" variant="subtle" size="xs">
                            {{ faq.category }}
                          </UBadge>
                          <UBadge :color="faq.published ? 'green' : 'gray'" variant="subtle" size="xs">
                            {{ faq.published ? 'Published' : 'Draft' }}
                          </UBadge>
                        </div>
                      </div>
                    </div>

                    <!-- Answer -->
                    <div class="flex items-start gap-3 pl-11">
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <UButton
                      icon="i-heroicons-pencil"
                      size="sm"
                      variant="ghost"
                      color="gray"
                      @click="editFAQ(faq)"
                    />
                    <UButton
                      icon="i-heroicons-trash"
                      size="sm"
                      variant="ghost"
                      color="red"
                      @click="deleteFAQ(faq)"
                    />
                  </div>
                </div>
              </div>

              <!-- Divider for not last item -->
              <div v-if="index < filteredFAQs.length - 1" class="border-t border-gray-100 dark:border-gray-800"></div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredFAQs.length === 0" class="text-center py-12">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-question-mark-circle" class="w-10 h-10 text-gray-400" />
            </div>
            <p class="text-gray-500 mb-2">Tidak ada FAQ ditemukan</p>
            <p class="text-sm text-gray-400">Tambahkan pertanyaan yang sering ditanyakan</p>
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>

    <!-- Add/Edit Modal -->
    <UModal v-model="isModalOpen" :ui="{ width: 'sm:max-w-2xl' }">
      <UCard class="glass-card">
        <template #header>
          <h3 class="text-lg font-semibold">{{ editMode ? 'Edit FAQ' : 'Tambah FAQ Baru' }}</h3>
        </template>

        <div class="space-y-4">
          <UFormGroup label="Category" required>
            <USelectMenu
              v-model="formData.category"
              :options="categories"
              placeholder="Pilih kategori"
            />
          </UFormGroup>

          <UFormGroup label="Question" required>
            <UTextarea v-model="formData.question" placeholder="Pertanyaan yang sering ditanyakan..." :rows="2" />
          </UFormGroup>

          <UFormGroup label="Answer" required>
            <UTextarea v-model="formData.answer" placeholder="Jawaban detail untuk pertanyaan..." :rows="5" />
          </UFormGroup>

          <UFormGroup label="Status">
            <div class="flex items-center gap-2">
              <UToggle v-model="formData.published" />
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ formData.published ? 'Published' : 'Draft' }}
              </span>
            </div>
          </UFormGroup>

          <!-- Preview -->
          <div class="border-t border-gray-200 dark:border-gray-800 pt-4">
            <p class="text-sm font-medium mb-3">Preview:</p>
            <div class="p-5 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100 dark:border-gray-700">
              <div class="flex items-start gap-3 mb-3">
                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white text-sm font-bold">Q</span>
                </div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ formData.question || 'Pertanyaan...' }}</h4>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 pl-11">{{ formData.answer || 'Jawaban...' }}</p>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-2">
            <UButton color="gray" variant="ghost" label="Cancel" @click="isModalOpen = false" />
            <UButton
              label="Simpan"
              @click="saveFAQ"
              class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
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
const selectedCategory = ref('All')
const isModalOpen = ref(false)
const editMode = ref(false)

const categories = ['Umum', 'Harga', 'Teknis', 'Layanan', 'Pembayaran']

const formData = ref({
  id: null,
  question: '',
  answer: '',
  category: 'Umum',
  published: true
})

const faqs = ref([
  {
    id: 1,
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Untuk website company profile standar: 2-3 minggu, E-commerce: 4-6 minggu, Custom web app: 6-12 minggu.',
    category: 'Umum',
    published: true
  },
  {
    id: 2,
    question: 'Apakah harga sudah termasuk hosting dan domain?',
    answer: 'Harga yang tercantum adalah untuk pengembangan website. Hosting dan domain bisa kami bantu setup dengan biaya terpisah sesuai paket yang dipilih, atau Anda bisa menggunakan hosting sendiri.',
    category: 'Harga',
    published: true
  },
  {
    id: 3,
    question: 'Teknologi apa yang digunakan?',
    answer: 'Kami menggunakan teknologi modern seperti Nuxt.js, Vue.js, React, Node.js, dan database seperti PostgreSQL atau MongoDB. Semua disesuaikan dengan kebutuhan project Anda.',
    category: 'Teknis',
    published: true
  },
  {
    id: 4,
    question: 'Apakah ada garansi maintenance?',
    answer: 'Ya, semua paket sudah termasuk maintenance gratis. Paket Starter: 1 bulan, Professional: 3 bulan, Enterprise: 6 bulan. Setelah itu bisa diperpanjang dengan biaya subscription.',
    category: 'Layanan',
    published: true
  },
  {
    id: 5,
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran dibagi menjadi 3 tahap: 30% DP saat deal, 40% saat development 50%, 30% saat selesai dan serah terima. Pembayaran bisa via transfer bank atau payment gateway.',
    category: 'Pembayaran',
    published: true
  }
])

const categoriesCount = computed(() => {
  return new Set(faqs.value.map(f => f.category)).size
})

const publishedCount = computed(() => {
  return faqs.value.filter(f => f.published).length
})

const filteredFAQs = computed(() => {
  let result = faqs.value

  if (selectedCategory.value !== 'All') {
    result = result.filter(f => f.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    result = result.filter(f =>
      f.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  return result
})

const categoryColor = (category) => {
  const colors = {
    'Umum': 'blue',
    'Harga': 'green',
    'Teknis': 'purple',
    'Layanan': 'orange',
    'Pembayaran': 'pink'
  }
  return colors[category] || 'gray'
}

const openAddModal = () => {
  editMode.value = false
  formData.value = {
    id: faqs.value.length + 1,
    question: '',
    answer: '',
    category: 'Umum',
    published: true
  }
  isModalOpen.value = true
}

const editFAQ = (faq) => {
  editMode.value = true
  formData.value = { ...faq }
  isModalOpen.value = true
}

const saveFAQ = () => {
  console.log('Saving FAQ:', formData.value)
  isModalOpen.value = false
}

const deleteFAQ = (faq) => {
  if (confirm(`Hapus FAQ: "${faq.question}"?`)) {
    console.log('Deleting FAQ:', faq.id)
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
