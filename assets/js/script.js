document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav_list a"); // Select all nav links

    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Loop through each section to find the one in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Distance from the top of the page
            const sectionHeight = section.offsetHeight; // Height of the section
            const scrollPosition = window.scrollY + 150; // Adjust for offset (e.g., header height)

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id"); // Get the section's ID
            }
        });

        // Remove 'active' class from all nav links
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Add 'active' class to the corresponding nav link
        if (currentSection) {
            const activeLink = document.querySelector(`.nav_list a[href="#${currentSection}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav_list a"); // Select all nav links
    const headerHeight = document.querySelector(".header").offsetHeight; // Get the height of the fixed header

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop; // Get the top position of the section
                const scrollPosition = sectionTop - headerHeight; // Adjust for the header height

                // Smooth scroll to the section
                window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});