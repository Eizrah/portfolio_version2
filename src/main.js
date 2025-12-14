import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import router from './router' À remmettre  plus tard si besoin

/* Importation des composants Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Importation des icônes spécifiques dont vous avez besoin */

import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* Ajout des icônes à la librairie */
library.add(faWhatsapp, faGithub, faLinkedin, faEnvelope, faPhone, faLocationDot, faClock);

import vIntersect from './directives/v-intersect';

const app = createApp(App)

/* Enregistrement du composant Font Awesome globalement */
app.component('font-awesome-icon', FontAwesomeIcon);

app.directive('intersect', vIntersect);

// app.use(router)

app.mount('#app');