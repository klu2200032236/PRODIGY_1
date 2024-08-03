// App.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("href").substring(1);
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.style.display = "block";
                } else {
                    page.style.display = "none";
                }
            });
        });
    });

    // Initial display setup
    pages.forEach(page => {
        if (page.id !== "home") {
            page.style.display = "none";
        }
    });
});
