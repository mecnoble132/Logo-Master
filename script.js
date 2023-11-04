document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("#navLinks");

    menuToggle.addEventListener("click", function() {
        menuToggle.classList.toggle("active1");
        menuToggle.classList.toggle("active2");
        menuToggle.classList.toggle("active3");
        navLinks.classList.toggle("active");
    });

    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            menuToggle.classList.remove("active1", "active2", "active3");
            navLinks.classList.remove("active");
        });
    });
});
