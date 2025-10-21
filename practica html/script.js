// === MODO OSCURO / CLARO ===
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Cambia el icono según el modo
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// === ANIMACIÓN EN SCROLL ===
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".card, .icons img");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const pantalla = window.innerHeight;
    if (pos < pantalla - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
});
