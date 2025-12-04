<template>
  <div>
    <Header />
    <main class="pt-20">
      <HeroSection />
      <StatsSection />
      <ClientLogos />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
    <FloatingWhatsApp />
  </div>
</template>

<script setup>
// Track page view
if (process.client) {
  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: '/',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    })
  }).catch(() => {})
}
</script>
