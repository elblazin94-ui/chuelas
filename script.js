/* ===== PREMIUM MOTION SYSTEM ===== */

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => {
  revealObserver.observe(el);
});

// Form Submission (Lead Capture)
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = leadForm.querySelector('button');
    const originalText = btn.textContent;
    
    // Feedback visual premium
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    
    setTimeout(() => {
      btn.textContent = '¡Recibido!';
      leadForm.reset();
      
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
      }, 3000);
    }, 1500);
  });
}

// Mobile Menu (Hamburger)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}
