
document.addEventListener("DOMContentLoaded", function () {
    // Course data: id matches section id, duration in months, amount in Naira
    const courses = [
        { id: "proDesign", duration: 3, amount: 150000 },
        { id: "proManagement", duration: 3, amount: 200000 },
        { id: "webDevFrontend", duration: 3, amount: 150000 },
        { id: "webDevFrontendAd", duration: 4, amount: 220000 },
        { id: "webDevBackend", duration: 4, amount: 300000 },
        { id: "webDevFullStack", duration: 6, amount: 500000 },
        { id: "mobileAppDev", duration: 5, amount: 500000 },
        { id: "dataScience", duration: 3, amount: 300000 },
        { id: "dataAnalytics", duration: 3, amount: 150000 },
        { id: "dataAnalyticsAd", duration: 5, amount: 270000 },
        { id: "cybersecurity", duration: 3, amount: 150000 },
        { id: "cybersecurityAd", duration: 6, amount: 350000 },
        { id: "graphicsDesign", duration: 3, amount: 120000 },
        { id: "digitalMarketing", duration: 3, amount: 150000 },
        { id: "digitalMarketingAd", duration: 3, amount: 200000 }
    ];

    // For each payment form, set up the logic
    document.querySelectorAll('.payment_design').forEach(section => {
        const courseId = section.id;
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        // Find the form in this section
        const form = section.querySelector('form');
        if (!form) return;

        const paymentPlanSelect = form.querySelector('#paymentPlan');
        // Add monthsBox and monthlyPayment if not present
        let monthsBox = form.querySelector('#monthsBox');
        let monthsSelect = form.querySelector('#months');
        let monthlyPaymentDiv = form.querySelector('#monthlyPayment');
        if (!monthsBox) {
            monthsBox = document.createElement('div');
            monthsBox.className = "input_box box-1";
            monthsBox.id = "monthsBox";
            monthsBox.style.display = "none";
            monthsBox.innerHTML = `
                <label for="months">Select Months</label>
                <select id="months" class="input_field"></select>
            `;
            paymentPlanSelect.parentNode.after(monthsBox);
            monthsSelect = monthsBox.querySelector('#months');
        }
        if (!monthlyPaymentDiv) {
            monthlyPaymentDiv = document.createElement('div');
            monthlyPaymentDiv.id = "monthlyPayment";
            monthlyPaymentDiv.style.display = "none";
            monthlyPaymentDiv.style.marginTop = "10px";
            monthlyPaymentDiv.style.fontWeight = "bold";
            monthsBox.after(monthlyPaymentDiv);
        }

        paymentPlanSelect.addEventListener("change", function () {
            if (this.value === "part") {
                monthsBox.style.display = "block";
                monthlyPaymentDiv.style.display = "none";
                monthsSelect.innerHTML = "";
                // Months options: from 2 up to course.duration (max 5)
                let maxMonths = Math.min(course.duration, 5);
                for (let i = 2; i <= maxMonths; i++) {
                    let option = document.createElement("option");
                    option.value = i;
                    option.textContent = `${i} months`;
                    monthsSelect.appendChild(option);
                }
            } else {
                monthsBox.style.display = "none";
                monthlyPaymentDiv.style.display = "none";
            }
        });

        monthsSelect.addEventListener("change", function () {
            let months = parseInt(this.value);
            if (course && months) {
                let monthlyAmount = Math.ceil(course.amount / months);
                monthlyPaymentDiv.textContent = `Monthly Payment: ₦${monthlyAmount.toLocaleString()} for ${months} months`;
                monthlyPaymentDiv.style.display = "block";
            }
        });
    });
});

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
