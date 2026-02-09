<template>
  <nav class="navbar">
    <div
      class="menu-toggle"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p class="logo">
      <strong>F.Eizrah</strong>
    </p>
    <ul :class="['nav-links', { open: isMenuOpen }]">
      <li>
        <a @click="closeMenu" href="#home">{{ t("nav.home") }}</a>
      </li>
      <li>
        <a @click="closeMenu" href="#apropos">{{ t("nav.about") }}</a>
      </li>
      <li>
        <a @click="closeMenu" href="#projetp">{{ t("nav.projects") }}</a>
      </li>
      <li>
        <a @click="closeMenu" href="#contactme">{{ t("nav.contact") }}</a>
      </li>
      <li class="toggle-mobile">
        <div class="toggle-group-mobile">
          <button
            class="theme-btn"
            @click="toggleTheme"
            :title="isDarkMode ? 'Mode clair' : 'Mode sombre'"
          >
            <span class="theme-icon">{{ isDarkMode ? "☀️" : "🌙" }}</span>
          </button>
          <button class="lang-btn" @click="toggleLocale">
            <span class="flag">{{ locale === "fr" ? "🇬🇧" : "🇫🇷" }}</span>
            <span class="lang-text">{{ locale === "fr" ? "EN" : "FR" }}</span>
          </button>
        </div>
      </li>
    </ul>
    <div class="nav-actions">
      <button
        class="theme-btn"
        @click="toggleTheme"
        :title="isDarkMode ? 'Mode clair' : 'Mode sombre'"
      >
        <span class="theme-icon">{{ isDarkMode ? "☀️" : "🌙" }}</span>
      </button>
      <button class="lang-btn" @click="toggleLocale">
        <span class="flag">{{ locale === "fr" ? "🇬🇧" : "🇫🇷" }}</span>
        <span class="lang-text">{{ locale === "fr" ? "EN" : "FR" }}</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: background 0.3s ease;
}

.logo strong {
  font-size: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
  height: 2px;
  width: 25px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  margin: 4px 0;
  border-radius: 2px;
  transition: all 0.3s ease;
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
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

ul li a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

ul li a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  transition: width 0.3s ease;
  border-radius: 1px;
}

ul li a:hover::after {
  width: 100%;
}

ul li a:hover {
  color: var(--accent-cyan);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Theme Toggle Button */
.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: var(--accent-cyan);
  transform: scale(1.05);
}

.theme-icon {
  font-size: 1.25rem;
}

/* Language Toggle Button */
.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  transform: scale(1.05);
}

.lang-btn .flag {
  font-size: 1rem;
}

.toggle-mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 1rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-actions {
    display: none;
  }

  .toggle-mobile {
    display: block;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    width: 100%;
  }

  .toggle-group-mobile {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }

  .toggle-group-mobile .theme-btn {
    flex: 0 0 auto;
  }

  .toggle-group-mobile .lang-btn {
    flex: 1;
    justify-content: center;
  }

  ul.nav-links {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 60px;
    left: 0;
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    width: 280px;
    height: calc(100vh - 60px);
    border-right: 1px solid var(--border-color);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    gap: 0;
  }

  ul.nav-links.open {
    transform: translateX(0);
  }

  ul li {
    width: 100%;
  }

  ul li a {
    display: block;
    width: 100%;
    padding: 1rem 0;
    font-size: 1.1rem;
  }
}
</style>

<script setup>
import { ref } from "vue";
import { useI18n } from "@/i18n";
import { useTheme } from "@/theme";

const { t, locale, toggleLocale } = useI18n();
const { isDarkMode, toggleTheme } = useTheme();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
