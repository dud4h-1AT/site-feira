const elementos = document.querySelectorAll(".card, .grid div, .hero-text, .hero-img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
});

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.7s";
    observer.observe(el);
});

window.addEventListener("load", () => {
    console.log("Bem-vindo à SolveHub!");
});

const botao = document.querySelector(".btn-principal");

if (botao) {
    botao.addEventListener("click", () => {
        alert("Bem-vindo à SolveHub! Vamos criar sua conta.");
    });
}