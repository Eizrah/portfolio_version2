import { ref, watch } from 'vue';

const isDarkMode = ref(true);

// Check localStorage for saved preference
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark';
    }
}

export function useTheme() {
    const toggleTheme = () => {
        isDarkMode.value = !isDarkMode.value;
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
            updateBodyClass();
        }
    };

    const updateBodyClass = () => {
        if (typeof document !== 'undefined') {
            if (isDarkMode.value) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            }
        }
    };

    // Initialize on first use
    if (typeof document !== 'undefined') {
        updateBodyClass();
    }

    watch(isDarkMode, () => {
        updateBodyClass();
    });

    return {
        isDarkMode,
        toggleTheme
    };
}
