<template>
  <section id="faq" class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
    <div class="absolute inset-0 grain opacity-20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-blue-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Pertanyaan yang <span class="gradient-text">Sering Ditanyakan</span>
        </h2>
        <p class="text-lg text-gray-600">
          Temukan jawaban untuk pertanyaan umum tentang layanan kami
        </p>
      </div>

      <!-- FAQ List -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <span class="text-lg font-semibold text-gray-900 pr-8">{{ faq.question }}</span>
            <div 
              class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300"
              :class="{ 'rotate-180': faq.isOpen }"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <div 
            v-show="faq.isOpen"
            class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
        <a 
          href="#contact" 
          class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          Hubungi Kami
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan tergantung paket yang dipilih. Untuk paket Standard sekitar 7-14 hari, Premium 14-21 hari, dan Luxury disesuaikan dengan kompleksitas project. Kami selalu berusaha menyelesaikan tepat waktu bahkan lebih cepat.',
    isOpen: false
  },
  {
    question: 'Apakah saya bisa request desain sendiri?',
    answer: 'Tentu saja! Kami sangat terbuka dengan ide dan desain dari Anda. Tim kami akan membantu mewujudkan visi Anda menjadi website yang nyata. Kami juga menyediakan konsultasi desain gratis untuk membantu Anda.',
    isOpen: false
  },
  {
    question: 'Apakah website bisa diubah setelah jadi?',
    answer: 'Ya, setiap paket kami sudah termasuk revisi. Paket Standard 3x revisi, Premium unlimited revisi, dan Luxury juga unlimited. Setelah project selesai, Anda juga bisa request perubahan dengan biaya maintenance yang terjangkau.',
    isOpen: false
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Sistem pembayaran kami fleksibel. Biasanya DP 50% di awal, dan pelunasan 50% setelah website selesai dan Anda puas dengan hasilnya. Untuk project besar, kami bisa diskusikan sistem pembayaran bertahap.',
    isOpen: false
  },
  {
    question: 'Apakah sudah termasuk domain dan hosting?',
    answer: 'Ya! Semua paket kami sudah termasuk hosting gratis selama 1-2 tahun tergantung paket. Untuk domain, kami bantu registrasi dan setup, biaya domain sesuai provider (sekitar 100-200rb/tahun).',
    isOpen: false
  },
  {
    question: 'Apakah website bisa untuk jualan online?',
    answer: 'Sangat bisa! Kami bisa integrasikan fitur e-commerce, payment gateway, shopping cart, dan sistem pemesanan. Tersedia di paket Premium dan Luxury dengan fitur yang lebih lengkap.',
    isOpen: false
  },
  {
    question: 'Bagaimana dengan SEO website?',
    answer: 'Semua website yang kami buat sudah SEO-friendly. Kami optimasi struktur website, meta tags, sitemap, dan kecepatan loading. Untuk paket Premium dan Luxury, kami berikan SEO Advanced dengan optimasi lebih dalam.',
    isOpen: false
  },
  {
    question: 'Apakah ada garansi atau support setelah website jadi?',
    answer: 'Ya! Kami memberikan free support dan maintenance selama 3-6 bulan (tergantung paket). Setelah itu Anda bisa perpanjang dengan biaya yang sangat terjangkau. Support kami available via WhatsApp 24/7.',
    isOpen: false
  },
  {
    question: 'Apakah saya akan diberikan tutorial menggunakan website?',
    answer: 'Tentu! Kami akan memberikan training lengkap cara menggunakan website, update konten, dan manage admin panel. Kami juga sediakan dokumentasi lengkap dan video tutorial.',
    isOpen: false
  },
  {
    question: 'Bagaimana jika saya ingin fitur khusus yang tidak ada di paket?',
    answer: 'Tidak masalah! Untuk paket Luxury, semua fitur bisa custom sesuai kebutuhan. Untuk paket lain, kita bisa diskusikan fitur tambahan dengan biaya additional yang reasonable. Konsultasi gratis!',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
