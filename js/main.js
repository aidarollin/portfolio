/**
 * main.js
 * -------
 * Runtime behaviour for Aida Sofiah's portfolio.
 *
 * Sections
 * --------
 * 1. Scroll-reveal   — fades + slides up .reveal-section elements as they
 *                      enter the viewport.
 * 2. Active nav link — highlights the nav link matching the current section.
 */


/* ==========================================================================
   1. Scroll-reveal
   ========================================================================== */

/**
 * Each element with the class `reveal-section` starts with
 *   opacity: 0; transform: translateY(Npx)
 * set via an inline style (applied in the HTML so the initial state is
 * visible even before this script runs).
 *
 * When the element reaches the viewport threshold the observer applies
 * a CSS transition and snaps it to the visible, in-place state, then
 * stops watching it so we never re-animate.
 */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';

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

/**
 * Watches each major section and marks the corresponding nav link as active
 * by adding the `nav-active` class.  Style the class in styles.css if you
 * want a visible indicator (underline, colour change, etc.).
 */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');

      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('nav-active', isMatch);
      });
    });
  },
  {
    rootMargin: '-40% 0px -55% 0px', // trigger when section is near the middle of the viewport
  }
);

sections.forEach((section) => navObserver.observe(section));
