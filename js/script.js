// Effetto di caricamento
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Sito San Valentino caricato!');
    
    // Effetto cuore al click
    addHeartClickEffect();
});

// Effetto cuore che appare al click
function addHeartClickEffect() {
    document.addEventListener('click', function(e) {
        createFloatingHeart(e.clientX, e.clientY);
    });
}

// Crea un cuore che anima al click
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float-up 2s ease-out forwards';

    document.body.appendChild(heart);

    // Rimuovi il cuore dopo l'animazione
    setTimeout(() => heart.remove(), 2000);
}

// Aggiungi animazione CSS dinamicamente per i cuori
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Messaggio di benvenuto nella console
console.log('%c💖 Benvenuto su San Valentino! 💖', 'color: #ff6b9d; font-size: 20px; font-weight: bold;');
console.log('%cFatto con amore ❤️', 'color: #764ba2; font-size: 16px;');
