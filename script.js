// Subtle fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.section-title, .project-card, .about-text, .about-details, .contact-content');

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
});
