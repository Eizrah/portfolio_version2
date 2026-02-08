<script setup>
  const publicPath = process.env.BASE_URL;
</script>
<template>
  <main class="accueil-main" v-intersect="'is-visible'">
    <section class="blabla">
      <p class="acceuil accueil-texte">
        Bonjour, je suis FREDERIC Eizrah
        <span class="accueil-titre"> Developpeur Fullstack & Mobil </span>
      </p>

      <div class="butt accueil-boutons">
        <!-- <a id="cv" href="/cv/monCV.pdf" download>Telecharger mon CV</a> -->
        <a
          id="cv"
          :href="`${publicPath}cv/monCV.pdf`"
          download="Mon_CV_Frederic.pdf"
        >
          Telecharger mon CV
        </a>

        <a id="contact" href="#contactme">Me Contacter</a>
      </div>

      <ul class="accueil-socials">
        <li>
          <a href="https://github.com/Eizrah">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/261348266319">
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
          </a>
        </li>
        <li>
          <a href="mailto:eizrahfdr@gmail.com">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
        </li>
      </ul>
    </section>

    <section class="photo">
      <img
        src="@/assets/sans_fond.png"
        alt="photo de profil"
        class="accueil-photo"
      />
    </section>
  </main>
</template>

<style scoped>
.accueil-main {
  background-color: #f6f5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 40px 16px;
  min-height: calc(100vh - 45px - 130px);
}

@media screen and (min-width: 768px) {
  .accueil-main {
    flex-direction: row;
    padding: 0;
  }
}

.blabla {
  width: 100%;
  order: 2;
  text-align: center;
  padding: 0 16px;
}

@media screen and (min-width: 768px) {
  .blabla {
    width: 50%;
    order: 1;
    text-align: left;
  }
}

.accueil-texte {
  font-size: 2.25rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 24px;
}
@media screen and (min-width: 640px) {
  .accueil-texte {
    font-size: 3rem;
  }
}
.accueil-texte {
  opacity: 0;
}

.accueil-titre {
  display: block;
  font-size: 1.875rem;
  font-weight: 800;
  margin-top: 4px;

  background-image: linear-gradient(to right, #3971ec, #8f35ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
@media screen and (min-width: 640px) {
  .accueil-titre {
    font-size: 2.25rem;
  }
}
.butt {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}
@media screen and (min-width: 768px) {
  .butt {
    justify-content: flex-start;
  }
}
.accueil-boutons {
  opacity: 0;
}

#cv {
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  border: none;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;

  background-image: linear-gradient(
    to right,
    #3971ec 0%,
    #8f35ea 50%,
    #3971ec 100%
  );
  background-size: 200% auto;

  transition: background-position 0.5s ease-out, transform 0.3s ease-in-out;
}
#cv:hover {
  background-position: -100% 0;
  transform: scale(1.05);
}
#cv:active {
  transform: scale(0.9);
  transition: all 0.3s ease;
}

#contact {
  background-color: white;
  color: #111827;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid #e5e7eb;
  border: 1px solid #e5e7eb;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;

  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
#contact:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}
#contact:active {
  transform: scale(0.9);
}

.accueil-socials {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem; /* mb-10 */
}
@media screen and (min-width: 768px) {
  .accueil-socials {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}
.accueil-socials {
  opacity: 0;
}

.accueil-socials a {
  color: #111827;
  font-size: 1.5rem;
  transition: all 0.3s ease-out;
}
.accueil-socials a:hover {
  color: #3971ec;
  transform: scale(1.1);
}
.accueil-socials a:active {
  transform: scale(0.9);
}

.photo {
  width: 100%;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .photo {
    width: 50%;
    order: 2;
  }
}

.accueil-photo {
  width: 60%;
  max-width: 384px;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 9999px;
  border: 4px solid #8f35ea;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  opacity: 0;
}
@media screen and (min-width: 768px) {
  .accueil-photo {
    margin-top: 0;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.is-visible .accueil-texte {
  animation: slideUp 1s forwards 0.3s;
}
.is-visible .accueil-boutons {
  animation: slideUp 1s forwards 0.6s;
}

.is-visible .accueil-socials {
  animation: slideUp 1s forwards 0.9s;
}
.is-visible .accueil-photo {
  animation: slideLeft 1.5s forwards;
}
</style>

<!-- <script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script> -->
