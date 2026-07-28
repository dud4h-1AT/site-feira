const elementos = document.querySelectorAll(".card, .grid div, .hero-text, .hero-img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.7s";
    observer.observe(el);
});

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Bem-vindo à SolveHub!");
});

// Botão "Começar Agora"
const botao = document.querySelector(".btn-principal");

if(botao){
    botao.addEventListener("click", function(){
        alert("Bem-vindo à SolveHub! Vamos criar sua conta.");
    });
}
