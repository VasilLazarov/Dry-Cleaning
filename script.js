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
            if (e.matches) {
                myButton.textContent = "📞 0886104127";
            } else {
                myButton.textContent = "📞 Звънни ни";
            }
        }
    }

    mediaQuery.addEventListener('change', handleButtonTextChange);
    handleButtonTextChange(mediaQuery);
});