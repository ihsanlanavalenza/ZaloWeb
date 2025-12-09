<template>
  <section id="testimonials" class="py-16 md:py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Cerita Mereka
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Pengalaman nyata dari klien yang sudah bekerja sama dengan kami
        </p>
      </div>

      <!-- Testimonials Carousel Slider -->
      <div v-if="testimonials && testimonials.length > 0" class="relative max-w-7xl mx-auto">
        <div class="relative overflow-hidden px-12">
          <!-- Slider Wrapper -->
          <div 
            ref="sliderRef"
            class="flex gap-6"
            :style="{ 
              transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform'
            }"
          >
            <!-- Each slide shows grid of testimonials -->
            <div 
              v-for="slideIndex in totalSlides"
              :key="`slide-${slideIndex}`"
              class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div 
                v-for="testimonial in getItemsForSlide(slideIndex - 1)" 
                :key="testimonial.name"
                class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 cursor-pointer"
                :style="{
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                  willChange: 'transform, box-shadow'
                }"
              >
                <!-- Rating -->
                <div class="flex gap-0.5 mb-4">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <!-- Text -->
                <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {{ testimonial.text }}
                </p>

                <!-- Author -->
                <div class="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {{ testimonial.name.charAt(0) }}
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white text-sm">{{ testimonial.name }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ testimonial.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:scale-110"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:scale-110"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Slider Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="index in totalSlides"
            :key="index"
            @click="goToSlide(index - 1)"
            :class="[
              'transition-all duration-300',
              currentSlide === (index - 1)
                ? 'w-8 h-2 bg-blue-600 rounded-full' 
                : 'w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full hover:bg-blue-400'
            ]"
          ></button>
        </div>
      </div>

      <!-- Simple CTA -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-4">Sudah melayani 50+ klien di Indonesia</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <span>Jakarta</span>
          <span>•</span>
          <span>Bandung</span>
          <span>•</span>
          <span>Surabaya</span>
          <span>•</span>
          <span>Bali</span>
          <span>•</span>
          <span>Yogyakarta</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

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

// Slider State
const currentSlide = ref(0)
const sliderRef = ref(null)

// Items per slide
const itemsPerSlide = 3 // Show 3 testimonials at once

// Calculate total slides needed
const totalSlides = computed(() => {
  if (!testimonials || testimonials.length === 0) return 0
  return Math.ceil(testimonials.length / itemsPerSlide)
})

// Get items for specific slide
const getItemsForSlide = (slideIndex) => {
  if (!testimonials || testimonials.length === 0) return []
  const start = slideIndex * itemsPerSlide
  const end = start + itemsPerSlide
  return testimonials.slice(start, end)
}

// Navigation functions
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0 // Loop back
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = totalSlides.value - 1 // Loop to end
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-slide functionality
let autoSlideInterval = null

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 6000) // Slide every 6 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

// Lifecycle
onMounted(() => {
  nextTick(() => {
    if (testimonials && testimonials.length > 0) {
      startAutoSlide()
    }
  })
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
/* Smooth hover effects with GPU acceleration */
div[style*="willChange"]:hover {
  transform: translateY(-4px) scale(1.03) translateZ(0);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth font rendering */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
