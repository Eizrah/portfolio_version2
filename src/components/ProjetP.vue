<template>
  <main class="w-full py-16 bg-gray-100" v-intersect="'is-visible'">
    <div class="mx-auto px-6 md:max-w-screen-xl">
      <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-4">
        Projet personnel
      </h2>
      <div class="w-20 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>
      <p class="text-center text-gray-600 mb-6 texte">
        Découvrez une section de mes réalisations personnel, alliant des
        applications desktop,web et mobile
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <cardAff
          class="carte"
          v-for="(projet, index) in projetPerso"
          :key="index"
          :image="projet.image"
          :titre="projet.titre"
          :description="projet.description"
          :technos="projet.technos"
          :lienProjet="projet.lienProjet"
          :lienGit="projet.lienGit"
        />
      </div>
    </div>
  </main>
</template>
<script setup>
import cardAff from "./block/cardAff.vue";
import lgImage from "@/assets/LG.png";
import testImage from "@/assets/test.jpg";

const projetPerso = [
  {
    titre: "Application E-commerce",
    description:
      "Application E-commerce pour la vente de Tennis de sport et de vêtements ",
    technos: ["Flutter", "Firebase"],
    lienProjet: "https://ecommerce.com",
    lienGit: "https://github.com/ecommerce",
    image: lgImage,
  },
  {
    titre: "Application E-commerce",
    description:
      "Application E-commerce pour la vente de Tennis de sport et de vêtements  mais eb version application web",
    technos: ["VueJs", "Django", "Mysql"],
    lienProjet: "https://ecommerce.com",
    lienGit: "https://github.com/ecommerce",
    image: testImage,
  },
];
</script>
<style scoped>
@keyframes slideY {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes floutage {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}
.carte,
.texte {
  opacity: 0;
}
.is-visible .carte {
  animation: floutage 1s forwards 0.7s;
}
.is-visible .texte {
  animation: slideY 1s forwards 0.3s;
}
</style>
