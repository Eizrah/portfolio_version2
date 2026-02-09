<template>
  <div class="project-card">
    <div class="card-image">
      <img :src="image" :alt="'Image du projet ' + titre" />
      <div class="card-overlay"></div>
    </div>

    <div class="card-content">
      <div class="card-technos">
        <span
          v-for="(techno, index) in technos"
          :key="index"
          class="techno-badge"
        >
          {{ techno }}
        </span>
      </div>

      <h3 class="card-title">{{ titre }}</h3>

      <p class="card-description">{{ description }}</p>

      <a :href="lienGit" target="_blank" class="card-button">
        <font-awesome-icon icon="fa-brands fa-github" />
        {{ t("projects.viewProject") }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useI18n } from "@/i18n";

const { t } = useI18n();

defineProps({
  image: {
    type: String,
    required: true,
    default: "/path/to/default-image.jpg",
  },
  titre: {
    type: String,
    required: true,
    default: "Nom du Projet",
  },
  description: {
    type: String,
    required: true,
    default: "Description courte du projet.",
  },
  technos: {
    type: Array,
    required: true,
    default: () => [],
  },
  lienProjet: {
    type: String,
    required: false,
    default: "#",
  },
  lienGit: {
    type: String,
    required: false,
    default: "#",
  },
});
</script>

<style scoped>
.project-card {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-cyan);
  box-shadow: 0 20px 40px rgba(0, 217, 255, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--bg-primary) 100%
  );
  opacity: 0.8;
}

.card-content {
  padding: 1.5rem;
}

.card-technos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.techno-badge {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid var(--accent-cyan);
  border-radius: 20px;
  color: var(--accent-cyan);
  font-size: 0.75rem;
  font-weight: 500;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 3rem;
  white-space: pre-line;
}

.card-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.2);
}

.card-button:hover {
  box-shadow: 0 6px 25px rgba(0, 217, 255, 0.4);
  transform: translateY(-2px);
}
</style>
