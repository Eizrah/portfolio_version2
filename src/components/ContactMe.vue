<template>
  <main class="contact-section" v-intersect="'is-visible'">
    <div class="contact-container">
      <div class="section-header">
        <h2 class="section-title">{{ t("contact.title") }}</h2>
        <div class="title-underline"></div>
      </div>
      <p class="section-subtitle text1">
        {{ t("contact.subtitle") }}
      </p>

      <section class="contact-grid">
        <div class="contact-info blo">
          <h3 class="info-title">{{ t("contact.myDetails") }}</h3>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </div>
              <div class="info-content">
                <p class="info-label">{{ t("contact.email") }}</p>
                <p class="info-value">eizrahfdr@gmail.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon icon="fa-solid fa-phone" />
              </div>
              <div class="info-content">
                <p class="info-label">{{ t("contact.phone") }}</p>
                <p class="info-value">+261 34 82 663 19</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
              </div>
              <div class="info-content">
                <p class="info-label">{{ t("contact.location") }}</p>
                <p class="info-value">Toamasina, Madagascar</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon icon="fa-solid fa-clock" />
              </div>
              <div class="info-content">
                <p class="info-label">{{ t("contact.availability") }}</p>
                <p class="info-value">{{ t("contact.availabilityValue") }}</p>
              </div>
            </div>
          </div>

          <div class="social-section">
            <h4 class="social-title">{{ t("contact.title") }}</h4>
            <div class="social-links">
              <a
                href="https://github.com/Eizrah"
                target="_blank"
                class="social-link"
              >
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
              <a href="mailto:eizrahfdr@gmail.com" class="social-link">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </a>
              <a
                href="https://wa.me/261348266319"
                target="_blank"
                class="social-link"
              >
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form-container blo2">
          <h3 class="form-title">{{ t("contact.sendMessage") }}</h3>

          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="nom">{{ t("contact.form.fullName") }}</label>
              <input
                type="text"
                id="nom"
                v-model="formData.nom"
                :placeholder="t('contact.form.namePlaceholder')"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">{{ t("contact.form.email") }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                :placeholder="t('contact.form.emailPlaceholder')"
                required
              />
            </div>

            <div class="form-group">
              <label for="sujet">{{ t("contact.form.subject") }}</label>
              <input
                type="text"
                id="sujet"
                v-model="formData.sujet"
                :placeholder="t('contact.form.subjectPlaceholder')"
              />
            </div>

            <div class="form-group">
              <label for="message">{{ t("contact.form.message") }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                :placeholder="t('contact.form.messagePlaceholder')"
                required
              ></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="submit-btn">
              {{
                isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.send")
              }}
            </button>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "@/i18n";

const { t } = useI18n();

const formData = ref({
  nom: "",
  email: "",
  sujet: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  const payload = {
    access_key: process.env.VUE_APP_WEB3FORMS_KEY,
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
      alert(t("contact.alerts.success"));
      formData.value = { nom: "", email: "", sujet: "", message: "" };
    } else {
      alert(t("contact.alerts.error"));
    }
  } catch (error) {
    console.error(error);
    alert(t("contact.alerts.networkError"));
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  background: var(--bg-card);
  transition: background 0.3s ease;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
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
  margin: 0 auto;
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media screen and (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-info,
.contact-form-container {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.info-title,
.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid var(--accent-cyan);
  border-radius: 12px;
  color: var(--accent-cyan);
  font-size: 1.25rem;
}

.info-label {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.info-value {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.social-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  transform: translateY(-3px);
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 217, 255, 0.5);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Animations */
.text1,
.blo,
.blo2 {
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.is-visible .text1 {
  animation: fadeUp 0.6s ease forwards 0.1s;
}

.is-visible .blo {
  animation: slideIn 0.8s ease forwards 0.2s;
}

.is-visible .blo2 {
  animation: slideInRight 0.8s ease forwards 0.3s;
}
</style>
