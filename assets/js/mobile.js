// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button and navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) {
        console.error('Menu toggle or nav menu not found');
        return;
    }
    
    // Direct click handler for the menu toggle button
    menuToggle.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log('Menu toggle clicked');
    };
    
    // Make sure each bar in the hamburger menu is also clickable
    const bars = menuToggle.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Menu bar clicked');
        };
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});