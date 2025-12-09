<template>
  <div
    :class="[
      'group relative rounded-2xl border transition-all duration-300',
      plan.popular
        ? 'border-2 border-purple-300 dark:border-purple-700 shadow-xl scale-105 md:scale-110'
        : 'border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700',
      'bg-white dark:bg-gray-900 overflow-hidden'
    ]"
  >
    <!-- Popular Badge - Inside Card -->
    <div v-if="plan.popular" class="absolute top-0 left-0 right-0 z-10 flex justify-center">
      <div class="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-b-full shadow-lg">
        ⭐ TERPOPULER
      </div>
    </div>

    <!-- Gradient Background Overlay -->
    <div 
      v-if="plan.popular"
      class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
    ></div>

    <!-- Card Content -->
    <div class="relative p-6 md:p-8 pt-12">
      <!-- Badge -->
      <div class="mb-4">
        <span
          :class="[
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide',
            badgeColorClass
          ]"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
          {{ plan.badge }}
        </span>
      </div>

      <!-- Plan Name & Description -->
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {{ plan.name }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ plan.description }}
        </p>
      </div>

      <!-- Price -->
      <div class="mb-6">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">Rp</span>
          <span
            :class="[
              'text-4xl md:text-5xl font-black',
              plan.popular
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                : 'text-gray-900 dark:text-white'
            ]"
          >
            {{ plan.price }}
          </span>
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400 line-through">
          {{ plan.oldPrice }}
        </div>
      </div>

      <!-- Features List -->
      <ul class="space-y-2.5 mb-6">
        <li
          v-for="(feature, index) in plan.features"
          :key="index"
          class="flex items-start gap-2.5 text-sm"
        >
          <svg
            class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <a
        :href="`https://wa.me/6281234567890?text=${plan.whatsappText}`"
        :class="[
          'block w-full px-6 py-3.5 rounded-xl font-bold text-center transition-all duration-200 shadow-md hover:shadow-xl',
          plan.popular
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
        ]"
      >
        <span class="flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Pesan Sekarang
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  plan: {
    type: Object,
    required: true
  }
})

const badgeColorClass = computed(() => {
  const colors = {
    green: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400',
    pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400',
    cyan: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400'
  }
  return colors[props.plan.badgeColor] || colors.blue
})
</script>
