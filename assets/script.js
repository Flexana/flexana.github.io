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
