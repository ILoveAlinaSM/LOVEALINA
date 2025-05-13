// Добавляем мерцание случайным сердечкам
setInterval(() => {
    const hearts = document.querySelectorAll('.hearts span');
    hearts.forEach(heart => {
        if (Math.random() > 0.7) {
            heart.style.animation = 'none';
            void heart.offsetWidth; // Триггер перезапуска анимации
            heart.style.animation = 'float 3s ease-in-out infinite';
        }
    });
}, 1000);
