/**
 * ═══════════════════════════════════════════════════════════
 *  app.js — Configuraciones adicionales con jQuery
 *  Psicología Clínica — Salomé Argoti
 *
 *  Responsabilidades:
 *    • Mejoras interactivas con jQuery
 *    • Efecto ripple en botones CTA
 *    • Animación de escritura en el hero (typewriter sutil)
 *    • Modal de contacto (stub preparado)
 *    • Utilidad: throttle para eventos scroll/resize
 * ═══════════════════════════════════════════════════════════ */

(function ($) {
  'use strict';

  $(document).ready(function () {

    /* ═══════════════════════════════════════════════════════
       UTILIDAD: Throttle
       ═══════════════════════════════════════════════════════ */
    function throttle(fn, wait) {
      var lastTime = 0;
      return function () {
        var now = Date.now();
        if (now - lastTime >= wait) {
          lastTime = now;
          fn.apply(this, arguments);
        }
      };
    }

    /* ═══════════════════════════════════════════════════════
       1. RIPPLE EFFECT en botones CTA
       ═══════════════════════════════════════════════════════ */
    $('.contact-cta, .nav-cta, .btn-404--primary').on('click', function (e) {
      var $btn  = $(this);
      var ripple = $('<span class="ripple-effect"></span>');
      var btnOffset = $btn.offset();
      var x = e.pageX - btnOffset.left;
      var y = e.pageY - btnOffset.top;

      ripple.css({
        left : x + 'px',
        top  : y + 'px'
      });

      // Eliminar ripples previos
      $btn.find('.ripple-effect').remove();
      $btn.append(ripple);

      // Estilo inline del ripple (mínimo dependencia de CSS externa)
      ripple.css({
        position       : 'absolute',
        width          : '0',
        height         : '0',
        borderRadius   : '50%',
        background     : 'rgba(232,226,217,.35)',
        transform      : 'translate(-50%,-50%)',
        animation      : 'rippleBurst .6s linear forwards',
        pointerEvents  : 'none',
        zIndex         : '10'
      });

      // Auto-eliminar tras animación
      setTimeout(function () { ripple.remove(); }, 620);
    });

    /* Keyframes del ripple (se inyecta una vez) */
    if (!$('#ripple-keyframes').length) {
      $('head').append(
        '<style id="ripple-keyframes">' +
        '@keyframes rippleBurst {' +
        '  0%   { width:0; height:0; opacity:1; }' +
        '  100% { width:140px; height:140px; opacity:0; }' +
        '}</style>'
      );
    }

    /* ═══════════════════════════════════════════════════════
       2. HOVER STATE ENHANCED en pilares
       Agrega una pequeña línea inferior animada
       ═══════════════════════════════════════════════════════ */
    $('.pillar').each(function () {
      var $pillar = $(this);
      // Solo agregar la línea si no existe
      if (!$pillar.find('.pillar-line').length) {
        $pillar.append('<div class="pillar-line"></div>');
      }
    });

    // Inyectar estilo pillar-line una vez
    if (!$('#pillar-line-styles').length) {
      $('head').append(
        '<style id="pillar-line-styles">' +
        '.pillar-line {' +
        '  position:absolute;' +
        '  bottom:0; left:40px; right:40px;' +
        '  height:1px;' +
        '  background:linear-gradient(90deg, transparent, #c4a46b, transparent);' +
        '  opacity:0;' +
        '  transition:opacity .4s;' +
        '}' +
        '.pillar:hover .pillar-line { opacity:.5; }' +
        '</style>'
      );
    }

    /* ═══════════════════════════════════════════════════════
       3. COUNTER ANIMADO (si futuro uso)
       Ejemplo preparado: anima números al llegar al viewport
       ═══════════════════════════════════════════════════════ */
    function animateNumber($el, target, duration) {
      var start   = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Easing out
        var eased = 1 - Math.pow(1 - progress, 3);
        $el.text(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    // Uso: animateNumber($('#mi-contador'), 2500, 1800);

    /* ═══════════════════════════════════════════════════════
       4. MODAL CONTACTO (stub — preparado para expansión)
       Activa si existe .modal-contact en el DOM
       ═══════════════════════════════════════════════════════ */
    var $modalTrigger = $('.js-modal-open');
    var $modal        = $('.modal-contact');
    var $modalClose   = $('.modal-contact .modal-close');

    if ($modal.length) {
      $modalTrigger.on('click', function (e) {
        e.preventDefault();
        $modal.addClass('open');
        $('body').addClass('modal-open');
      });

      $modalClose.on('click', function () {
        $modal.removeClass('open');
        $('body').removeClass('modal-open');
      });

      // Cerrar al dar clic fuera del contenido
      $modal.on('click', function (e) {
        if ($(e.target).is($modal)) {
          $modal.removeClass('open');
          $('body').removeClass('modal-open');
        }
      });

      // Cerrar con ESC
      $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $modal.hasClass('open')) {
          $modal.removeClass('open');
          $('body').removeClass('modal-open');
        }
      });
    }

    /* ═══════════════════════════════════════════════════════
       5. RESIZE HANDLER (throttled)
       Ajusta elemento dinámicos si es necesario
       ═══════════════════════════════════════════════════════ */
    var onResize = throttle(function () {
      // Ejemplo: recalcular alturas si hace falta
      // Actualmente sin uso — disponible para extensiones
    }, 150);

    $(window).on('resize', onResize);

  }); // end document.ready
})(jQuery);
