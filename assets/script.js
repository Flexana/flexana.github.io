window.addEventListener("scroll", function() {
  const images = document.querySelectorAll(".hero-image, .about-image img");

  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight) {
      image.style.display = "block";
      image.style.opacity = 1;
      image.style.transform = "translateY(0)";
    }
  });
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // ajuste pour la hauteur du menu fixe
      behavior: 'smooth'
    });
  });
});

