/**
 * tailwind.config.js
 * ------------------
 * Tailwind CDN theme configuration.
 * Must be loaded via <script src="..."> BEFORE cdn.tailwindcss.com so the
 * CDN picks up the custom tokens when it initialises.
 *
 * Colour palette
 * --------------
 *   primary        #6D28D9  – main violet
 *   primary-light  #7C3AED  – hover shade
 *   accent         #A78BFA  – soft lilac for icons / labels
 *   surface        #F5F3FF  – tinted off-white background chips
 */

tailwind = {
  config: {
    theme: {
      extend: {

        /* ── Brand colours ── */
        colors: {
          primary:         '#6D28D9',
          'primary-light': '#7C3AED',
          accent:          '#A78BFA',
          surface:         '#F5F3FF',
        },

        /* ── Typography ── */
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },

        /* ── Named animations ── */
        animation: {
          'fade-up':         'fadeUp 0.7s ease both',
          'fade-up-delay':   'fadeUp 0.7s ease 0.2s both',
          'fade-up-delay-2': 'fadeUp 0.7s ease 0.4s both',
          'fade-up-delay-3': 'fadeUp 0.7s ease 0.6s both',
          blob:              'blob 8s infinite',
        },

        /* ── Keyframe definitions ── */
        keyframes: {
          fadeUp: {
            '0%':   { opacity: '0', transform: 'translateY(24px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          blob: {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%':      { transform: 'translate(20px, -20px) scale(1.05)' },
            '66%':      { transform: 'translate(-15px, 15px) scale(0.95)' },
          },
        },

      },
    },
  },
};
