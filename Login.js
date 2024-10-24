document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('Email');
    const passwordInput = document.getElementById('Password');
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('loginContainer');
    const profileContainer = document.getElementById('profileContainer');
    const logoutButton = document.getElementById('logoutButton');

    
    function validateForm() {
        let isValid = true;
        if (!emailInput.value.trim()) {
            isValid = false;
            showError(emailInput, 'Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email');
        } else {
            removeError(emailInput);
        }

        if (!passwordInput.value.trim()) {
            isValid = false;
            showError(passwordInput, 'Password is required');
        } else {
            removeError(passwordInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('div');
        errorElement.className = 'error-message text-danger';
        errorElement.textContent = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
    }

    function removeError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        if (errorElement) {
            formControl.removeChild(errorElement);
        }
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    
    const togglePassword = document.createElement('button');
    togglePassword.type = 'button';
    togglePassword.className = 'btn btn-outline-secondary';
    togglePassword.innerHTML = '<i class="far fa-eye"></i>';
    togglePassword.style.position = 'absolute';
    togglePassword.style.right = '10px';
    togglePassword.style.top = '50%';
    togglePassword.style.transform = 'translateY(-50%)';
    passwordInput.parentElement.style.position = 'relative';
    passwordInput.parentElement.appendChild(togglePassword);

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });

    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            
            simulateLogin();
        }
    });

    
    function simulateLogin() {
        
        console.log('Login attempt successful');
        
      
        alert('Login successful!');

        
        loginContainer.classList.add('d-none');
        profileContainer.classList.remove('d-none');

       
        loginForm.reset();
    }

    
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        console.log('Logout successful');

        
        profileContainer.classList.add('d-none');
        loginContainer.classList.remove('d-none');

        
        alert('You have been logged out successfully.');
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
            if (!this.closest('#profileDropdown')) {
                e.preventDefault();
                const selectedLanguage = this.textContent;
                languageDropdown.textContent = selectedLanguage;
                
                console.log(`Language changed to: ${selectedLanguage}`);
            }
        });
    });
});