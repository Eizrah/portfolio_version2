<script setup>
import { useI18n } from "@/i18n";
const { t } = useI18n();
const publicPath = process.env.BASE_URL;
</script>

<template>
  <main class="hero-section" v-intersect="'is-visible'">
    <div class="hero-bg-gradient"></div>
    <div class="hero-grid"></div>

    <section class="hero-content">
      <div class="hero-text">
        <p class="hero-greeting accueil-texte">
          {{ t("home.greeting") }}
        </p>
        <h1 class="hero-title accueil-titre">
          {{ t("home.title") }}
        </h1>

        <div class="hero-buttons accueil-boutons">
          <a
            class="btn-primary"
            :href="`${publicPath}cv/monCV.pdf`"
            download="monCV.pdf"
          >
            <span class="btn-icon">📄</span>
            {{ t("home.downloadCV") }}
          </a>
          <a class="btn-secondary" href="#contactme">
            <span class="btn-icon">💬</span>
            {{ t("home.contactMe") }}
          </a>
        </div>

        <ul class="hero-socials accueil-socials">
          <li>
            <a
              href="https://github.com/Eizrah"
              target="_blank"
              class="social-link"
            >
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/261348266319"
              target="_blank"
              class="social-link"
            >
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="mailto:eizrahfdr@gmail.com" class="social-link">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
          </li>
        </ul>
      </div>

      <div class="hero-image-container">
        <div class="hero-image-glow"></div>
        <img
          src="@/assets/sans_fond.webp"
          alt="photo de profil"
          class="hero-image accueil-photo"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 2rem 2rem;
  overflow: hidden;
  transition: background 0.3s ease;
}

.hero-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      ellipse at 20% 20%,
      rgba(0, 217, 255, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 80%,
      rgba(139, 92, 246, 0.12) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  opacity: 0.5;
}

.hero-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
}

@media screen and (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.hero-text {
  text-align: center;
  flex: 1;
}

@media screen and (min-width: 768px) {
  .hero-text {
    text-align: left;
  }
}

.hero-greeting {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .hero-greeting {
    font-size: 2rem;
  }
}

.hero-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--accent-cyan),
    var(--accent-purple),
    var(--accent-pink)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  margin-bottom: 2rem;
}

@media screen and (min-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

@media screen and (min-width: 768px) {
  .hero-buttons {
    justify-content: flex-start;
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  color: white;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 217, 255, 0.5);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-3px);
}

.hero-socials {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .hero-socials {
    justify-content: flex-start;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--accent-cyan);
  border-color: var(--accent-cyan);
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.2);
}

.hero-image-container {
  position: relative;
  flex-shrink: 0;
}

.hero-image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(0, 217, 255, 0.25) 0%,
    rgba(139, 92, 246, 0.15) 40%,
    transparent 70%
  );
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.hero-image {
  position: relative;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--accent-cyan);
  box-shadow: 0 0 40px rgba(0, 217, 255, 0.3);
}

@media screen and (min-width: 768px) {
  .hero-image {
    width: 350px;
    height: 350px;
  }
}

/* Animations */
.accueil-texte,
.accueil-titre,
.accueil-boutons,
.accueil-socials,
.accueil-photo {
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.is-visible .accueil-texte {
  animation: slideUp 0.8s ease forwards 0.2s;
}
.is-visible .accueil-titre {
  animation: slideUp 0.8s ease forwards 0.4s;
}
.is-visible .accueil-boutons {
  animation: slideUp 0.8s ease forwards 0.6s;
}
.is-visible .accueil-socials {
  animation: slideUp 0.8s ease forwards 0.8s;
}
.is-visible .accueil-photo {
  animation: fadeIn 1s ease forwards 0.3s;
}
</style>
