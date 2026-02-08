<template>
  <main class="container mx-auto px-6 py-16" v-intersect="'is-visible'">
    <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-4">
      Contactez-moi
    </h2>
    <div class="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
    <p class="text-center text-gray-600 mb-12 text-lg text1">
      Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
      discuter.
    </p>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="p-8 bg-gray-50 rounded-xl shadow-lg h-full bg-[#F5F5FF] blo">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Mes coordonnées</h3>

        <div class="space-y-6">
          <div class="flex items-start">
            <div
              class="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600"
            >
              <font-awesome-icon icon="fa-solid fa-envelope" class="text-xl" />
            </div>
            <div class="ml-4">
              <p class="text-base font-semibold text-gray-700">Email</p>
              <p class="text-sm text-gray-500">eizrahfdr@gmail.com</p>
            </div>
          </div>

          <div class="flex items-start">
            <div
              class="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600"
            >
              <font-awesome-icon icon="fa-solid fa-phone" class="text-xl" />
            </div>
            <div class="ml-4">
              <p class="text-base font-semibold text-gray-700">Téléphone</p>
              <p class="text-sm text-gray-500">+261 34 82 663 19</p>
            </div>
          </div>

          <div class="flex items-start">
            <div
              class="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600"
            >
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="text-xl"
              />
            </div>
            <div class="ml-4">
              <p class="text-base font-semibold text-gray-700">Localisation</p>
              <p class="text-sm text-gray-500">Toamasina, Madagascar</p>
            </div>
          </div>

          <div class="flex items-start">
            <div
              class="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600"
            >
              <font-awesome-icon icon="fa-solid fa-clock" class="text-xl" />
            </div>
            <div class="ml-4">
              <p class="text-base font-semibold text-gray-700">Disponibilité</p>
              <p class="text-sm text-gray-500">Lun - Ven, 9h - 22h</p>
            </div>
          </div>
        </div>

        <h4
          class="text-lg font-bold text-gray-800 mt-10 mb-4 pt-4 border-t border-gray-200"
        >
          Contactez-moi
        </h4>
        <div class="flex space-x-4">
          <a
            href="https://github.com/Eizrah"
            class="p-3 rounded-full bg-white text-gray-600 hover:text-indigo-600 transition duration-300 shadow-sm"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="text-xl" />
          </a>
          <!-- <a
            href="#"
            class="p-3 rounded-full bg-white text-gray-600 hover:text-indigo-600 transition duration-300 shadow-sm"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="text-xl" />
          </a> -->

          <a
            href="mailto:eizrahfdr@gmail.com"
            class="p-3 rounded-full bg-white text-gray-600 hover:text-indigo-600 transition duration-300 shadow-sm"
          >
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>

          <a
            href="https://wa.me/261348266319"
            class="p-3 rounded-full bg-white text-gray-600 hover:text-indigo-600 transition duration-300 shadow-sm"
          >
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
          </a>
        </div>
      </div>

      <div class="p-8 bg-white rounded-xl shadow-lg blo2">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">
          Envoyez-moi un message
        </h3>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label
              for="nom"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Nom complet</label
            >
            <input
              type="text"
              id="nom"
              v-model="formData.nom"
              placeholder="Votre nom"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="votre@email.com"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              for="sujet"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Sujet</label
            >
            <input
              type="text"
              id="sujet"
              v-model="formData.sujet"
              placeholder="Sujet de votre message"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Message</label
            >
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              placeholder="Décrivez votre projet..."
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3 px-6 rounded-lg text-white font-bold text-lg transition duration-300 transform hover:scale-[1.01] bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-indigo-500/50 disabled:opacity-50"
          >
            {{ isSubmitting ? "Envoi en cours..." : "Envoyer le message" }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  nom: "",
  email: "",
  sujet: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  // Prépare les données pour Web3Forms
  const payload = {
    access_key:process.env.VUE_APP_WEB3FORMS_KEY,
    name: formData.value.nom,
    email: formData.value.email,
    subject: formData.value.sujet || "Nouveau message Portfolio",
    message: formData.value.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      alert("Merci ! Votre message a été envoyé avec succès.");
      // Réinitialise le formulaire
      formData.value = { nom: "", email: "", sujet: "", message: "" };
    } else {
      alert("Oups ! Une erreur est survenue.");
    }
  } catch (error) {
    console.error(error);
    alert("Impossible d'envoyer le message pour le moment.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@keyframes slideX {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideinvX {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideinvY {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.text1,
.blo,
.blo2 {
  opacity: 0;
}
.is-visible .text1 {
  animation: slideinvY 0.5s ease-in-out forwards;
}
.is-visible .blo {
  animation: slideX 0.8s ease-in-out forwards;
}
.is-visible .blo2 {
  animation: slideinvX 0.8s ease-in-out forwards;
}
</style>
