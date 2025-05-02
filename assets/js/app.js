// AOS.init();

const navMenu = document.querySelector('.nav_list');
const navToggle = document.querySelector('.toggle_menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Remove navMenu in scroll
window.onscroll = () => {
    navMenu.classList.remove('show')
}

/*======== Pricing Page ========*/
// Pricing Tabs action
document.querySelectorAll('.category_tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
        const content = document.querySelector(target);
        const tabs = document.querySelectorAll('.category_tab');
        const contents = document.querySelectorAll('.pro_category-box');

        tabs.forEach(t => t.classList.remove('active-tab'));
        contents.forEach(c => c.classList.remove('active-tab'));

        this.classList.add('active-tab');
        content.classList.add('active-tab');
    });
});

// Buttons action
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    // Check the current page using the pathname
    const currentPage = window.location.pathname;

    if (currentPage.includes("services.html")) {
        // Logic for services page
        const divs = document.querySelectorAll(".services_box .service_page-card");

        // Hide all sections
        divs.forEach(div => {
            div.style.display = "none";
        });

        // Show the section that matches the hash
        if (hash) {
            const targetdiv = document.querySelector(hash);
            if (targetdiv) {
                targetdiv.style.display = "flex"; // Use flex for services page
            }
        }
    } else if (currentPage.includes("pricing.html")) {
        // Logic for payment page
        const sections = document.querySelectorAll(".payment_cont");

        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show the section that matches the hash
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                targetSection.style.display = "block"; // Use block for payment page
            }
        }
    } else if (currentPage.includes("payment.html")) {
        // Logic for payment page
        const sections = document.querySelectorAll(".payment_cont");

        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show the section that matches the hash
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                targetSection.style.display = "block"; // Use block for payment page
            }
        }
    }
});
