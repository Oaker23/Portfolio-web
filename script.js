// Theme toggle
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);
themeBtn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? '' : 'light';
  if (next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
  localStorage.setItem('theme', next);
});

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(open));
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      menu?.classList.remove('show');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
