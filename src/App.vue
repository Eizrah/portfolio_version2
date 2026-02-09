<template>
  <LoadingScreen v-if="isLoading" @loaded="onLoaded" />
  <div v-show="!isLoading" class="app-container">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import PiedsNav from "./components/PiedsNav.vue";
import TetePages from "./components/TetePages.vue";
import BlockAcceil from "./components/BlockAcceil.vue";
import APropos from "./components/APropos.vue";
import ProjetP from "./components/ProjetP.vue";
import ContactMe from "./components/ContactMe.vue";

const isLoading = ref(true);

const onLoaded = () => {
  isLoading.value = false;
};
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

.app-container {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
