<template>
  <section id="about" class="py-16 md:py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div>
          <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">About Us</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
            Building Digital Solutions Since 2010
          </h2>
          
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We are a team of passionate developers, designers, and strategists dedicated to 
            delivering exceptional IT solutions. Our mission is to help businesses thrive in 
            the digital age through innovative technology and expert guidance.
          </p>
          
          <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            With over a decade of experience, we've helped hundreds of companies transform 
            their operations, reach new customers, and achieve their business goals through 
            cutting-edge technology solutions.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6">
            <div class="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">13+</div>
              <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div class="border-l-4 border-purple-600 dark:border-purple-500 pl-4">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
              <div class="text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div class="border-l-4 border-green-600 dark:border-green-500 pl-4">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div class="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
            <div class="border-l-4 border-orange-600 dark:border-orange-500 pl-4">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
              <div class="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-shadow">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h4 class="font-semibold mb-1 text-lg">Professional</h4>
                <p class="text-sm text-blue-100">Expert team with proven track record</p>
              </div>
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-shadow">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 class="font-semibold mb-1 text-lg">Fast Delivery</h4>
                <p class="text-sm text-purple-100">Quick turnaround without compromising quality</p>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-shadow">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h4 class="font-semibold mb-1 text-lg">Goal Focused</h4>
                <p class="text-sm text-green-100">Aligned with your business objectives</p>
              </div>
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-shadow">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h4 class="font-semibold mb-1 text-lg">Secure</h4>
                <p class="text-sm text-orange-100">Enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
