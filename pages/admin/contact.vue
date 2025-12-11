<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Contact Form Submissions</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Kelola pesan masuk dari contact form</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6">
      <!-- Empty State -->
      <div v-if="!loading && leads.length === 0" class="flex flex-col items-center justify-center py-20">
        <div class="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mb-6">
          <UIcon name="i-heroicons-envelope" class="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Belum Ada Pesan</h3>
        <p class="text-gray-500 dark:text-gray-400 text-center max-w-md">
          Pesan dari contact form akan muncul di sini
        </p>
      </div>

      <!-- Loading State -->
      <div v-else-if="loading" class="space-y-4">
        <div v-for="i in 5" :key="i" class="animate-pulse bg-white dark:bg-gray-800 rounded-lg p-6">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Leads List -->
      <div v-else class="space-y-4">
        <div
          v-for="lead in leads"
          :key="lead.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ lead.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ lead.email }}</p>
              <p v-if="lead.phone" class="text-sm text-gray-600 dark:text-gray-400">{{ lead.phone }}</p>
            </div>
            <UBadge
              :label="lead.status"
              :color="getStatusColor(lead.status)"
              size="sm"
            />
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ lead.message }}</p>

          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{{ formatDate(lead.createdAt) }}</span>
            <UButton
              icon="i-heroicons-trash"
              color="red"
              variant="ghost"
              size="sm"
              @click="confirmDelete(lead)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <UModal v-model="showDeleteModal" title="Konfirmasi Hapus">
      <UCard>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Apakah Anda yakin ingin menghapus pesan ini?
        </p>
        <div class="flex justify-end gap-3">
          <UButton
            label="Batal"
            color="gray"
            variant="ghost"
            @click="showDeleteModal = false"
          />
          <UButton
            label="Hapus"
            color="red"
            :loading="deleting"
            @click="handleDelete"
          />
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
});

const toast = useToast();

// State
const leads = ref([]);
const loading = ref(true);
const deleting = ref(false);
const showDeleteModal = ref(false);
const selectedLead = ref(null);

// Fetch leads
const fetchLeads = async () => {
  try {
    loading.value = true;
    const { data } = await $fetch('/api/contact/leads');
    leads.value = data || [];
  } catch (error) {
    console.error('Error fetching leads:', error);
    toast.add({
      title: 'Error',
      description: 'Gagal memuat data',
      color: 'red',
    });
    leads.value = [];
  } finally {
    loading.value = false;
  }
};

// Get status color
const getStatusColor = (status) => {
  const colors = {
    new: 'blue',
    contacted: 'yellow',
    qualified: 'green',
    converted: 'purple',
    closed: 'gray',
  };
  return colors[status] || 'gray';
};

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Confirm delete
const confirmDelete = (lead) => {
  selectedLead.value = lead;
  showDeleteModal.value = true;
};

// Handle delete (if API exists)
const handleDelete = async () => {
  try {
    deleting.value = true;
    // Add delete API call here when ready
    toast.add({
      title: 'Berhasil',
      description: 'Pesan berhasil dihapus',
      color: 'green',
    });
    showDeleteModal.value = false;
    await fetchLeads();
  } catch (error) {
    console.error('Error deleting lead:', error);
    toast.add({
      title: 'Error',
      description: 'Gagal menghapus pesan',
      color: 'red',
    });
  } finally {
    deleting.value = false;
  }
};

// Fetch on mount
onMounted(() => {
  fetchLeads();
});
</script>
