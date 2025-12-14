<template>
  <header>
    <TetePages />
  </header>
  <main>
    <BlockAcceil id="home" />
    <APropos id="apropos" />
    <ProjetP id="projetp" />
    <ContactMe id="contactme" />
  </main>
  <footer>
    <PiedsNav />
  </footer>
</template>

<script setup>
import PiedsNav from "./components/PiedsNav.vue";
import TetePages from "./components/TetePages.vue";
import BlockAcceil from "./components/BlockAcceil.vue";
import APropos from "./components/APropos.vue";
import ProjetP from "./components/ProjetP.vue";
import ContactMe from "./components/ContactMe.vue";
</script>

<style scoped>
:global(html) {
  scrollbar-width: none;
  scroll-behavior: smooth;
}

:global(body) {
  -ms-overflow-style: none;
  margin: 0;
}
</style>

<style>
/* Global Animation Styles */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}

.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}
</style>
