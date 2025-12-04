<template>
  <section class="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <p class="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider mb-2">Trusted By</p>
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Klien yang Mempercayai Kami
        </h3>
      </div>

      <!-- Logos Grid - Placeholder untuk logo klien -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <!-- Logo Placeholder 1 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">E-Com</span>
            </div>
            <p class="text-xs text-gray-600">E-commerce</p>
          </div>
        </div>

        <!-- Logo Placeholder 2 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">F&B</span>
            </div>
            <p class="text-xs text-gray-600">Restaurant</p>
          </div>
        </div>

        <!-- Logo Placeholder 3 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">EDU</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Education</p>
          </div>
        </div>

        <!-- Logo Placeholder 4 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">TECH</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Technology</p>
          </div>
        </div>

        <!-- Logo Placeholder 5 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">MED</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Healthcare</p>
          </div>
        </div>

        <!-- Logo Placeholder 6 -->
        <div class="glass-card p-6 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-transform group">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">FIN</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Finance</p>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Melayani berbagai industri di <span class="font-semibold text-gray-900 dark:text-white">Jakarta, Bandung, Surabaya, Bali</span> dan kota-kota lainnya
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Komponen untuk menampilkan trust badge berupa industri klien
// Bisa diganti dengan logo asli client ketika sudah ada
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.dark .glass-card {
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid rgba(75, 85, 99, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.glass-card:hover {
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
}

.dark .glass-card:hover {
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}
</style>
