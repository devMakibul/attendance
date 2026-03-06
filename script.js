document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("scroll", () => {
    scrollReveal();
    if (window.scrollY > 20) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });



  const revealElements = document.querySelectorAll("[data-reveal]");

  const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
      const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

      if (elementIsInScreen) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  }
  
  scrollReveal();

});

