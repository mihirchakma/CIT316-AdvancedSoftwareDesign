// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Back to top
const btn = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 400);
});

// Active nav highlighting
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#fff' : '';
    a.style.background = a.getAttribute('href') === '#' + current ? 'rgba(255,255,255,0.12)' : '';
  });
});
