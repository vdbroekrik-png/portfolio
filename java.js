// Dit script beheert de mobiele navbar toggle functionaliteit
document.addEventListener('DOMContentLoaded', function () {
    // Selecteer de toggle-knop en het menu
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    // Als de elementen niet bestaan, stop dan
    if (!toggle || !menu) return;
    // Voeg een klik-event toe aan de toggle-knop om het menu te openen/sluiten
    toggle.addEventListener('click', function () {
        const open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Sluit het menu wanneer een link wordt geklikt (voor mobiel)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});