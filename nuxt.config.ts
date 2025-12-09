// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'ZaloWeb - Jasa Pembuatan Website Profesional & Terpercaya',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Jasa pembuatan website profesional dengan harga terjangkau. Konsultasi gratis, desain modern, SEO friendly, dan support 24/7. Paket mulai dari 2.5 juta.' }
      ],
      script: [
        {
          children: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || !theme) {
                document.documentElement.classList.add('dark');
              }
              document.documentElement.style.visibility = 'hidden';
            })();
          `,
          type: 'text/javascript'
        }
      ],
      style: [
        {
          children: `
            html { visibility: hidden; }
            html.dark { background: #111827; }
            html:not(.dark) { background: #ffffff; }
            #__nuxt { opacity: 0; }
          `
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=7' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg?v=7' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/favicon.svg?v=7' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/favicon.svg?v=7' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
