<template>
  <main
    id="apropos"
    class="container mx-auto px-6 py-16 "
    v-intersect="'is-visible'"
  >
    <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-4">
      À propos de moi
    </h2>
    <div class="w-20 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>

    <div class="flex flex-col md:flex-row gap-12 items-start">
      <section class="blabla md:w-1/2">
        <h4
          class="text-2xl font-semibold mb-6 text-gray-700 leading-relaxed titre4"
        >
          Diplômé en informatique, spécialisé en developpement web fullstack et
          mobile
        </h4>
        <p class="mb-4 text-gray-600 leading-relaxed texte4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quaerat sunt accusantium. Similique qui libero vel. Corrupti dolore,
          molestias repudiandae eius quam aperiam, aliquam esse ea velit
          voluptate eveniet et?
        </p>
        <p class="mb-8 text-gray-600 leading-relaxed texte4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus doloremque consequuntur voluptates, vero sed et illum vel
          voluptate distinctio veniam sint esse aut optio eius assumenda
          veritatis suscipit nesciunt?
        </p>

        <h5
          class="text-xl font-bold mt-8 mb-4 pb-2 border-b border-indigo-200 text-gray-800 text5"
        >
          Compétences technique
        </h5>
        <div class="flex flex-wrap gap-3">
          <div
            class="px-4 py-2 bg-red-100 text-red-800 font-medium rounded-full text-sm comp1"
          >
            Java
          </div>
          <div
            class="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full text-sm comp2"
          >
            Python
          </div>
          <div
            class="px-4 py-2 bg-cyan-100 text-cyan-800 font-medium rounded-full text-sm comp3"
          >
            CustomTkinter
          </div>
          <div
            class="px-4 py-2 bg-green-100 text-green-800 font-medium rounded-full text-sm comp4"
          >
            Django
          </div>
          <div
            class="px-4 py-2 bg-yellow-100 text-yellow-800 font-medium rounded-full text-sm comp5"
          >
            JavaScript
          </div>
          <div
            class="px-4 py-2 bg-teal-100 text-teal-800 font-medium rounded-full text-sm comp6"
          >
            Vue.js
          </div>

          <div
            class="px-4 py-2 bg-purple-100 text-purple-800 font-medium rounded-full text-sm comp7"
          >
            Flutter
          </div>
          <div
            class="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full text-sm comp8"
          >
            MySQL
          </div>
          <div
            class="px-4 py-2 bg-pink-100 text-pink-800 font-medium rounded-full text-sm comp9"
          >
            SQLite
          </div>
        </div>
      </section>

      <section
        class="photo md:w-1/2 flex items-center justify-center min-h-full"
      >
        <div
          class="relative w-full max-w-lg aspect-square bg-gray-200 rounded-lg shadow-xl overflow-hidden"
        >
          <transition-group name="fade" tag="div">
            <div
              v-for="(image, index) in images"
              :key="index"
              v-show="currentImageIndex === index"
              class="absolute inset-0 w-full h-full"
            >
              <img
                :src="image.url"
                :alt="image.alt"
                class="w-full h-full object-cover"
              />
            </div>
          </transition-group>

          <div
            class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
          >
            <span
              v-for="(image, index) in images"
              :key="'dot-' + index"
              @click="currentImageIndex = index"
              class="w-2.5 h-2.5 rounded-full bg-white opacity-50 cursor-pointer transition-opacity duration-300"
              :class="{
                'opacity-100 bg-indigo-500': currentImageIndex === index,
              }"
            ></span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "@/assets/dev.jpg";
import img2 from "@/assets/django.jpg";
import img3 from "@/assets/flutter.jpg";
import img4 from "@/assets/Java.jpg";
import img5 from "@/assets/javascript.jpg";
import img6 from "@/assets/logo.png";

const images = ref([
  { url: img1, alt: "Photo de dev" },
  { url: img2, alt: "Photo de django" },
  { url: img3, alt: "Photo de flutter" },
  { url: img4, alt: "Photo de java" },
  { url: img5, alt: "Photo de javascript" },
  { url: img6, alt: "Photo de vue" },
  // Ajoutez d'autres images ici
]);

//Variable pour suivre l'index de la photo actuellement affichée
const currentImageIndex = ref(0);
let intervalId = null;

//Fonction pour passer à l'image suivante
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

//Démarrer le défilement automatique lors du montage du composant
onMounted(() => {
  // Changement toutes les 4 secondes (4000 ms)
  intervalId = setInterval(nextImage, 4000);
});

//Nettoyer l'intervalle lors de la destruction du composant pour éviter les fuites de mémoire
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
<style scoped>
/* Styles de transition pour un effet de fondu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

@keyframes slideY {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideX {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
.titre4,
.texte4,
.text5,
.comp1,
.comp2,
.comp3,
.comp4,
.comp5,
.comp6,
.comp7,
.comp8,
.comp9 {
  opacity: 0;
}
.is-visible .titre4,
.is-visible .texte4 {
  animation: floutage 1s forwards 0.3s;
}
.is-visible .text5 {
  animation: slideX 1s forwards 0.6s;
}
.is-visible .comp1 {
  animation: slideX 1s forwards 0.9s;
}
.is-visible .comp2 {
  animation: slideX 1s forwards 1.2s;
}
.is-visible .comp3 {
  animation: slideX 1s forwards 1.5s;
}
.is-visible .comp4 {
  animation: slideX 1s forwards 1.8s;
}
.is-visible .comp5 {
  animation: slideX 1s forwards 2.1s;
}
.is-visible .comp6 {
  animation: slideX 1s forwards 2.4s;
}
.is-visible .comp7 {
  animation: slideX 1s forwards 2.7s;
}
.is-visible .comp8 {
  animation: slideX 1s forwards 3s;
}
.is-visible .comp9 {
  animation: slideX 1s forwards 3.3s;
}
</style>
