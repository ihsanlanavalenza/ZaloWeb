<template>
  <section id="why-choose-us" class="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 grain opacity-20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Keunggulan Kami</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          Mengapa Memilih <span class="gradient-text">ZaloWeb?</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Kami memberikan solusi terbaik dengan komitmen penuh untuk kesuksesan bisnis Anda
        </p>
      </div>

      <!-- Key Unique Selling Points -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(point, index) in uniqueSellingPoints" 
          :key="index"
          class="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <!-- Gradient Overlay on Hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <component :is="point.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ point.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {{ point.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2">
              <li 
                v-for="(feature, idx) in point.features" 
                :key="idx"
                class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Decorative Circle -->
          <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 rounded-3xl p-8 md:p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2" data-count="150">150+</div>
            <div class="text-blue-100 font-medium">Proyek Selesai</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">99%</div>
            <div class="text-blue-100 font-medium">Kepuasan Klien</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
            <div class="text-blue-100 font-medium">Tahun Pengalaman</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div class="text-blue-100 font-medium">Customer Support</div>
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
