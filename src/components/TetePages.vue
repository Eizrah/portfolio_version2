<template>
  <nav>
    <div
      class="menu-toggle"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p>
      <strong> F.Eizrah </strong>
    </p>
    <!-- Suppression du v-if et de transition, on gère l'affichage par CSS -->
    <ul :class="['nav-links', { open: isMenuOpen }]">
      <li><a @click="closeMenu" href="#home">Accueil</a></li>
      <li>
        <a @click="closeMenu" href="#apropos">À propos</a>
      </li>
      <li>
        <a @click="closeMenu" href="#projetp">Mes Projets</a>
      </li>
      <li>
        <a @click="closeMenu" href="#contactme">Contacte</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
strong {
  font-size: x-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  background-image: linear-gradient(45deg, #3971ec, #8f35ea);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 1rem;
}
nav {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
  padding: 0.5rem 0;
  height: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  position: relative;
}

.menu-toggle span {
  height: 3px;
  width: 25px;
  background-color: #333;
  margin: 4px 0;
  border-radius: 2px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

ul.nav-links {
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 20px;

  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 5px;
  max-width: 1300px;

  align-items: center;
}

ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2em;
  position: relative;
}

ul li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

ul li a:hover::after {
  width: 100%;
}

ul li a:hover {
  color: #007bff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  ul.nav-links {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 50px;
    left: 0;
    background-color: #f8f9fa;
    padding: 20px;
    width: 200px;
    height: auto;
    border-right: 1px solid #ccc;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: none;
  }

  ul.nav-links.open {
    display: flex;
  }

  ul li {
    width: 100%;
  }

  ul li a {
    display: block;
    width: 100%;
    padding: 8px 0;
    font-size: 1.2em;
  }
  strong {
    margin-right: 1rem;
  }
  ul.nav-links {
    /* Nouvelle position si le nav est plus petit */
    top: 45px;
  }
}
</style>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
