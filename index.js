document.addEventListener('DOMContentLoaded' , function () {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    menuIcon.addEventListener('click', function () {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });
});