<template>
  <section class="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider mb-2">Client Portfolio</p>
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Dipercaya Berbagai Industri
        </h3>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Pengalaman nyata melayani 50+ klien dari berbagai sektor bisnis
        </p>
      </div>

      <!-- Recent Client Projects - Real Case Studies -->
      <div class="max-w-5xl mx-auto space-y-8 mb-16">
        <!-- Project Case 1 -->
        <div class="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">Platform E-Commerce Fashion</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">E-Commerce • Jakarta</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">Completed</span>
              <span class="text-xs text-gray-500 dark:text-gray-500">Q4 2024</span>
            </div>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Website toko online dengan sistem inventory management, payment gateway, dan dashboard analytics. Menangani 1000+ produk dengan performa optimal.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Vue.js</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Nuxt 3</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Stripe Payment</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">MongoDB</span>
          </div>
        </div>

        <!-- Project Case 2 -->
        <div class="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">Sistem Reservasi Restaurant Chain</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Food & Beverage • Bali</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">Completed</span>
              <span class="text-xs text-gray-500 dark:text-gray-500">Q3 2024</span>
            </div>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Platform booking online untuk 5 cabang restoran. Fitur: real-time table availability, menu digital, order tracking, dan customer loyalty program.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">React</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Node.js</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Real-time Updates</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">WhatsApp API</span>
          </div>
        </div>

        <!-- Project Case 3 -->
        <div class="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">Learning Management System (LMS)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Education • Bandung</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">Completed</span>
              <span class="text-xs text-gray-500 dark:text-gray-500">Q2 2024</span>
            </div>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Platform e-learning untuk sekolah dengan 500+ siswa. Video streaming, quiz online, assignment submission, dan progress tracking untuk guru dan orangtua.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Next.js</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">PostgreSQL</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Video Streaming</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg">Progressive Web App</span>
          </div>
        </div>
      </div>

      <!-- Statistics Overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        <div class="text-center p-6 glass-card rounded-xl">
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Projek Selesai</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">2021 - 2024</p>
        </div>
        <div class="text-center p-6 glass-card rounded-xl">
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">45+</div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">Repeat rate 80%</p>
        </div>
        <div class="text-center p-6 glass-card rounded-xl">
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">6</div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Industri</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">Diverse sectors</p>
        </div>
        <div class="text-center p-6 glass-card rounded-xl">
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Support</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">After launch</p>
        </div>
      </div>

      <!-- Industries Served -->
      <div class="text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span class="font-semibold text-gray-900 dark:text-white">Sektor yang kami layani:</span>
        </p>
        <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">E-Commerce</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">Food & Beverage</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">Education</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">Healthcare</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">Technology</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">Finance</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-6">
          Melayani klien di Jakarta, Bandung, Surabaya, Bali dan seluruh Indonesia
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
