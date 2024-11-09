document.addEventListener("DOMContentLoaded", () => {
    const waveEmoji = document.querySelector(".hero-content h1 span");

    if (waveEmoji) {
        setInterval(() => {
            waveEmoji.classList.toggle("wave");
        }, 1000);
    }
});
