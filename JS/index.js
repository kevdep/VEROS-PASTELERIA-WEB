document.addEventListener("DOMContentLoaded", () => {
  // Navegación simple de testimonios (para tarjetas individuales)
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');

  document.querySelector('.nav-arrows.right')?.addEventListener('click', () => {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
  });

  document.querySelector('.nav-arrows.left')?.addEventListener('click', () => {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    testimonials[currentTestimonial].style.display = 'block';
  });

  // Carrusel horizontal de testimonios
  const carousel = document.getElementById("testimonial-carousel");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const scrollAmount = 270;

  next?.addEventListener("click", () => {
    carousel?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prev?.addEventListener("click", () => {
    carousel?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Efecto hover para tarjetas de categoría
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'linear-gradient(145deg, #e6751f, #c9661b)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = 'linear-gradient(145deg, #d2691e, #b8621a)';
    });
  });

  // Animación botones de reserva con jQuery
  $('.btn-reservasmp').on('mouseenter', function () {
    $('.btn-reservajm').stop().fadeTo(200, 0.4);
  }).on('mouseleave', function () {
    $('.btn-reservajm').stop().fadeTo(200, 1);
  });

  $('.btn-reservajm').on('mouseenter', function () {
    $('.btn-reservasmp').stop().fadeTo(200, 0.4);
  }).on('mouseleave', function () {
    $('.btn-reservasmp').stop().fadeTo(200, 1);
  });

// 🔄 MENÚ RESPONSIVE: botón hamburguesa
const toggle = document.querySelector(".menu-toggle");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

if (toggle && navLeft && navRight) {
  toggle.addEventListener("click", () => {
    navLeft.classList.toggle("active");
    navRight.classList.toggle("active");
  });

  // Cierra menú al hacer clic en algún enlace (opcional)
  [...navLeft.querySelectorAll("a"), ...navRight.querySelectorAll("a")].forEach(link => {
    link.addEventListener("click", () => {
      navLeft.classList.remove("active");
      navRight.classList.remove("active");
    });
  });
}


  // Activar íconos Lucide
  lucide.createIcons();
});
