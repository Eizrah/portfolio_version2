export default {
    mounted(el, binding) {
        const options = {
            root: null,
            threshold: 0.15,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.classList.add(binding.value || 'animate-fade-in-up');
                    // Optional: If we want it to run only once, uncomment the next line
                    // observer.unobserve(el);
                } else {
                    // Removes the class when looking away, so it re-animates on return
                    el.classList.remove(binding.value || 'animate-fade-in-up');
                }
            });
        }, options);

        observer.observe(el);
        el._observer = observer;
    },
    unmounted(el) {
        if (el._observer) {
            el._observer.disconnect();
        }
    },
};
