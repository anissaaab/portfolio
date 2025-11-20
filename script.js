const words = [
    "Spécialiste e-commerce",
    "Developer Full-Stack",
];

const animatedText = document.getElementById("animated-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100; // vitesse de frappe

function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (!isDeleting) {
        animatedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500); // pause avant de supprimer
            return;
        }
    } else {
        animatedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeWriter, isDeleting ? 50 : delay);
}

// Démarre l'animation au chargement
window.addEventListener("load", typeWriter);


const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggle.textContent = isDark ? "🌙" : "☀️"; // change icône
});

// Sélectionne toutes les ancres qui commencent par #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // empêche le comportement par défaut
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        // Scroll lent sur 1,5s
        target.scrollIntoView({
            behavior: 'smooth', // fluide
            block: 'start'      // top de la section
        });
    });
});

