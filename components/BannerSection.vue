<template>
  <section class="relative overflow-hidden bg-gray-900">
    <!-- Banner Slider -->
    <div class="relative h-[400px] md:h-[500px] lg:h-[600px]">
      <TransitionGroup name="slide">
        <div
          v-for="(banner, index) in banners"
          :key="banner.id"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <!-- Banner Image -->
          <img
            :src="banner.image"
            :alt="banner.alt"
            class="w-full h-full object-cover"
          />
          
          <!-- Overlay Gradient -->
          <!-- <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div> -->
          
          <!-- Banner Content - Button Only -->
          <!-- <div class="absolute bottom-12 left-8 md:left-16 z-10">
            <a
              :href="banner.buttonLink"
              class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {{ banner.buttonText }}
            </a>
          </div> -->
        </div>
      </TransitionGroup>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Dots Navigation -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        <button
          v-for="(banner, index) in banners"
          :key="banner.id"
          @click="goToSlide(index)"
          class="transition-all duration-300"
          :class="[
            currentSlide === index 
              ? 'w-8 h-2 bg-white' 
              : 'w-2 h-2 bg-white/50 hover:bg-white/75'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Banner data - menggunakan gambar dari public/images/banner/
const banners = ref([
  {
    id: 1,
    image: '/images/banner/1.png',
    alt: 'Jasa Layanan Website Profesional & Terjangkau',
    title: 'Jasa Layanan Website',
    description: 'Tingkatkan Pembuatan Website Anda dengan Berbagai Fitur Lengkap & Terintegrasi dengan design tanpa batas, SEO friendly dan harga terjangkau',
    buttonText: 'Konsultasi Gratis',
    buttonLink: '#contact'
  },
  {
    id: 2,
    image: '/images/banner/2.png',
    alt: 'Partner IT Terpercaya untuk Setiap Kebutuhan Bisnis',
    title: 'Partner IT Terpercaya',
    description: 'Desain menarik, fitur lengkap, dan mudah dikelola. Cocok untuk UMKM hingga Company Profile.',
    buttonText: 'Konsultasi Gratis',
    buttonLink: '#contact'
  },
  {
    id: 3,
    image: '/images/banner/3.png',
    alt: 'Exclusive Phone - Launching Soon',
    title: 'Exclusive Phone',
    description: 'Get 20% OFF for the first 3 months if you sign up today!',
    buttonText: 'Learn More',
    buttonLink: '#services'
  },
  {
    id: 4,
    image: '/images/banner/4.png',
    alt: 'IT Outsourcing Solutions Package',
    title: 'IT Outsourcing Solutions',
    description: 'Get 20% OFF for the first 3 months if you sign up today! Cybersecurity Management, System Monitoring & Maintenance, Customized IT Solutions',
    buttonText: 'Learn More',
    buttonLink: '#services'
  }
])

const currentSlide = ref(0)
let autoSlideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? banners.value.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto slide every 5 seconds
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

onMounted(() => {
  startAutoSlide()
  
  // Keyboard navigation
  const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  stopAutoSlide()
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Fade In Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.2s forwards;
}

.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.4s forwards;
}

/* Smooth dot transitions */
button[aria-label^="Go to slide"] {
  border-radius: 9999px;
}
</style>
