<template>
  <section id="testimonials" class="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 grain opacity-20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Testimoni</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          Apa Kata <span class="gradient-text">Klien Kami?</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Kepuasan klien adalah prioritas utama kami
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Testimonial Text -->
          <p class="text-gray-700 leading-relaxed mb-6 italic">
            "{{ testimonial.text }}"
          </p>

          <!-- Client Info -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.role }}</div>
            </div>
          </div>

          <!-- Decorative Quote -->
          <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg class="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h3 class="text-2xl font-bold mb-6">Dipercaya oleh 100+ Klien di Seluruh Indonesia</h3>
        <div class="flex flex-wrap justify-center gap-8 items-center opacity-80">
          <div class="text-lg font-semibold">Jakarta</div>
          <div class="w-1 h-1 bg-white rounded-full"></div>
          <div class="text-lg font-semibold">Bandung</div>
          <div class="w-1 h-1 bg-white rounded-full"></div>
          <div class="text-lg font-semibold">Surabaya</div>
          <div class="w-1 h-1 bg-white rounded-full"></div>
          <div class="text-lg font-semibold">Bali</div>
          <div class="w-1 h-1 bg-white rounded-full"></div>
          <div class="text-lg font-semibold">Yogyakarta</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner Toko Online Fashion',
    text: 'Website yang dibuat sangat profesional dan sesuai dengan keinginan. Tim sangat responsif dan membantu. Penjualan kami meningkat 150% sejak website launching!'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Direktur PT. Maju Jaya',
    text: 'Pelayanan sangat memuaskan, dari konsultasi hingga after sales. Website kami menjadi lebih modern dan mudah digunakan. Highly recommended!'
  },
  {
    name: 'Ahmad Rizki',
    role: 'Founder Startup Edukasi',
    text: 'Harga terjangkau dengan kualitas premium. Pengerjaan cepat dan hasil melebihi ekspektasi. Support team juga sangat helpful. Terima kasih ZaloWeb!'
  },
  {
    name: 'Dewi Lestari',
    role: 'Marketing Manager Hotel',
    text: 'Website hotel kami sekarang jauh lebih menarik dan booking online meningkat signifikan. Design modern dan loading cepat. Sangat puas!'
  },
  {
    name: 'Eko Prasetyo',
    role: 'CEO Digital Agency',
    text: 'Profesional dalam berkomunikasi dan mengeksekusi project. Hasil kerja rapi dan clean code. Sudah 3 project kami percayakan ke ZaloWeb.'
  },
  {
    name: 'Linda Wijaya',
    role: 'Owner Cafe & Resto',
    text: 'Website untuk cafe kami sangat aesthetic dan user friendly. Customer mudah lihat menu dan lokasi kami. Terima kasih atas kerja kerasnya!'
  }
]
</script>
