<template>
  <section id="services" class="services-section" v-intersect="'is-visible'">
    <div class="services-container">
      <div class="section-header">
        <h2 class="section-title srv-title">{{ t("services.title") }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle srv-subtitle">
          {{ t("services.subtitle") }}
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="(service, index) in services"
          :key="service.key"
          class="service-card srv-card"
          :style="{ animationDelay: `${0.3 + index * 0.15}s` }"
        >
          <div class="card-glow"></div>
          <div class="card-icon">
            <span v-html="service.icon"></span>
          </div>
          <h3 class="card-title">
            {{ t(`services.items.${service.key}.title`) }}
          </h3>
          <p class="card-description">
            {{ t(`services.items.${service.key}.description`) }}
          </p>
          <ul class="card-techs">
            <li v-for="tech in service.techs" :key="tech" class="tech-badge">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "@/i18n";

const { t } = useI18n();

const services = [
  {
    key: "webDev",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <polyline points="7 8 5 10 7 12"/>
      <polyline points="17 8 19 10 17 12"/>
      <line x1="14" y1="7" x2="10" y2="13"/>
    </svg>`,
    techs: ["Vue.js", "JavaScript", "Django", "Python"],
  },
  {
    key: "mobileDev",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12" y2="18"/>
      <path d="M9 6h6"/>
    </svg>`,
    techs: ["Flutter", "Dart", "SQLite"],
  },
  {
    key: "desktopDev",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`,
    techs: ["Java", "Python", "CustomTkinter"],
  },
  {
    key: "frontend",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
      <line x1="12" y1="22" x2="12" y2="15.5"/>
      <polyline points="22 8.5 12 15.5 2 8.5"/>
      <polyline points="2 15.5 12 8.5 22 15.5"/>
      <line x1="12" y1="2" x2="12" y2="8.5"/>
    </svg>`,
    techs: ["Vue.js", "HTML", "CSS", "JavaScript"],
  },
  {
    key: "backend",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>`,
    techs: ["Django", "Python", "MySQL", "SQLite"],
  },
  {
    key: "umlModeling",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>`,
    techs: ["UML", "Merise", "Diagrammes"],
  },
];
</script>

<style scoped>
.services-section {
  padding: 6rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.services-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at 30% 50%,
      rgba(0, 217, 255, 0.03) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 50%,
      rgba(168, 85, 247, 0.03) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media screen and (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-section {
    padding: 4rem 1rem;
  }
}

.service-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-cyan);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 217, 255, 0.1);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-glow {
  opacity: 1;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(0, 217, 255, 0.1),
    rgba(168, 85, 247, 0.1)
  );
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
}

.service-card:hover .card-icon {
  background: linear-gradient(
    135deg,
    rgba(0, 217, 255, 0.2),
    rgba(168, 85, 247, 0.2)
  );
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.service-card:hover .card-title {
  color: var(--accent-cyan);
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.925rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.card-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-badge {
  padding: 0.3rem 0.75rem;
  background: rgba(0, 217, 255, 0.08);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 20px;
  color: var(--accent-cyan);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
}

.service-card:hover .tech-badge {
  background: rgba(0, 217, 255, 0.12);
  border-color: rgba(0, 217, 255, 0.35);
}

/* Animation classes */
.srv-title,
.srv-subtitle,
.srv-card {
  opacity: 0;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.is-visible .srv-title {
  animation: fadeSlide 0.8s ease forwards 0.1s;
}

.is-visible .srv-subtitle {
  animation: fadeSlide 0.8s ease forwards 0.2s;
}

.is-visible .srv-card {
  animation: fadeSlide 0.7s ease forwards;
}
</style>
