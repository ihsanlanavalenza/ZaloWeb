<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Error Icon Display -->
        <div v-if="error.statusCode === 404" class="flex items-center justify-center gap-4 mb-8">
          <h1 class="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">4</h1>
          <div class="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"/>
            </svg>
          </div>
          <h1 class="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">4</h1>
        </div>
        
        <!-- Generic Error Icon -->
        <div v-else class="mb-8">
          <div class="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
        </div>

        <!-- Error Messages -->
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ error.statusCode === 404 ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan' }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {{ error.statusCode === 404 
            ? 'Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan.' 
            : error.message || 'Maaf, terjadi kesalahan pada sistem. Silakan coba lagi nanti.'
          }}
        </p>
        
        <!-- Action Button -->
        <button 
          @click="handleError"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props to receive error from Nuxt
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

// Handle error and redirect to home
const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
