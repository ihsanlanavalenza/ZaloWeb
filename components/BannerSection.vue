<template>
  <section class="relative overflow-hidden bg-gray-900">
    <!-- Loading State -->
    <div v-if="loading" class="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-800">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mb-4"></div>
        <p class="text-white text-sm">Loading banners...</p>
      </div>
    </div>

    <!-- Banner Slider -->
    <div v-else-if="banners.length > 0" class="relative h-[400px] md:h-[500px] lg:h-[600px]">
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
            @error="handleImageError"
          />
          
          <!-- Overlay Gradient -->
          <!-- <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div> -->
          
          <!-- Banner Content - Button Only -->
          <!-- <div v-if="banner.buttonText && banner.buttonLink" class="absolute bottom-12 left-8 md:left-16 z-10">
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
        aria-label="Previous slide"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
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

    <!-- Empty State -->
    <div v-else class="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div class="text-center text-white px-4">
        <svg class="w-20 h-20 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <h3 class="text-xl font-semibold mb-2">No Banners Available</h3>
        <p class="text-gray-400">Please add banners from admin panel</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// State
const banners = ref([])
const currentSlide = ref(0)
const loading = ref(true)
let autoSlideInterval = null

// Fallback banners (menggunakan images yang sudah ada)
const fallbackBanners = [
  {
    id: 'fallback-1',
    image: '/images/banner/1.png',
    alt: 'Jasa Layanan Website Profesional & Terjangkau',
    buttonText: 'Konsultasi Gratis',
    buttonLink: '#contact'
  },
  {
    id: 'fallback-2',
    image: '/images/banner/2.png',
    alt: 'Partner IT Terpercaya untuk Setiap Kebutuhan Bisnis',
    buttonText: 'Konsultasi Gratis',
    buttonLink: '#contact'
  },
  {
    id: 'fallback-3',
    image: '/images/banner/3.png',
    alt: 'Exclusive Phone - Launching Soon',
    buttonText: 'Learn More',
    buttonLink: '#services'
  },
  {
    id: 'fallback-4',
    image: '/images/banner/4.png',
    alt: 'IT Outsourcing Solutions Package',
    buttonText: 'Learn More',
    buttonLink: '#services'
  }
]

// Fetch banners from API
const fetchBanners = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/banner')
    
    if (response.success && response.data && response.data.length > 0) {
      banners.value = response.data
      console.log('✅ Banners loaded from API:', banners.value.length)
    } else {
      console.log('⚠️ No banners from API, using fallback')
      banners.value = fallbackBanners
    }
  } catch (error) {
    console.error('❌ Error fetching banners:', error)
    console.log('⚠️ Using fallback banners')
    banners.value = fallbackBanners
  } finally {
    loading.value = false
  }
}

// Slider functions
const nextSlide = () => {
  if (banners.value.length === 0) return
  currentSlide.value = (currentSlide.value + 1) % banners.value.length
}

const prevSlide = () => {
  if (banners.value.length === 0) return
  currentSlide.value = currentSlide.value === 0 
    ? banners.value.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto slide every 5 seconds
const startAutoSlide = () => {
  if (banners.value.length <= 1) return
  
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// Handle image error
const handleImageError = (e) => {
  console.error('Image failed to load:', e.target.src)
  e.target.src = 'https://placehold.co/1920x600/667eea/ffffff?text=Banner+Not+Found'
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
}

onMounted(async () => {
  await fetchBanners()
  
  if (banners.value.length > 1) {
    startAutoSlide()
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
