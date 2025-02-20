document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', function() {
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownMenu.classList.remove('show');
    });

    dropdownMenu.addEventListener('scroll', function() {
        dropdownMenu.classList.remove('show');
    });
});