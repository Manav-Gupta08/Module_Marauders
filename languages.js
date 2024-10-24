document.addEventListener('DOMContentLoaded', function() {
    
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

    
    const courseBoxes = document.querySelectorAll('.course-box');
    courseBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    observer.unobserve(image);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        
        document.querySelectorAll('img.lazy').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }

    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search languages...';
    searchInput.className = 'form-control mb-4';
    document.querySelector('.heading').insertAdjacentElement('afterend', searchInput);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        courseBoxes.forEach(box => {
            const languageName = box.querySelector('h3').textContent.toLowerCase();
            if (languageName.includes(searchTerm)) {
                box.style.display = '';
            } else {
                box.style.display = 'none';
            }
        });
    });
});