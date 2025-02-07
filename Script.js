// Smooth scrolling effect for the navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle experience details visibility when clicking on experience buttons
const expButtons = document.querySelectorAll('.exp-btn');
expButtons.forEach(button => {
    button.addEventListener('click', () => {
        const expDetails = button.nextElementSibling;
        
        // Toggle visibility of the details
        if (expDetails.style.display === 'none' || expDetails.style.display === '') {
            expDetails.style.display = 'block';
        } else {
            expDetails.style.display = 'none';
        }
    });
});
