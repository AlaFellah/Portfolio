// Select all skill cards
const skillCards = document.querySelectorAll('.skill-card');

// Create an intersection observer to detect when elements enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'show' class to trigger the animation
      entry.target.classList.add('show');
      
      // Stop observing this element to ensure the animation happens only once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is in the viewport
});

// Observe each skill card
skillCards.forEach(card => {
  observer.observe(card);
});
