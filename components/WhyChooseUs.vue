<template>
  <section id="why-choose-us" class="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <span class="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
          ✨ Keunggulan Kami
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          Mengapa Memilih <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ZaloWeb?</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Kami memberikan solusi terbaik dengan komitmen penuh untuk kesuksesan bisnis Anda
        </p>
      </div>

      <!-- Key Unique Selling Points with Stagger Animation -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        <div 
          v-for="(point, index) in uniqueSellingPoints" 
          :key="index"
          :style="{ animationDelay: `${index * 100}ms` }"
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up"
        >
          <!-- Animated Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div class="relative z-10">
            <!-- Icon with Glow Effect -->
            <div class="relative mb-6 w-fit">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div class="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <component :is="point.icon" class="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
              {{ point.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-sm md:text-base">
              {{ point.description }}
            </p>

            <!-- Features List with Icons -->
            <ul class="space-y-2.5">
              <li 
                v-for="(feature, idx) in point.features" 
                :key="idx"
                class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300"
                :style="{ transitionDelay: `${idx * 50}ms` }"
              >
                <div class="relative flex-shrink-0 mt-0.5">
                  <div class="absolute inset-0 bg-green-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <svg class="relative w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Animated Decorative Elements -->
          <div class="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
          <div class="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700"></div>
        </div>
      </div>

      <!-- Statistics with Animation -->
      <div class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-900 dark:to-pink-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
        <!-- Animated Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px;"></div>
        </div>
        
        <!-- Floating Particles -->
        <div class="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
        <div class="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full animate-float-delayed opacity-40"></div>
        <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow opacity-50"></div>
        
        <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group cursor-pointer">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300" data-count="50">
              50+
            </div>
            <div class="text-blue-100 font-medium text-sm md:text-base">Proyek Selesai</div>
            <div class="w-12 h-1 bg-white/30 group-hover:bg-white/60 rounded-full mx-auto mt-3 transition-all duration-300"></div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              99%
            </div>
            <div class="text-blue-100 font-medium text-sm md:text-base">Kepuasan Klien</div>
            <div class="w-12 h-1 bg-white/30 group-hover:bg-white/60 rounded-full mx-auto mt-3 transition-all duration-300"></div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div class="text-blue-100 font-medium text-sm md:text-base">Tahun Pengalaman</div>
            <div class="w-12 h-1 bg-white/30 group-hover:bg-white/60 rounded-full mx-auto mt-3 transition-all duration-300"></div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div class="text-blue-100 font-medium text-sm md:text-base">Customer Support</div>
            <div class="w-12 h-1 bg-white/30 group-hover:bg-white/60 rounded-full mx-auto mt-3 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const DesignIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
])

const CodeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
])

const SpeedIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
])

const SEOIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
])

const MobileIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
])

const SupportIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' })
])

const uniqueSellingPoints = [
  {
    icon: DesignIcon,
    title: 'Desain Modern & Menarik',
    description: 'Tampilan website yang elegan dan profesional sesuai dengan identitas brand Anda',
    features: [
      'UI/UX Design Premium',
      'Custom Design Request',
      'Unlimited Revisi'
    ]
  },
  {
    icon: CodeIcon,
    title: 'Kode Berkualitas Tinggi',
    description: 'Dibangun dengan teknologi terkini dan best practices untuk performa optimal',
    features: [
      'Clean & Maintainable Code',
      'Latest Technology Stack',
      'Secure & Scalable'
    ]
  },
  {
    icon: SpeedIcon,
    title: 'Loading Super Cepat',
    description: 'Website yang cepat meningkatkan konversi dan kepuasan pengunjung',
    features: [
      'Optimized Performance',
      'Lazy Loading Images',
      'CDN Integration'
    ]
  },
  {
    icon: SEOIcon,
    title: 'SEO Friendly',
    description: 'Website yang mudah ditemukan di mesin pencari untuk bisnis yang lebih berkembang',
    features: [
      'On-Page SEO',
      'Meta Tags Optimization',
      'Sitemap & Analytics'
    ]
  },
  {
    icon: MobileIcon,
    title: 'Responsive di Semua Device',
    description: 'Tampilan sempurna di desktop, tablet, dan smartphone',
    features: [
      'Mobile First Design',
      'Cross-Browser Compatible',
      'Touch Optimized'
    ]
  },
  {
    icon: SupportIcon,
    title: 'Dukungan Penuh',
    description: 'Kami siap membantu Anda kapanpun dengan respon yang cepat',
    features: [
      'Free Maintenance (3 Bulan)',
      'Training & Documentation',
      'WhatsApp Support 24/7'
    ]
  }
]
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(20px) translateX(-10px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(10px);
  }
}
</style>
