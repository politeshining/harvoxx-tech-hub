
document.addEventListener('DOMContentLoaded', () => {
    // Function to check if all inputs in the visible section are filled
    const checkInputs = () => {
        // Get the currently visible section
        const visibleSection = document.querySelector('.payment_design[style*="display: block"]');

        if (visibleSection) {
            // Get all input fields in the visible section
            const fullName = visibleSection.querySelector('#fullname');
            const email = visibleSection.querySelector('#email');
            const dob = visibleSection.querySelector('#dob');
            const phoneNo = visibleSection.querySelector('#number');
            const message = visibleSection.querySelector('#message');
            const gender = visibleSection.querySelector('#gender');
            const paymentPlan = visibleSection.querySelector('#paymentPlan');
            const button = visibleSection.querySelector('.payment_btn');

            // Check if all inputs are filled
            if (
                fullName.value.trim() !== '' &&
                email.value.trim() !== '' &&
                dob.value.trim() !== '' &&
                phoneNo.value.trim() !== '' &&
                gender.value.trim() !== '' &&
                paymentPlan.value.trim() !== ''
            ) {
                button.classList.remove('disabled');
            } else {
                button.classList.add('disabled');
            }
        }
    };

    // Add event listeners to all input fields
    const allInputs = document.querySelectorAll('#fullname, #email, #dob, #number, #gender, #paymentPlan');
    allInputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    // Handle the "Next" button click
    const nextButtons = document.querySelectorAll('.payment_btn');
    nextButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
        });
    });

    // Initial check on page load
    checkInputs();
});
