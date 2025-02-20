document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactFormContainer = document.getElementById('contactFormContainer');
    const contactForm = document.getElementById('contactForm');

    // Function to toggle the form visibility
    function toggleFormVisibility() {
        if (getComputedStyle(contactFormContainer).display === 'none') {
            contactFormContainer.style.display = 'block';
            // Trigger reflow for transition to take effect
            contactFormContainer.offsetWidth;
            contactFormContainer.style.transform = 'scale(1)';
        } else {
            contactFormContainer.style.transform = 'scale(0)';
            setTimeout(() => {
                contactFormContainer.style.display = 'none';
            }, 500); // Match the transition time
        }
    }

    // Event listener for the 'Get In Touch' button
    contactBtn.addEventListener('click', toggleFormVisibility);

    // Event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        if (this.reportValidity()) {
            alert('Your message has been sent successfully!');
            toggleFormVisibility();
        }
    });

    // Click event listener on the window to detect clicks outside the form
    window.addEventListener('click', function(event) {
        // If the form is visible and the click is outside the form
        if (getComputedStyle(contactFormContainer).display === 'block' && !contactForm.contains(event.target) && event.target !== contactBtn) {
            toggleFormVisibility();
        }
    });

    // Click event inside the form to stop it from propagating to the window
    contactForm.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Intersection Observer for fading in sections
    const sections = document.querySelectorAll(".content-section, .projects-section");
    const navLinks = document.querySelectorAll("nav .nav-link");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Add fade-in class to start animation
            }
        });
    }, {
        threshold: 0.15 // Trigger when 20% of the section is visible
    });

    // Observing each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

