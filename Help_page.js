document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const descriptionInput = document.getElementById('description');
    const issueTypeSelect = document.getElementById('issue-type');

    
    function validateForm() {
        let isValid = true;
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address');
        } else {
            removeError(emailInput);
        }

        if (!subjectInput.value.trim()) {
            isValid = false;
            showError(subjectInput, 'Subject is required');
        } else {
            removeError(subjectInput);
        }

        if (!descriptionInput.value.trim()) {
            isValid = false;
            showError(descriptionInput, 'Description is required');
        } else {
            removeError(descriptionInput);
        }

        if (!issueTypeSelect.value) {
            isValid = false;
            showError(issueTypeSelect, 'Please select an issue type');
        } else {
            removeError(issueTypeSelect);
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('div');
        errorElement.className = 'error-message text-danger';
        errorElement.textContent = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
        input.classList.add('is-invalid');
    }

    function removeError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        if (errorElement) {
            formControl.removeChild(errorElement);
        }
        input.classList.remove('is-invalid');
    }

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            
            console.log('Form submitted successfully');
            alert('Thank you for your submission. We will get back to you soon.');
            form.reset();
        }
    });

    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    
    const languageDropdown = document.getElementById('languageDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.textContent;
            languageDropdown.textContent = selectedLanguage;
           
            console.log(`Language changed to: ${selectedLanguage}`);
        });
    });

   
    const currentYearSpan = document.querySelector('.footer p');
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYearSpan.textContent.replace('2024', new Date().getFullYear());
    }
});