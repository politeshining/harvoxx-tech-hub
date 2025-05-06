// filter buttons
$(document).ready(function () {
    $('.filter_btn').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.pro_container').show('');
        } else {
            $('.pro_container').not('.' + value).hide('');
            $('.pro_container').filter('.' + value).show('');
        };
    });

    $('.filter_btn').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
/*
// filter buttons
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter_btn");
    const courses = document.querySelectorAll(".pro_container");
    const searchInput = document.querySelector(".search_input");
    const searchButton = document.querySelector(".search_btn");
    
        // Filter courses by category
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.textContent.trim().toLowerCase();
    
                // Remove active class from all buttons and add to the clicked one
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
    
                // Show or hide courses based on the category
                courses.forEach(course => {
                    const courseCategory = course.querySelector("h5").textContent.trim().toLowerCase();
                    if (category === "all" || courseCategory.includes(category)) {
                        course.style.display = "block";
                    } else {
                        course.style.display = "none";
                    }
                });
            });
        });

    // Search courses by text
    searchButton.addEventListener("input", () => {
        const searchText = searchInput.value.trim().toLowerCase();

        // Show or hide courses based on the search text
        courses.forEach(course => {
            const courseTitle = course.querySelector("h5").textContent.trim().toLowerCase();
            const courseTools = course.querySelector(".tools p").textContent.trim().toLowerCase();
            if (courseTitle.includes(searchText) || courseTools.includes(searchText)) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
    });

    // Optional: Add "Enter" key functionality for the search input
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchButton.click();
        }
    });
});*/


// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll(".pro_container");
    const searchInput = document.querySelector(".search_input");
    const searchButton = document.querySelector(".search_btn");
    // searchInput.addEventListener('submit', searchResult);

    if (searchInput) {
        // Handle input event for real-time search
        searchInput.addEventListener('input', () => {
            searchResult();
        });

        // Handle "Enter" key press for search
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission if inside a form
                searchResult();
            }
        });

        // Handle search button click
        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent form submission if inside a form
                searchResult();
            });
        }
    }

    function searchResult() {
        const searchValue = searchInput.value.toLowerCase().trim();
        const noCourseMessage = document.querySelector('.no_course-message');

        if (courses.length === 0) {
            // If no courses are available, show a message
            if (noCourseMessage) noCourseMessage.style.display = 'flex';
            return;
        }

        let hasResults = false; // Track if any course matches the search


        courses.forEach(course => {
            const courseName = course.getAttribute('data-name'); // Access the data-name directly

            if (courseName && courseName.toLowerCase().includes(searchValue)) {
                // Highlight the matched text
                const regex = new RegExp(`(${searchValue})`, 'gi');
                const highlightedName = courseName.replace(regex, '<strong>$1</strong>');

                // Update the innerHTML of the course name element
                const courseNameElement = course.querySelector('h5'); // Assuming the course name is in an <h5> tag
                if (courseNameElement) {
                    courseNameElement.innerHTML = highlightedName;
                }

                course.style.display = 'block'; // Show matching course
                hasResults = true;
            } else {
                course.style.display = 'none'; // Hide non-matching course

                // Reset the course name to its original state
                const courseNameElement = course.querySelector('h5');
                if (courseNameElement) {
                    courseNameElement.textContent = courseName; // Reset to original text
                }
            }
        });

        if (!hasResults) {
            // If no products match the search query, show a message
            if (noCourseMessage) noCourseMessage.style.display = 'flex';
        } else {
            if (noCourseMessage) noCourseMessage.style.display = 'none';
        }

    }
});
