<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <h3 class="footer-logo">F.Eizrah</h3>
        <p class="footer-tagline">
          {{ t("footer.tagline") }}
        </p>

        <ul class="footer-socials">
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

      <div class="footer-divider"></div>

      <p class="footer-copyright">
        &copy; {{ new Date().getFullYear() }} F.Eizrah.
        {{ t("footer.copyright") }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "@/i18n";

const { t } = useI18n();
</script>

<style scoped>
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 3rem 2rem 1.5rem;
  transition: background 0.3s ease;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-content {
  margin-bottom: 1.5rem;
}

.footer-logo {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
}

.footer-tagline {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 400px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
}

.footer-socials {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.2);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-cyan),
    var(--accent-purple),
    transparent
  );
  margin: 1.5rem 0;
  opacity: 0.3;
}

.footer-copyright {
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
