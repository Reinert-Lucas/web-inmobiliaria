// Animacion
const elements = document.querySelectorAll(
  ".nosotros-titulo, .nosotros-txt, .nosotros-img, .contacto-titulo, .contacto-list"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);
elements.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});
