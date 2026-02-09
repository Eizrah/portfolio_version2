<template>
  <main class="projects-section" v-intersect="'is-visible'">
    <div class="projects-container">
      <div class="section-header">
        <h2 class="section-title">{{ t("projects.title") }}</h2>
        <div class="title-underline"></div>
      </div>
      <p class="section-subtitle texte">
        {{ t("projects.subtitle") }}
      </p>
      <div class="projects-grid">
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
          :style="{ animationDelay: `${0.3 + index * 0.15}s` }"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "@/i18n";
import cardAff from "./block/cardAff.vue";
import lgImage from "@/assets/LG.png";
import testImage from "@/assets/test.jpg";
import image2D from "@/assets/construire_maison.jpg";
import aipic from "@/assets/ai.jpg";

const { t } = useI18n();

const projetPerso = computed(() => [
  {
    titre: t("projects.items.ecommerceApp.title"),
    description: t("projects.items.ecommerceApp.description"),
    technos: ["Flutter", "Firebase"],
    lienGit: "https://github.com/Eizrah/projet-final-declic-Lv3",
    image: lgImage,
  },
  {
    titre: t("projects.items.ecommerceSiteFront.title"),
    description: t("projects.items.ecommerceSiteFront.description"),
    technos: ["VueJs", "TailwindCss"],
    lienGit: "https://github.com/Eizrah/EcommerveFront/",
    image: lgImage,
  },
  {
    titre: t("projects.items.ecommerceSiteBack.title"),
    description: t("projects.items.ecommerceSiteBack.description"),
    technos: ["Django", "Mysql"],
    lienGit: "https://github.com/Eizrah/SI_E_Shop/",
    image: testImage,
  },
  {
    titre: t("projects.items.plan2D.title"),
    description: t("projects.items.plan2D.description"),
    technos: ["Java", "Swing"],
    lienGit: "https://github.com/Eizrah/Java2DM12025",
    image: image2D,
  },
  {
    titre: t("projects.items.mlMute.title"),
    description: t("projects.items.mlMute.description"),
    technos: ["Python", "MediaPipe", "OpenCV", "CustomTkinter"],
    lienGit: "https://github.com/Eizrah/Machine_L_IHM",
    image: aipic,
  },
]);
</script>

<style scoped>
.projects-section {
  padding: 6rem 2rem;
  background: transparent;
  transition: background 0.3s ease;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  margin: 0 auto;
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Animations */
.texte,
.carte {
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.is-visible .texte {
  animation: fadeUp 0.8s ease forwards 0.2s;
}

.is-visible .carte {
  animation: fadeUp 0.8s ease forwards;
}
</style>
