<template>
  <main id="apropos" class="about-section" v-intersect="'is-visible'">
    <div class="about-container">
      <div class="section-header">
        <h2 class="section-title">{{ t("about.title") }}</h2>
        <div class="title-underline"></div>
      </div>

      <div class="about-content">
        <section class="about-text">
          <h4 class="about-subtitle titre4">
            {{ t("about.subtitle") }}
          </h4>
          <p class="about-paragraph texte4">
            {{ t("about.paragraph1") }}
          </p>
          <p class="about-paragraph texte4">
            {{ t("about.paragraph2") }}
          </p>

          <h5 class="skills-title text5">
            {{ t("about.skills") }}
          </h5>
          <div class="skills-grid">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="skill-item"
              :style="{ animationDelay: `${0.9 + index * 0.1}s` }"
            >
              {{ skill.name }}
            </div>
          </div>
        </section>

        <section class="about-gallery">
          <div class="gallery-container">
            <transition-group name="fade" tag="div" class="gallery-wrapper">
              <div
                v-for="(image, index) in images"
                :key="index"
                v-show="currentImageIndex === index"
                class="gallery-image-container"
              >
                <img :src="image.url" :alt="image.alt" class="gallery-image" />
              </div>
            </transition-group>

            <div class="gallery-dots">
              <span
                v-for="(image, index) in images"
                :key="'dot-' + index"
                @click="currentImageIndex = index"
                class="gallery-dot"
                :class="{ active: currentImageIndex === index }"
              ></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "@/i18n";
import img1 from "@/assets/dev.jpg";
import img2 from "@/assets/django.jpg";
import img3 from "@/assets/flutter.jpg";
import img4 from "@/assets/Java.jpg";
import img5 from "@/assets/javascript.jpg";
import img6 from "@/assets/logo.png";

const { t } = useI18n();

const images = ref([
  { url: img1, alt: "Photo de dev" },
  { url: img2, alt: "Photo de django" },
  { url: img3, alt: "Photo de flutter" },
  { url: img4, alt: "Photo de java" },
  { url: img5, alt: "Photo de javascript" },
  { url: img6, alt: "Photo de vue" },
]);

const skills = [
  { name: "Java" },
  { name: "Python" },
  { name: "CustomTkinter" },
  { name: "Django" },
  { name: "JavaScript" },
  { name: "Vue.js" },
  { name: "Flutter" },
  { name: "MySQL" },
  { name: "SQLite" },
  { name: "UML" },
];

const currentImageIndex = ref(0);
let intervalId = null;

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

onMounted(() => {
  intervalId = setInterval(nextImage, 4000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.about-section {
  padding: 6rem 2rem;
  background: var(--bg-card);
  transition: background 0.3s ease;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media screen and (min-width: 768px) {
  .about-content {
    flex-direction: row;
    gap: 4rem;
  }
}

.about-text {
  flex: 1;
}

.about-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.about-paragraph {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.skills-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-cyan);
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-item {
  padding: 0.5rem 1rem;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid var(--accent-cyan);
  border-radius: 20px;
  color: var(--accent-cyan);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: 0;
}

.skill-item:hover {
  background: rgba(0, 217, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
  transform: translateY(-2px);
}

.about-gallery {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
}

.gallery-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.gallery-image-container {
  position: absolute;
  inset: 0;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.gallery-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-dot.active {
  background: var(--accent-cyan);
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

/* Animations */
.titre4,
.texte4,
.text5,
.skill-item {
  opacity: 0;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.is-visible .titre4 {
  animation: fadeSlide 0.8s ease forwards 0.2s;
}

.is-visible .texte4 {
  animation: fadeSlide 0.8s ease forwards 0.4s;
}

.is-visible .text5 {
  animation: fadeSlide 0.8s ease forwards 0.6s;
}

.is-visible .skill-item {
  animation: fadeSlide 0.6s ease forwards;
}
</style>
