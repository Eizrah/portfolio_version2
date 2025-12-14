<template>
  <div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300">
    
    <div class="h-48 overflow-hidden">
      <img 
        :src="image" 
        :alt="'Image du projet ' + titre" 
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div class="p-6">
      
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="(techno, index) in technos" 
          :key="index"
          class="px-3 py-1 text-xs font-semibold rounded-full"
          :class="getTechnoClasses(techno)"
        >
          {{ techno }}
        </span>
      </div>

      <h3 class="text-xl font-extrabold text-gray-900 mb-2">
        {{ titre }}
      </h3>

      <p class="text-sm text-gray-600 mb-4 h-12 overflow-hidden">
        {{ description }}
      </p>

      <div class="flex items-center gap-4 mt-6">
        
        <a 
          :href="lienProjet" 
          target="_blank" 
          class="flex-1 text-center py-2 px-4 rounded-lg text-white font-bold transition duration-300 transform hover:scale-[1.03] 
                 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50"
        >
          Voir le projet
        </a>

        <a 
          :href="lienGit" 
          target="_blank" 
          class="flex-none p-3 rounded-full border border-gray-300 text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-indigo-600"
        >
          <font-awesome-icon icon="fa-brands fa-github" class="text-xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Définition des props pour rendre le composant dynamique
defineProps({
  image: {
    type: String,
    required: true,
    default: '/path/to/default-image.jpg' 
  },
  titre: {
    type: String,
    required: true,
    default: 'Nom du Projet' 
  },
  description: {
    type: String,
    required: true,
    default: 'Description courte du projet.' 
  },
  technos: {
    type: Array,
    required: true,
    default: () => [] 
  },
  lienProjet: {
    type: String,
    required: false,
    default: '#' 
  },
  lienGit: {
    type: String,
    required: false,
    default: '#' 
  },
});

/**
 * Fonction utilitaire pour attribuer des classes Tailwind spécifiques 
 * basées sur la technologie pour simuler la coloration de l'image.
 */
const getTechnoClasses = (technoName) => {
  const lowerName = technoName.toLowerCase();
  
  if (lowerName.includes('django')) return 'bg-green-100 text-green-800';
  if (lowerName.includes('mysql')) return 'bg-purple-100 text-purple-800';
  
  // Couleurs par défaut (si non trouvées)
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-pink-100 text-pink-800',
    'bg-teal-100 text-teal-800',
    'bg-yellow-100 text-yellow-800',
  ];
  
  // Hachage simple pour avoir une couleur semi-cohérente
  let hash = 0;
  for (let i = 0; i < lowerName.length; i++) {
    hash = lowerName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};
</script>