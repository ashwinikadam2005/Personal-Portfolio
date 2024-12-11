document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰";
    menuToggle.className = "menu-toggle";
    document.querySelector(".nav").appendChild(menuToggle);
  
    const navLinks = document.querySelector(".nav-links");
    
    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Sticky Header
    const header = document.querySelector(".header");
    const stickyHeader = () => {
      if (window.scrollY > 50) {
        // header.style.background = "#6c63ff";
      } else {
        // header.style.background = "linear-gradient(to right, #6c63ff, #9d97ff)";
      }
    };
    
    window.addEventListener("scroll", stickyHeader);
  
    // Scroll animations
    const animatedElements = document.querySelectorAll(".skills, .projects, #contact");
    const scrollEffect = () => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", scrollEffect);
    scrollEffect();
  
    // Handle form submission feedback
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting me! I will respond soon.");
      contactForm.reset();
    });
  });
  