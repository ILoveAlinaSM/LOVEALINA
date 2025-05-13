document.getElementById("confessBtn").addEventListener("click", function() {
    const messages = [
        "Я тебя люблю! ❤️",
        "Ты самая красивая! 🌸",
        "Мне так повезло, что ты есть в моей жизни! 💫",
        "Давай будем вместе всегда? 💞"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
});
