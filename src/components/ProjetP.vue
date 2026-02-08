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
import image2D from "@/assets/construire_maison.jpg";
import aipic from "@/assets/ai.jpg";
const projetPerso = [
  {
    titre: "Application E-commerce",
    description: "Application E-commerce pour la vente de Tennis de sport ",
    technos: ["Flutter", "Firebase"],
    lienGit: "  https://github.com/Eizrah/projet-final-declic-Lv3",
    image: lgImage,
  },

  {
    titre: "Site E-commerce",
    description: "Site E-commerce pour la vente de Tennis de sport \n Ceci est la partie front-end",
    technos: ["VueJs", "TailwindCss"],
    lienGit: "https://github.com/Eizrah/EcommerveFront/",
    image: lgImage,
  },

  {
    titre: "Site E-commerce",
    description:
      "Site E-commerce pour la vente de Tennis de sport \n Ceci est la partie back-end \n coté back-end en cour de developpement",
    technos: [ "Django", "Mysql"],

    lienGit: "  https://github.com/Eizrah/SI_E_Shop/",
    image: testImage,
  },
  {
    titre: "Plan en 2D",
    description:
      "Logiciel fais en Java pour la construction d'un plan d'une maison en 2D ",
    technos: ["Java", "Swing"],

    lienGit: "https://github.com/Eizrah/Java2DM12025",
    image: image2D,
  },
  {
    titre: "ML pour les personnes muettes",
    description:
      "c'est un projet de machine learning pour aider les personnes muettes à communiquer mais aussi permettant à des personnes normales d'apprendre le language des signes ",
    technos: ["Python", "MediaPipe","OpenCV","CustomTkinter","Pillow","Panda & Scikit-learn","Pyttsx3"],

    lienGit: "https://github.com/Eizrah/Machine_L_IHM",
    image: aipic,
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
