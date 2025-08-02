// assets/js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Random hero tagline
  if (window.taglines) {
    const t = window.taglines[Math.floor(Math.random() * window.taglines.length)];
    const titleEl = document.querySelector('.hero-title');
    const subEl   = document.querySelector('.hero-subtitle');
    if (titleEl && subEl) {
      titleEl.textContent    = t.title;
      subEl.textContent      = t.subtitle;
    }
  }

  // 2. Mobile nav toggle
  const nav      = document.querySelector('.site-nav');
  const toggle   = document.querySelector('.nav-toggle');
  const backdrop = document.querySelector('.nav-backdrop');

  if (toggle && nav && backdrop) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      backdrop.classList.toggle('open', isOpen);
    });
    backdrop.addEventListener('click', () => {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
    });
  }

  // 3. Submenu ARIA + keyboard support
  document.querySelectorAll('.site-nav .has-sub').forEach(parent => {
    const link    = parent.querySelector('a');
    const submenu = parent.querySelector('.sub-menu');
    if (!submenu) return;

    // On desktop hover, toggle aria-expanded
    parent.addEventListener('mouseenter', () => {
      parent.setAttribute('aria-expanded', 'true');
    });
    parent.addEventListener('mouseleave', () => {
      parent.setAttribute('aria-expanded', 'false');
    });

    // On focus within (keyboard), also open
    parent.addEventListener('focusin', () => {
      parent.setAttribute('aria-expanded', 'true');
    });
    parent.addEventListener('focusout', () => {
      parent.setAttribute('aria-expanded', 'false');
    });

    // Toggle via Enter/Space on the parent link
    link.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = parent.getAttribute('aria-expanded') === 'true';
        parent.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        submenu.style.display = isOpen ? 'none' : 'block';
      }
    });
  });
});
