/**
 * ═══════════════════════════════════════════════════════════
 *  script.js — JavaScript principal
 *  Psicología Clínica — Salomé Argoti
 *
 *  Responsabilidades:
 *    • Scroll Reveal (IntersectionObserver)
 *    • Navbar: estado "scrolled" + links activos
 *    • Menú móvil hamburger
 *    • Smooth scroll para anchors internos
 *    • Scroll-hint ocultar tras primer scroll
 * ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Esperar DOM listo ─────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {

    /* ─── REFS ──────────────────────────────────────────── */
    const nav            = document.querySelector('nav');
    const hamburger      = document.querySelector('.nav-hamburger');
    const mobileOverlay  = document.querySelector('.nav-mobile-overlay');
    const mobileClose    = document.querySelector('.mobile-close');
    const scrollHint     = document.querySelector('.scroll-hint');
    const navLinks       = document.querySelectorAll('.nav-links a');
    const sections       = document.querySelectorAll('section[id]');

    /* ═══════════════════════════════════════════════════════
       1. SCROLL REVEAL
       ═══════════════════════════════════════════════════════ */
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold  : 0.15,
      rootMargin : '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });

    /* ═══════════════════════════════════════════════════════
       2. NAVBAR — class "scrolled" al hacer scroll
       ═══════════════════════════════════════════════════════ */
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
      const currentY = window.scrollY;

      // Agregar clase scrolled si pasamos de 60px
      if (currentY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScrollY = currentY;
    }, { passive: true });

    /* ═══════════════════════════════════════════════════════
       3. NAV LINKS ACTIVOS (scroll spy)
       ═══════════════════════════════════════════════════════ */
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Quitar "active" de todos
          navLinks.forEach(function (link) {
            link.classList.remove('active');
          });
          // Buscar link que coincida con el id
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, {
      rootMargin : '-40% 0px -50% 0px'
    });

    sections.forEach(function (sec) {
      sectionObserver.observe(sec);
    });

    /* ═══════════════════════════════════════════════════════
       4. MENÚ MÓVIL — hamburger toggle
       ═══════════════════════════════════════════════════════ */
    if (hamburger && mobileOverlay) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        // Bloquear scroll del body
        document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
      });

      // Cerrar al hacer clic en overlay (fuera de links)
      mobileOverlay.addEventListener('click', function (e) {
        if (e.target === mobileOverlay) {
          hamburger.classList.remove('open');
          mobileOverlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });

      // Cerrar al hacer clic en un link del overlay
      mobileOverlay.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('open');
          mobileOverlay.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    /* ═══════════════════════════════════════════════════════
       5. SMOOTH SCROLL para anchors internos (#)
       ═══════════════════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Si es solo "#" no hacer nada especial
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 68;
        const rect      = target.getBoundingClientRect();
        const scrollTo  = rect.top + window.scrollY - navHeight;

        window.scrollTo({
          top      : scrollTo,
          behavior : 'smooth'
        });
      });
    });

    /* ═══════════════════════════════════════════════════════
       6. SCROLL HINT — desaparece al primer scroll
       ═══════════════════════════════════════════════════════ */
    if (scrollHint) {
      let hintHidden = false;
      window.addEventListener('scroll', function () {
        if (!hintHidden && window.scrollY > 80) {
          scrollHint.style.transition = 'opacity .6s, transform .6s';
          scrollHint.style.opacity    = '0';
          scrollHint.style.transform  = 'translateX(-50%) translateY(12px)';
          hintHidden = true;
        }
      }, { passive: true });
    }

  }); // end DOMContentLoaded
})();
