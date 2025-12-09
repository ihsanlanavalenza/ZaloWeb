<template>
  <section id="services" class="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Services</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          What We Offer
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive IT services designed to accelerate your digital transformation
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700"
        >
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {{ service.description }}
              </p>
              <ul class="space-y-2.5">
                <li 
                  v-for="(feature, idx) in service.features" 
                  :key="idx"
                  class="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const WebIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' })
])

const MobileIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
])

const DatabaseIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
])

const ConsultIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
])

const services = [
  {
    icon: WebIcon,
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications that engage users and drive results.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'Modern Frameworks'
    ]
  },
  {
    icon: MobileIcon,
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile apps for iOS and Android with exceptional user experience.',
    features: [
      'iOS & Android Apps',
      'Cross-platform Solutions',
      'Push Notifications',
      'Offline Support'
    ]
  },
  {
    icon: DatabaseIcon,
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management for reliable, high-performance applications.',
    features: [
      'Cloud Migration',
      'Auto Scaling',
      'Load Balancing',
      'Backup & Recovery'
    ]
  },
  {
    icon: ConsultIcon,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to optimize your technology stack and digital transformation journey.',
    features: [
      'Technology Audit',
      'Strategic Planning',
      'Process Optimization',
      'Team Training'
    ]
  }
]
</script>
