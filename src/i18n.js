import { ref, computed } from 'vue';
import fr from './locales/fr.json';
import en from './locales/en.json';

const messages = { fr, en };
const currentLocale = ref('fr');

export function useI18n() {
    const locale = computed(() => currentLocale.value);

    const t = (key) => {
        const keys = key.split('.');
        let result = messages[currentLocale.value];

        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                // Fallback to French if key not found
                result = messages['fr'];
                for (const fallbackKey of keys) {
                    if (result && typeof result === 'object' && fallbackKey in result) {
                        result = result[fallbackKey];
                    } else {
                        return key; // Return key if not found
                    }
                }
                break;
            }
        }

        return result || key;
    };

    const toggleLocale = () => {
        currentLocale.value = currentLocale.value === 'fr' ? 'en' : 'fr';
    };

    const setLocale = (newLocale) => {
        if (newLocale === 'fr' || newLocale === 'en') {
            currentLocale.value = newLocale;
        }
    };

    return {
        locale,
        t,
        toggleLocale,
        setLocale
    };
}
