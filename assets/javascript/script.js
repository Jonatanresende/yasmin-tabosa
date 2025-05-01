/*let slideIndex = 0;
let slides, dots;

function initSlides() {
    slides = document.getElementsByClassName("testimonial");
    dots = document.getElementsByClassName("dot");
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(true);
}

function showSlides(manual = false) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    if (!manual) {
        setTimeout(showSlides, 3000); // Muda o slide a cada 3 segundos
    }
}

document.addEventListener("DOMContentLoaded", initSlides);*/

// function handleScrollAnimations() {
//   const leftElements = document.querySelectorAll('.lado-esquerdo');
//   const rightElements = document.querySelectorAll('.lado-direito');
//   const cardItems = document.querySelectorAll('.card-item'); // Seleciona os cards
  
//   const animateElement = (element, animationClass) => {
//     const rect = element.getBoundingClientRect();
//     const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
//     // if (isVisible) {
//     //   element.classList.add(animationClass);
//     //   element.style.visibility = 'visible'; // Garante que o elemento fique visível
//     // }
//     // Só anima se ainda não tiver a classe
//     if (isVisible && !element.classList.contains(animationClass)) {
//       setTimeout(() => {
//         element.classList.add(animationClass);
//         element.style.visibility = 'visible'; // Garante que fique visível
//       }, delay); // Adiciona o atraso antes de aplicar a classe
//     }
//   };

//   leftElements.forEach(el => animateElement(el, 'slide-in-left'));
//   rightElements.forEach(el => animateElement(el, 'slide-in-right'));
//   // cardItems.forEach(el => animateElement(el, 'slide-in-card')); // Animação para card-item
//   cardItems.forEach((el, index) => {
//     const delay = index * 300; // Atraso incremental de 300ms por card
//     animateElement(el, 'slide-in-card', delay);
//   });
// }

// // Executa na abertura da página
// // handleScrollAnimations();
// // Garantir animação ao abrir a página
// window.addEventListener('DOMContentLoaded', handleScrollAnimations);

// // Continua verificando durante o scroll
// window.addEventListener('scroll', handleScrollAnimations);

function handleScrollAnimations() {
  // Seleciona os elementos das seções
  const leftElements = document.querySelectorAll('.lado-esquerdo');
  const rightElements = document.querySelectorAll('.lado-direito');
  
  // Função genérica para animar os elementos das seções
  const animateElement = (element, animationClass) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible && !element.classList.contains(animationClass)) {
      element.classList.add(animationClass);
      element.style.visibility = 'visible'; // Garante que o elemento fique visível
    }
  };

  // Aplica animações às seções da esquerda e da direita
  leftElements.forEach(el => animateElement(el, 'slide-in-left'));
  rightElements.forEach(el => animateElement(el, 'slide-in-right'));
}

function handleCardAnimations() {
  // Seleciona os cards
  const cardRows = document.querySelectorAll('.card-row');

  // Lógica exclusiva para animar os cards
  cardRows.forEach((row, index) => {
    const rect = row.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Adiciona a animação com um pequeno atraso para cada card
    if (isVisible && !row.classList.contains('slide-in-row')) {
      setTimeout(() => {
        row.classList.add('slide-in-row');
      }, index * 300); // Incrementa o delay em 300ms para cada card
    }
  });
}

// Executa na abertura da página
handleScrollAnimations();
handleCardAnimations();

// Continua verificando durante o scroll
window.addEventListener('scroll', () => {
  handleScrollAnimations();
  handleCardAnimations();
});
