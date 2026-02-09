<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-content">
      <div class="loading-logo">
        <span class="logo-text">F.Eizrah</span>
      </div>
      <div class="loading-text">
        <span
          v-for="(letter, index) in loadingText"
          :key="index"
          class="loading-letter"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ letter }}
        </span>
      </div>
      <div class="loading-bar">
        <div class="loading-progress" :style="{ width: `${progress}%` }"></div>
      </div>
      <div class="loading-percent">{{ progress }}%</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";

const emit = defineEmits(["loaded"]);

const isLoading = ref(true);
const progress = ref(0);
const loadingText = "INITIALIZING".split("");

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += Math.random() * 15 + 5;
    if (progress.value >= 100) {
      progress.value = 100;
      clearInterval(interval);
      setTimeout(() => {
        isLoading.value = false;
        emit("loaded");
      }, 500);
    }
  }, 150);
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-out forwards;
  animation-delay: 2s;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  margin-bottom: 2rem;
}

.logo-text {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d9ff 0%, #8b5cf6 50%, #00d9ff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s linear infinite;
}

.loading-text {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 2rem;
}

.loading-letter {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00d9ff;
  opacity: 0;
  animation: pulse 1.5s ease-in-out infinite;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
}

.loading-bar {
  width: 250px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto 1rem;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #00d9ff, #8b5cf6);
  border-radius: 2px;
  transition: width 0.15s ease-out;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
}

.loading-percent {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: monospace;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px);
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
