document.addEventListener('DOMContentLoaded', () => {
    // === Логика за мобилно меню ===
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Автоматично затваряне при избор на секция
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // Промяна на бутон за звънене от текст към номер
    const myButton = document.querySelector('.call-btn'); // Сложи твоя клас тук
    const mediaQuery = window.matchMedia('(min-width: 900px)');   // Промени пикселите, ако е нужно

    function handleButtonTextChange(e) {
        if (myButton) { // Проверка дали бутонът изобщо съществува на тази страница
            const svgIcon = `<svg class="phone-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 22px; height: 22px; fill: #ff0000; transition: fill 0.3s ease;"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21c.28-.26.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>`;
            
            if (e.matches) {
                myButton.innerHTML = `${svgIcon} 0886104127`;
            } else {
                myButton.innerHTML = `${svgIcon} Звънни ни`;
            }
        }
    }

    mediaQuery.addEventListener('change', handleButtonTextChange);
    handleButtonTextChange(mediaQuery);
});