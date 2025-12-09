<template>
  <div class="min-h-screen bg-[#0a0a0a] dark:bg-black">
    <!-- Hero Section with Background Image -->
    <section class="relative h-[85vh] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f29da8048f?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Convention Center"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 h-full flex items-center justify-center">
        <div class="text-center px-4 max-w-5xl mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
            Every Event, Elevated<br/>
            <span class="font-normal">to the Extraordinary</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide">
            Where sophistication meets seamless execution in the heart of elegance
          </p>
          <button class="px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold text-lg rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105">
            Explore Venue
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Grace in Design Section -->
    <section class="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] dark:from-black dark:to-gray-950">
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-4">
            Grace in Design, Purpose in Every Detail
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <!-- Venue Showcase Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <!-- Grand Ballroom -->
          <div class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f29da8048f?q=80&w=800&auto=format&fit=crop" 
                alt="Grand Ballroom"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-light text-white mb-2 tracking-wide">Grand Ballroom</h3>
              <p class="text-sm text-gray-300 font-light">Capacity: 1,200 guests</p>
            </div>
          </div>

          <!-- VIP Lounge -->
          <div class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" 
                alt="VIP Lounge"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-light text-white mb-2 tracking-wide">VIP Lounge</h3>
              <p class="text-sm text-gray-300 font-light">Exclusive comfort zone</p>
            </div>
          </div>

          <!-- Meeting Rooms -->
          <div class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                alt="Meeting Rooms"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-light text-white mb-2 tracking-wide">Meeting Rooms</h3>
              <p class="text-sm text-gray-300 font-light">State-of-the-art facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Redefining Excellence Section -->
    <section class="py-24 bg-[#0a0a0a] dark:bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <!-- Left Column - Content -->
          <div class="space-y-8">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Redefining Excellence<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">in Event Hosting</span>
            </h2>
            
            <p class="text-lg text-gray-300 leading-relaxed font-light">
              With over 20 years of experience in hosting world-class events, our venue combines 
              cutting-edge technology with timeless elegance. From intimate gatherings to grand galas, 
              we provide a canvas where your vision comes to life with unparalleled precision and grace.
            </p>

            <p class="text-lg text-gray-300 leading-relaxed font-light">
              Our dedicated team of event specialists works closely with you to ensure every detail 
              reflects your unique style and exceeds your expectations. Experience the perfect blend 
              of luxury, functionality, and personalized service.
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p class="text-white font-light">Award-winning venue design</p>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p class="text-white font-light">State-of-the-art audio-visual technology</p>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p class="text-white font-light">Personalized catering and beverage services</p>
              </div>
            </div>

            <button class="px-8 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
              About Us
            </button>
          </div>

          <!-- Right Column - Architectural Image -->
          <div class="relative">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=800&auto=format&fit=crop" 
                alt="Architectural Detail"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating Stats Card -->
            <div class="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-400 to-yellow-500 p-8 rounded-2xl shadow-2xl">
              <div class="text-black">
                <div class="text-5xl font-bold mb-2">20+</div>
                <div class="text-sm font-semibold uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] dark:from-gray-950 dark:to-black">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light text-white mb-4">
            Unmatched <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Amenities</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <!-- Feature 1 -->
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
              <svg class="w-10 h-10 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-light text-white mb-2">Premium Location</h3>
            <p class="text-gray-400 text-sm font-light">Easily accessible in the city center</p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
              <svg class="w-10 h-10 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-light text-white mb-2">24/7 Security</h3>
            <p class="text-gray-400 text-sm font-light">Complete safety for your guests</p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
              <svg class="w-10 h-10 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
            <h3 class="text-xl font-light text-white mb-2">Customizable Setup</h3>
            <p class="text-gray-400 text-sm font-light">Tailored to your event needs</p>
          </div>

          <!-- Feature 4 -->
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
              <svg class="w-10 h-10 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-light text-white mb-2">Exceptional Service</h3>
            <p class="text-gray-400 text-sm font-light">Dedicated event coordinators</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-amber-400 to-yellow-500">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-light text-black mb-6">
          Ready to Host Your Next Event?
        </h2>
        <p class="text-xl text-black/80 mb-10 max-w-2xl mx-auto font-light">
          Let us help you create an unforgettable experience that your guests will cherish forever.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 shadow-xl hover:scale-105">
            Schedule a Tour
          </button>
          <button class="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- Back to Home Link -->
    <div class="fixed bottom-8 left-8 z-50">
      <NuxtLink 
        to="/"
        class="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span>Back to Home</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'Luxury Event Venue - Every Event, Elevated to the Extraordinary',
  meta: [
    { name: 'description', content: 'Experience unparalleled elegance and sophistication at our luxury event venue. Perfect for corporate events, galas, and exclusive gatherings.' },
    { property: 'og:title', content: 'Luxury Event Venue - Every Event, Elevated to the Extraordinary' },
    { property: 'og:description', content: 'Host your next extraordinary event in our world-class venue featuring state-of-the-art facilities and timeless elegance.' }
  ]
})
</script>

<style scoped>
/* Custom smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Gradient text animation */
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
