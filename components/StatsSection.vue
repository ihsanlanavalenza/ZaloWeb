<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 grain opacity-50"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Dipercaya Berbagai Bisnis di Indonesia
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Startup yang berkembang pesat dengan tim profesional berpengalaman, siap membantu kesuksesan digital bisnis Anda
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Stat 1 -->
        <div class="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">180+</div>
          <div class="text-gray-600 dark:text-gray-300 font-medium">Projek Selesai</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Sejak 2022</div>
        </div>

        <!-- Stat 2 -->
        <div class="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">140+</div>
          <div class="text-gray-600 dark:text-gray-300 font-medium">Klien Terpercaya</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Di 15+ Kota</div>
        </div>

        <!-- Stat 3 -->
        <div class="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">99.8%</div>
          <div class="text-gray-600 dark:text-gray-300 font-medium">Uptime Server</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Hosting Reliable</div>
        </div>

        <!-- Stat 4 -->
        <div class="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">4.8/5</div>
          <div class="text-gray-600 dark:text-gray-300 font-medium">Rating Klien</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Google Reviews</div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-16 glass-card rounded-3xl p-8">
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">Secure Payment</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Pembayaran Aman</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">24/7 Support</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Siap Membantu</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-900">Quality Guarantee</div>
              <div class="text-sm text-gray-600">Garansi Kualitas</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-900">Fast Delivery</div>
              <div class="text-sm text-gray-600">Pengerjaan Cepat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
