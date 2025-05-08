document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
  
    // Check for saved theme preference or default to light
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
        localStorage.setItem("theme", "dark");
      } else {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
        localStorage.setItem("theme", "light");
      }
    });
  });
  
  // Assuming your original script.js content continues here
  // Add your existing script.js functions like agregarNombre(), eliminarNombre(), etc.