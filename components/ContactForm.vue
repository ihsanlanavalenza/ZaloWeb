<template>
  <section id="contact" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-900 dark:via-purple-900 dark:to-blue-950"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Hubungi Kami
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow">
            Mulai Proyek Anda Bersama Kami
          </h2>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Konsultasi gratis untuk mendiskusikan kebutuhan website Anda. Tim kami siap membantu!
          </p>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nama Lengkap *
                </label>
                <input 
                  v-model="formData.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all"
                  placeholder="Masukkan nama Anda"
                >
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nomor WhatsApp *
                </label>
                <input 
                  v-model="formData.phone"
                  type="tel" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all"
                  placeholder="08123456789"
                >
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input 
                v-model="formData.email"
                type="email" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all"
                placeholder="email@example.com"
              >
            </div>

            <!-- Package Selection -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Paket yang Diminati
              </label>
              <select 
                v-model="formData.package"
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all">
              >
                <option value="">Pilih Paket</option>
                <option value="standard">Standard - Rp 2,5 Juta</option>
                <option value="premium">Premium - Rp 5 Juta</option>
                <option value="luxury">Luxury - Custom</option>
                <option value="other">Belum Tahu / Konsultasi Dulu</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Ceritakan Kebutuhan Anda *
              </label>
              <textarea 
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all resize-none dark:placeholder:text-gray-400"
                placeholder="Jelaskan tentang bisnis Anda dan website seperti apa yang Anda inginkan..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              Kirim Pesan & Mulai Konsultasi Gratis
            </button>

            <p class="text-center text-sm text-gray-500">
              Dengan mengirim form ini, Anda setuju untuk dihubungi oleh tim kami
            </p>
          </form>
        </div>

        <!-- Contact Methods -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank"
            class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-all group text-center"
          >
            <svg class="w-12 h-12 mx-auto mb-4 text-green-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">WhatsApp</h4>
            <p class="text-blue-100 text-sm">Chat langsung dengan kami</p>
          </a>
          
          <a 
            href="mailto:info@zaloweb.com"
            class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-all group text-center"
          >
            <svg class="w-12 h-12 mx-auto mb-4 text-blue-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">Email</h4>
            <p class="text-blue-100 text-sm">info@zaloweb.com</p>
          </a>
          
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h4 class="font-semibold mb-2 text-lg">Jam Operasional</h4>
            <p class="text-blue-100 text-sm">Senin - Sabtu<br>09:00 - 21:00 WIB</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  package: '',
  message: ''
})

const submitForm = () => {
  // Create WhatsApp message
  const message = `
*Konsultasi Website Baru*

Nama: ${formData.value.name}
Email: ${formData.value.email}
No. HP: ${formData.value.phone}
Paket: ${formData.value.package || 'Belum dipilih'}

Pesan:
${formData.value.message}
  `.trim()

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message)
  
  // WhatsApp URL (ganti dengan nomor WhatsApp bisnis Anda)
  const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`
  
  // Open WhatsApp
  window.open(whatsappURL, '_blank')
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  }
}
</script>
