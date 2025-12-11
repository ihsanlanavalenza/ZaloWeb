<template>
  <section class="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Minimal Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header - Minimalist & Elegant -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            {{ header.badge }}
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          {{ header.title }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {{ header.description }}
        </p>
      </div>

      <!-- Portfolio Showcase - Carousel with Peek Effect -->
      <div v-if="portfolioItems && portfolioItems.length > 0" class="mb-20 relative">
        <!-- Portfolio Slider Container -->
        <div class="relative overflow-hidden">
          <!-- Inner wrapper for centering -->
          <div class="flex justify-center items-center min-h-[600px]">
            <!-- Slider Track -->
            <div class="relative w-full max-w-7xl">
              <!-- Slides Container -->
              <div class="relative px-4 md:px-12" style="perspective: 1200px">
                <!-- Current slide with peek cards -->
                <div class="flex gap-2 md:gap-4 justify-center items-center">
                  <!-- Peek Left Card -->
                  <div
                    v-if="getPeekItem(currentSlide - 1)"
                    :class="[
                      'hidden md:block relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 transition-all duration-500',
                      getPeekItem(currentSlide - 1).bgGradient,
                      'aspect-[9/16] w-56 lg:w-64 opacity-40 hover:opacity-60 -mr-6 lg:-mr-8'
                    ]"
                    style="transform: scale(0.85) perspective(800px) rotateY(12deg) translateZ(-30px)"
                    @click="prevSlide"
                  >
                    <div class="relative w-full h-full">
                      <img 
                        v-if="getPeekItem(currentSlide - 1).image"
                        :src="getPeekItem(currentSlide - 1).image" 
                        :alt="getPeekItem(currentSlide - 1).title"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
                    </div>
                  </div>

                  <!-- Main Active Card -->
                  <div
                    v-if="portfolioItems[currentSlide]"
                    :class="[
                      'group relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 transition-all duration-500 z-10',
                      portfolioItems[currentSlide].bgGradient,
                      'aspect-[9/16] w-72 sm:w-80 md:w-96'
                    ]"
                    style="transform: scale(1) translateZ(0)"
                  >
                    <div class="relative w-full h-full">
                      <!-- Image (if exists) -->
                      <img 
                      v-if="portfolioItems[currentSlide].image"
                      :src="portfolioItems[currentSlide].image" 
                      :alt="portfolioItems[currentSlide].title"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                      />
                      
                      <!-- Gradient Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      <!-- Content Overlay -->
                      <div class="absolute inset-0 p-6 flex flex-col justify-end">
                        <!-- Hero Type -->
                        <template v-if="portfolioItems[currentSlide].type === 'hero'">
                          <div class="space-y-3">
                            <span class="text-orange-400 text-xs font-semibold uppercase tracking-wider bg-orange-500/20 px-3 py-1 rounded-full inline-block backdrop-blur-sm w-fit">
                              {{ portfolioItems[currentSlide].badge }}
                            </span>
                            <h3 class="text-2xl md:text-3xl font-black text-white leading-tight">{{ portfolioItems[currentSlide].title }}</h3>
                            <p class="text-white/80 text-sm line-clamp-2">{{ portfolioItems[currentSlide].description }}</p>
                          </div>
                        </template>

                        <!-- Feature Type -->
                        <template v-else-if="portfolioItems[currentSlide].type === 'feature'">
                          <div class="space-y-3">
                            <h3 class="text-2xl font-bold text-white leading-tight">{{ portfolioItems[currentSlide].title }}</h3>
                            <p class="text-white/70 text-sm line-clamp-2">{{ portfolioItems[currentSlide].description }}</p>
                            <button v-if="portfolioItems[currentSlide].showButton" class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-fit transition-all text-sm border border-white/20">
                              <span class="font-semibold">{{ portfolioItems[currentSlide].buttonText }}</span>
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                            </button>
                          </div>
                        </template>

                        <!-- About Type -->
                        <template v-else-if="portfolioItems[currentSlide].type === 'about'">
                          <div class="space-y-3">
                            <span class="text-purple-400 text-xs font-semibold uppercase tracking-wider bg-purple-500/20 px-3 py-1 rounded-full inline-block backdrop-blur-sm w-fit">{{ portfolioItems[currentSlide].badge }}</span>
                            <h3 class="text-2xl font-black text-white">{{ portfolioItems[currentSlide].title }}</h3>
                            <p class="text-white/70 text-sm line-clamp-2">{{ portfolioItems[currentSlide].description }}</p>
                          </div>
                        </template>

                        <!-- Project Type -->
                        <template v-else-if="portfolioItems[currentSlide].type === 'project'">
                          <div class="space-y-2">
                            <h4 class="text-xl md:text-2xl font-bold text-white">{{ portfolioItems[currentSlide].title }}</h4>
                            <p class="text-white/70 text-sm line-clamp-2">{{ portfolioItems[currentSlide].description }}</p>
                            <div class="flex items-center gap-2 text-white/60 text-xs mt-2">
                              <span v-if="portfolioItems[currentSlide].category" class="px-2 py-1 bg-white/10 rounded-full backdrop-blur-sm">{{ portfolioItems[currentSlide].category }}</span>
                              <span v-if="portfolioItems[currentSlide].client" class="truncate">{{ portfolioItems[currentSlide].client }}</span>
                            </div>
                          </div>
                        </template>

                        <!-- Info Type -->
                        <template v-else-if="portfolioItems[currentSlide].type === 'info'">
                          <div class="space-y-3">
                            <span class="text-blue-400 text-xs font-semibold uppercase tracking-wider bg-blue-500/20 px-3 py-1 rounded-full inline-block backdrop-blur-sm w-fit">{{ portfolioItems[currentSlide].badge }}</span>
                            <h3 class="text-2xl font-bold text-white">{{ portfolioItems[currentSlide].title }}</h3>
                            <p class="text-white/70 text-sm line-clamp-3">{{ portfolioItems[currentSlide].description }}</p>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>

                  <!-- Peek Right Card -->
                  <div
                    v-if="getPeekItem(currentSlide + 1)"
                    :class="[
                      'hidden md:block relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 transition-all duration-500',
                      getPeekItem(currentSlide + 1).bgGradient,
                      'aspect-[9/16] w-56 lg:w-64 opacity-40 hover:opacity-60 -ml-6 lg:-ml-8'
                    ]"
                    style="transform: scale(0.85) perspective(800px) rotateY(-12deg) translateZ(-30px)"
                    @click="nextSlide"
                  >
                    <div class="relative w-full h-full">
                      <img 
                        v-if="getPeekItem(currentSlide + 1).image"
                        :src="getPeekItem(currentSlide + 1).image" 
                        :alt="getPeekItem(currentSlide + 1).title"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Navigation Arrows -->
              <button 
                @click="prevSlide"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 z-10 border border-white/20 hover:scale-110 shadow-lg"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button 
                @click="nextSlide"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 z-10 border border-white/20 hover:scale-110 shadow-lg"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Slider Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(item, index) in portfolioItems"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300',
              currentSlide === index
                ? 'w-8 h-2 bg-blue-600 rounded-full' 
                : 'w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full hover:bg-blue-400'
            ]"
          ></button>
        </div>
      </div>

      <!-- Stats Bar - Clean & Minimal -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-gray-200 dark:border-gray-800">
        <div 
          v-for="stat in stats" 
          :key="stat.label" 
          class="text-center"
        >
          <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <!-- <div class="mt-16 text-center">
        <a 
          :href="cta.link" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          {{ cta.text }}
        </a>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// Menggunakan composable untuk data portfolio
const { header, portfolioItems, stats, cta } = usePortfolio()

// Slider State
const currentSlide = ref(0)
const sliderRef = ref(null)
const isReady = ref(false)

// Get peek item (previous or next card) with circular navigation
const getPeekItem = (index) => {
  if (!portfolioItems || portfolioItems.length === 0) return null
  
  // Handle wrap around for circular carousel
  if (index < 0) {
    return portfolioItems[portfolioItems.length - 1]
  } else if (index >= portfolioItems.length) {
    return portfolioItems[0]
  }
  
  return portfolioItems[index]
}

// Calculate total slides (equals number of portfolio items)
const totalSlides = computed(() => {
  if (!portfolioItems || portfolioItems.length === 0) return 0
  return portfolioItems.length
})

// Navigation functions
const nextSlide = () => {
  if (currentSlide.value < portfolioItems.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0 // Loop back to start
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = portfolioItems.length - 1 // Loop to end
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
  }, 5000) // Slide every 5 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

// Lifecycle
onMounted(() => {
  // Wait a tick to ensure DOM is ready
  nextTick(() => {
    if (portfolioItems && portfolioItems.length > 0) {
      isReady.value = true
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
.group:hover {
  transform: translateY(-8px) scale(1.02) translateZ(0);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.group:hover img {
  transform: scale(1.08) translateZ(0);
}

.group:hover [class*="bg-gradient"] {
  background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent);
}

/* Smooth scrolling for entire section */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
