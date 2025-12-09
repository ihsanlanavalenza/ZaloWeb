<template>
  <section id="contact" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10 dark:opacity-20">
      <div class="absolute top-10 left-10 w-72 h-72 bg-blue-400 dark:bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 dark:bg-blue-500 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
          </svg>
          Let's Talk
        </div>
        
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p class="text-xl text-gray-100 dark:text-gray-200 mb-10 max-w-2xl mx-auto">
          Partner with us to unlock innovative solutions that drive real results and accelerate your digital transformation
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button class="group bg-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-blue-600 text-black dark:text-white hover:bg-gray-100 dark:hover:from-purple-700 dark:hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Get Started Now
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <button class="border-2 border-white text-white hover:bg-white hover:text-black dark:hover:bg-purple-600 dark:hover:border-purple-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Schedule a Call
          </button>
        </div>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all group">
            <svg class="w-10 h-10 mx-auto mb-4 text-gray-200 dark:text-gray-100 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">Email Us</h4>
            <p class="text-gray-100 dark:text-gray-200">info@zaloweb.com</p>
          </div>
          
          <div class="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all group">
            <svg class="w-10 h-10 mx-auto mb-4 text-gray-200 dark:text-gray-100 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">Call Us</h4>
            <p class="text-gray-100 dark:text-gray-200">+1 (555) 123-4567</p>
          </div>
          
          <div class="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all group">
            <svg class="w-10 h-10 mx-auto mb-4 text-gray-200 dark:text-gray-100 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">Visit Us</h4>
            <p class="text-gray-100 dark:text-gray-200">123 Tech Street, Silicon Valley</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
