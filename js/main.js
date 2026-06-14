/**
 * main.js
 * -------
 * Runtime behaviour for Aida Sofiah's portfolio.
 *
 * Sections
 * --------
 * 1. Scroll-reveal   — fades + slides up .reveal-section elements as they
 *                      enter the viewport.
 * 2. Active nav link — highlights the link matching the visible section.
 * 3. Mobile menu     — toggles the hamburger drawer on small screens.
 */


/* ==========================================================================
   1. Scroll-reveal
   ========================================================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal-section').forEach((el) => {
  revealObserver.observe(el);
});


/* ==========================================================================
   2. Active nav link
   ========================================================================== */

/*
 * Watches each section with an id and marks the matching nav anchor with
 * the .nav-active class when it is near the centre of the viewport.
 */
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks  = document.querySelectorAll('nav a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');

      navLinks.forEach((link) => {
        link.classList.toggle('nav-active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => navObserver.observe(section));


/* ==========================================================================
   3. Mobile menu
   ========================================================================== */

const mobileMenuBtn  = document.getElementById('mobile-menu-btn');
const mobileMenu     = document.getElementById('mobile-menu');
const menuIconOpen   = document.getElementById('menu-icon-open');
const menuIconClose  = document.getElementById('menu-icon-close');

if (mobileMenuBtn && mobileMenu) {

  /** Toggle the drawer open / closed. */
  function toggleMenu(forceClose = false) {
    const isOpen = !mobileMenu.classList.contains('hidden');
    const shouldClose = forceClose || isOpen;

    mobileMenu.classList.toggle('hidden', shouldClose);
    menuIconOpen.classList.toggle('hidden', !shouldClose);
    menuIconClose.classList.toggle('hidden', shouldClose);
    mobileMenuBtn.setAttribute('aria-expanded', String(!shouldClose));
  }

  mobileMenuBtn.addEventListener('click', () => toggleMenu());

  /* Close when any link inside the drawer is tapped */
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  /* Close when the user presses Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(true);
  });
}
