<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Banner Management</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Kelola banner slider website Anda</p>
        </div>
        <UButton
          label="Tambah Banner"
          icon="i-heroicons-plus"
          color="primary"
          @click="openCreateModal"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6">
      <!-- Empty State -->
      <div v-if="!loading && banners.length === 0" class="flex flex-col items-center justify-center py-20">
        <div class="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mb-6">
          <UIcon name="i-heroicons-photo" class="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Belum Ada Banner</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">
          Mulai tambahkan banner untuk slider website Anda. Banner akan ditampilkan secara otomatis di homepage.
        </p>
        <UButton
          label="Tambah Banner Pertama"
          icon="i-heroicons-plus"
          size="lg"
          @click="openCreateModal"
        />
      </div>

      <!-- Loading State -->
      <div v-else-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="animate-pulse">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Banners Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="banner in banners"
          :key="banner.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <!-- Banner Image -->
          <div class="relative aspect-video bg-gray-100 dark:bg-gray-900">
            <img
              :src="banner.image"
              :alt="banner.alt"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <div class="absolute top-3 right-3 flex gap-2">
              <UBadge
                :label="banner.isActive ? 'Active' : 'Inactive'"
                :color="banner.isActive ? 'green' : 'gray'"
                size="sm"
              />
              <UBadge
                :label="`#${banner.order}`"
                color="blue"
                size="sm"
              />
            </div>
          </div>

          <!-- Banner Info -->
          <div class="p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Urutan: <span class="font-semibold text-gray-900 dark:text-white">{{ banner.order }}</span>
              </span>
              <span class="text-sm" :class="banner.isActive ? 'text-green-600' : 'text-gray-400'">
                {{ banner.isActive ? '✓ Active' : '✗ Inactive' }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-2">
              <UButton
                icon="i-heroicons-pencil"
                size="sm"
                color="gray"
                variant="soft"
                @click="openEditModal(banner)"
              />
              <UButton
                icon="i-heroicons-trash"
                size="sm"
                color="red"
                variant="soft"
                @click="confirmDelete(banner.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Modal -->
    <UModal v-model="showModal" :prevent-close="submitting">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">
            {{ isEditMode ? 'Edit Banner' : 'Tambah Banner Baru' }}
          </h3>
        </template>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Image Upload -->
          <UFormGroup label="Upload Gambar Banner *" required hint="Rekomendasi: 1920x600px (16:5 ratio), Max 5MB">
            <div class="space-y-3">
              <!-- Preview -->
              <div v-if="imagePreview || form.image" class="relative w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  :src="imagePreview || form.image" 
                  alt="Preview"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
                <button
                  v-if="imagePreview || form.image"
                  type="button"
                  @click="clearImage"
                  class="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  :disabled="submitting"
                >
                  <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
                </button>
              </div>

              <!-- Upload Button -->
              <div class="flex flex-col gap-2">
                <label class="cursor-pointer">
                  <UButton
                    icon="i-heroicons-photo"
                    color="primary"
                    size="lg"
                    :disabled="submitting || uploading"
                    :loading="uploading"
                    as="span"
                    block
                  >
                    {{ uploading ? 'Uploading...' : 'Pilih Gambar' }}
                  </UButton>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleFileSelect"
                    :disabled="submitting || uploading"
                  />
                </label>
                <p class="text-xs text-gray-500 text-center">JPG, PNG, WebP atau GIF</p>
              </div>
            </div>
          </UFormGroup>

          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Urutan" hint="Urutan tampilan banner">
              <UInput
                v-model.number="form.order"
                type="number"
                min="0"
                placeholder="0"
                :disabled="submitting"
              />
            </UFormGroup>

            <UFormGroup label="Status">
              <UToggle
                v-model="form.isActive"
                :label="form.isActive ? 'Active' : 'Inactive'"
                :disabled="submitting"
                size="lg"
              />
            </UFormGroup>
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <UButton
              label="Batal"
              color="gray"
              variant="ghost"
              @click="closeModal"
              :disabled="submitting"
            />
            <UButton
              :label="isEditMode ? 'Update' : 'Simpan'"
              type="submit"
              :loading="submitting"
            />
          </div>
        </form>
      </UCard>
    </UModal>

    <!-- Delete Confirmation Modal -->
    <UModal v-model="showDeleteModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Konfirmasi Hapus</h3>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Apakah Anda yakin ingin menghapus banner ini? Tindakan ini tidak dapat dibatalkan.
        </p>
        <div class="flex justify-end gap-3">
          <UButton
            label="Batal"
            color="gray"
            variant="ghost"
            @click="showDeleteModal = false"
            :disabled="deleting"
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

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});

const toast = useToast();

// State
const loading = ref(false);
const submitting = ref(false);
const uploading = ref(false);
const deleting = ref(false);
const showModal = ref(false);
const showDeleteModal = ref(false);
const isEditMode = ref(false);
const editingId = ref<number | null>(null);
const deletingId = ref<number | null>(null);
const fileInput = ref<HTMLInputElement>();
const imagePreview = ref('');

const banners = ref<any[]>([]);

const form = ref({
  image: '',
  order: 0,
  isActive: true,
});

// Fetch banners
const fetchBanners = async () => {
  try {
    loading.value = true;
    const response = await $fetch<any>('/api/banner/all');
    banners.value = response.data || [];
  } catch (error: any) {
    console.error('Fetch error:', error);
    toast.add({
      title: 'Error',
      description: 'Gagal memuat data banner',
      color: 'red',
    });
  } finally {
    loading.value = false;
  }
};

// Modal actions
const openCreateModal = () => {
  isEditMode.value = false;
  resetForm();
  showModal.value = true;
};

const openEditModal = (banner: any) => {
  isEditMode.value = true;
  editingId.value = banner.id;
  form.value = {
    image: banner.image,
    order: banner.order,
    isActive: banner.isActive,
  };
  imagePreview.value = '';
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  resetForm();
};

const resetForm = () => {
  form.value = {
    image: '',
    order: 0,
    isActive: true,
  };
  editingId.value = null;
  imagePreview.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const clearImage = () => {
  form.value.image = '';
  imagePreview.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const handleFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (!file) return;

  // Validate file size (5MB)
  if (file.size > 5 * 1024 * 1024) {
    toast.add({
      title: 'Error',
      description: 'Ukuran file maksimal 5MB',
      color: 'red',
    });
    return;
  }

  // Validate file type
  if (!file.type.startsWith('image/')) {
    toast.add({
      title: 'Error',
      description: 'File harus berupa gambar',
      color: 'red',
    });
    return;
  }

  // Show preview
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);

  // Upload file
  try {
    uploading.value = true;
    const formData = new FormData();
    formData.append('file', file);

    const response = await $fetch<{ success: boolean; url: string }>('/api/upload/image', {
      method: 'POST',
      body: formData,
    });

    if (response.success) {
      form.value.image = response.url;
      toast.add({
        title: 'Success',
        description: 'Gambar berhasil diupload',
        color: 'green',
      });
    }
  } catch (error: any) {
    console.error('Upload error:', error);
    toast.add({
      title: 'Error',
      description: error.data?.message || 'Gagal upload gambar',
      color: 'red',
    });
    clearImage();
  } finally {
    uploading.value = false;
  }
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
};

// Submit form
const handleSubmit = async () => {
  // Validation
  if (!form.value.image) {
    toast.add({
      title: 'Error',
      description: 'Gambar banner harus diupload',
      color: 'red',
    });
    return;
  }

  try {
    submitting.value = true;

    if (isEditMode.value && editingId.value) {
      // Update
      await $fetch(`/api/banner/${editingId.value}`, {
        method: 'PUT',
        body: form.value,
      });

      toast.add({
        title: 'Success',
        description: 'Banner berhasil diupdate',
        color: 'green',
      });
    } else {
      // Create
      await $fetch('/api/banner/create', {
        method: 'POST',
        body: form.value,
      });

      toast.add({
        title: 'Success',
        description: 'Banner berhasil ditambahkan',
        color: 'green',
      });
    }

    closeModal();
    await fetchBanners();
  } catch (error: any) {
    console.error('Submit error:', error);
    toast.add({
      title: 'Error',
      description: error.data?.message || 'Gagal menyimpan banner',
      color: 'red',
    });
  } finally {
    submitting.value = false;
  }
};

// Delete banner
const confirmDelete = (id: number) => {
  deletingId.value = id;
  showDeleteModal.value = true;
};

const handleDelete = async () => {
  if (!deletingId.value) return;

  try {
    deleting.value = true;
    await $fetch(`/api/banner/${deletingId.value}`, {
      method: 'DELETE',
    });

    toast.add({
      title: 'Success',
      description: 'Banner berhasil dihapus',
      color: 'green',
    });

    showDeleteModal.value = false;
    await fetchBanners();
  } catch (error: any) {
    console.error('Delete error:', error);
    toast.add({
      title: 'Error',
      description: error.data?.message || 'Gagal menghapus banner',
      color: 'red',
    });
  } finally {
    deleting.value = false;
    deletingId.value = null;
  }
};

// Load data on mount
onMounted(() => {
  fetchBanners();
});
</script>
