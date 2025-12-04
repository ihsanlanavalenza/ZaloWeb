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
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
