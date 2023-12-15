// for the scroll button on the nav
  document.addEventListener("DOMContentLoaded", function () {
    // Select all links with the 'navbar' class
    const navLinks = document.querySelectorAll('.navbar a');

    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior of the link
        const targetId = this.getAttribute('href').substring(1); // Get the target id from the href attribute
        const targetElement = document.getElementById(targetId); // Get the target element by id

        // Scroll smoothly to the target element
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.nav').offsetHeight, // Adjusted for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  });

// for the slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("images-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,  6000); // Change image every 6 seconds
}

// for the countries in fthe find agent 


