document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll("nav .nav-link");

    // Setting up the Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Add fade-in class to start animation
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });

    // Observing each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Updating navbar links based on scroll position
    window.addEventListener("scroll", () => {
        let current = "";
        const navbarHeight = document.querySelector('nav').offsetHeight;
    
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            const sectionHeight = section.clientHeight;
            console.log(`Section: ${section.getAttribute("id")}, Top: ${sectionTop}, Height: ${sectionHeight}`); // Log section details
            if (pageYOffset >= sectionTop && pageYOffset < (sectionTop + sectionHeight)) {
                current = section.getAttribute("id");
            }
        });
    
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") == "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
