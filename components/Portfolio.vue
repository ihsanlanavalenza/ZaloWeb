<template>
  <section id="portfolio" class="py-20 md:py-28 relative overflow-hidden">
    <!-- Sophisticated Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Header with Nuxt UI Style -->
      <div class="text-center max-w-4xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/10 rounded-full border border-blue-100 dark:border-blue-900/20 mb-6">
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">Paket Terbaik</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Harga Mulai dari <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Rp 580K</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Fleksibel, transparan, dan terpercaya.
        </p>
      </div>

      <!-- Comparison Cards -->
      <div class="max-w-6xl mx-auto mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Harga Satuan Card -->
          <div class="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative p-8">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg mb-3">
                    <svg class="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <span class="text-xs font-bold text-cyan-600 uppercase tracking-wide">Start Cepat</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Harga Satuan</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Website only, tanpa hosting</p>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-gray-900 dark:text-white">580K</span>
                  <span class="text-gray-500 dark:text-gray-400">mulai</span>
                </div>
                <div class="text-sm text-gray-500 line-through">Normal: Rp 900.000</div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Ideal untuk yang sudah memiliki hosting sendiri atau ingin kontrol penuh atas infrastruktur website.
              </p>
            </div>
          </div>

          <!-- Paket Bundling Card -->
          <div class="group relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-bl-2xl">
              REKOMENDASI
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
            <div class="relative p-8">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-3">
                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wide">Hemat 1.2JT</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Bundling</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">All-in-one solution</p>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">2.1JT</span>
                  <span class="text-gray-500 dark:text-gray-400">mulai</span>
                </div>
                <div class="text-sm text-gray-500 line-through">Normal: Rp 3.300.000</div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Paket lengkap include hosting 1 tahun, domain, SSL certificate, dan email profesional.
              </p>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="font-medium">Garansi 30-90 Hari</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="font-medium">Pengerjaan Cepat</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <span class="font-medium">Support 24/7</span>
          </div>
        </div>
      </div>

      <!-- Tab Navigation with Nuxt UI Style -->
      <div class="max-w-md mx-auto mb-12">
        <div class="bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 gap-1">
            <button
              @click="activeTab = 'satuan'"
              :class="[
                'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200',
                activeTab === 'satuan'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
            >
              Harga Satuan
            </button>
            <button
              @click="activeTab = 'bundling'"
              :class="[
                'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200',
                activeTab === 'bundling'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
            >
              Paket Bundling
            </button>
          </div>
        </div>
      </div>

      <!-- Pricing Cards - Harga Satuan -->
      <div v-show="activeTab === 'satuan'" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PricingCard
          v-for="plan in satuanPlans"
          :key="plan.id"
          :plan="plan"
        />
      </div>

      <!-- Pricing Cards - Paket Bundling -->
      <div v-show="activeTab === 'bundling'" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PricingCard
          v-for="plan in bundlingPlans"
          :key="plan.id"
          :plan="plan"
        />
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <div class="inline-flex flex-col md:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <div class="text-left">
              <div class="font-bold text-gray-900 dark:text-white">Butuh Konsultasi?</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Hubungi tim kami via WhatsApp</div>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20tentang%20paket%20website"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('satuan')

const satuanPlans = [
  {
    id: 'onepage',
    name: 'One Page Website',
    description: 'Landing page untuk promosi',
    price: '580K',
    oldPrice: 'Rp 900.000',
    badge: 'Paling Murah',
    badgeColor: 'green',
    features: [
      '1 Halaman Lengkap',
      'Section: Hero, About, Features, Testimonial, Contact',
      'Desain Modern & Responsif',
      'Smooth Scrolling Animation',
      'WhatsApp/Call to Action Button',
      'Contact Form',
      'SEO Friendly',
      'Fast Loading',
      'Revisi 2x',
      'Pengerjaan 3-7 Hari',
      'Garansi 30 Hari',
      'Support via WA'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20One%20Page%20Website%20Rp580k',
    color: 'cyan'
  },
  {
    id: 'company',
    name: 'Company Profile',
    description: 'Website perusahaan profesional',
    price: '980K',
    oldPrice: 'Rp 1.500.000',
    badge: 'Populer',
    badgeColor: 'blue',
    features: [
      '5-7 Halaman',
      'Home, About, Services, Portfolio, Contact',
      'Desain Profesional & Responsif',
      'Google Maps Integration',
      'WhatsApp Button',
      'Contact Form',
      'SEO Basic',
      'Social Media Links',
      'Revisi 2x',
      'Pengerjaan 5-10 Hari',
      'Garansi 30 Hari',
      'Support via WA'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20Website%20Company%20Profile%20Rp980k',
    color: 'purple'
  },
  {
    id: 'cms',
    name: 'Website CMS',
    description: 'Kelola konten sendiri',
    price: '2JT',
    oldPrice: 'Rp 3.000.000',
    badge: 'Advanced',
    badgeColor: 'orange',
    features: [
      'Custom Halaman (sesuai request)',
      'Admin Panel Dashboard',
      'Kelola Konten Sendiri',
      'Blog/News Management',
      'Media Gallery Management',
      'User Management',
      'Desain Premium & Responsif',
      'SEO Optimized',
      'Tutorial Penggunaan CMS',
      'Revisi 3x',
      'Pengerjaan 10-20 Hari',
      'Garansi 60 Hari',
      'Priority Support'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20Website%20CMS%20Rp2jt',
    color: 'orange'
  }
]

const bundlingPlans = [
  {
    id: 'personal',
    name: 'Paket Personal',
    description: 'Personal branding & bisnis kecil',
    price: '2.1JT',
    oldPrice: 'Rp 2.997.000',
    badge: 'Hemat 897K',
    badgeColor: 'green',
    features: [
      'GRATIS Hosting 1 Tahun',
      'GRATIS Domain .com/.id (1 Tahun)',
      'GRATIS SSL Certificate',
      '2 Email Profesional',
      '5 Halaman Website',
      'Desain Modern & Responsif',
      'SEO Friendly',
      'Google Analytics Integration',
      'Copywriting Profesional',
      'Revisi 2x',
      'Pengerjaan 5-14 Hari',
      'Garansi 30 Hari',
      'Full Support via WA'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20Paket%20Personal%20Rp2.1jt',
    color: 'blue'
  },
  {
    id: 'professional',
    name: 'Paket Profesional',
    description: 'Perusahaan & bisnis berkembang',
    price: '2.9JT',
    oldPrice: 'Rp 3.997.000',
    badge: 'Terpopuler',
    badgeColor: 'pink',
    popular: true,
    features: [
      'GRATIS Hosting 1 Tahun',
      'GRATIS Domain .com/.id (1 Tahun)',
      'GRATIS SSL Certificate',
      '5 Email Profesional',
      '10 Halaman Website',
      'Desain Premium & Responsif',
      'SEO Optimized',
      'Google Analytics & Search Console',
      'WhatsApp Button Integration',
      'Copywriting Premium',
      'Revisi 3x',
      'Pengerjaan 6-16 Hari',
      'Garansi 60 Hari',
      'Priority Support'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20Paket%20Profesional%20Rp2.9jt',
    color: 'purple'
  },
  {
    id: 'business',
    name: 'Paket Bisnis',
    description: 'Perusahaan besar & marketplace',
    price: '3.8JT',
    oldPrice: 'Rp 4.997.000',
    badge: 'Hemat 1.197JT',
    badgeColor: 'orange',
    features: [
      'GRATIS Hosting 1 Tahun',
      'GRATIS Domain .com/.id (1 Tahun)',
      'GRATIS SSL Certificate',
      '10 Email Profesional',
      '15+ Halaman Website',
      'Desain Eksklusif & Responsif',
      'Advanced SEO',
      'Full Analytics Integration',
      'Social Media Integration',
      'Live Chat Integration',
      'Copywriting Expert',
      'Unlimited Revisi',
      'Pengerjaan 7-18 Hari',
      'Garansi 90 Hari',
      'VIP Support 24/7'
    ],
    whatsappText: 'Halo%20saya%20tertarik%20dengan%20Paket%20Bisnis%20Rp3.8jt',
    color: 'orange'
  }
]
</script>
