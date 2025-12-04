<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Nuxt will automatically handle page routing
</script>

<style>
html {
  scroll-behavior: smooth;
}

html.dark {
  color-scheme: dark;
}

body {
  overflow-x: hidden;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth transitions untuk semua elemen saat dark mode toggle */
* {
  transition-property: background-color, border-color, color, fill, stroke, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Preserve animations */
*[class*="animate-"],
*[class*="transition-transform"],
*[class*="hover:scale"],
*[class*="hover:-translate"] {
  transition-property: all;
}
</style>
