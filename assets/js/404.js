/**
 * ═══════════════════════════════════════════════════════════
 *  404.js — JavaScript exclusivo para la página 404
 *  Psicología Clínica — Salomé Argoti
 *
 *  Responsabilidades:
 *    • Partículas flotantes (canvas ligero)
 *    • Contador de auto-redireccionamiento (opcional)
 *    • Parallax sutil en los círculos de fondo al mover ratón
 * ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ═══════════════════════════════════════════════════════
       1. PARTÍCULAS FLOTANTES (Canvas ligero)
       ═══════════════════════════════════════════════════════ */
    var canvas  = document.getElementById('particles-canvas');
    if (canvas) {
      var ctx    = canvas.getContext('2d');
      var particles = [];
      var W, H;

      function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      /* Crear partícula */
      function createParticle() {
        return {
          x      : Math.random() * W,
          y      : Math.random() * H,
          radius : Math.random() * 1.8 + 0.4,
          speedX : (Math.random() - 0.5) * 0.3,
          speedY : (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.35 + 0.08
        };
      }

      // Inicializar partículas
      for (var i = 0; i < 55; i++) {
        particles.push(createParticle());
      }

      /* Eje de conexión entre partículas cercanas */
      function drawConnections() {
        for (var a = 0; a < particles.length; a++) {
          for (var b = a + 1; b < particles.length; b++) {
            var dx = particles[a].x - particles[b].x;
            var dy = particles[a].y - particles[b].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.strokeStyle = 'rgba(196,164,107,' + (0.08 * (1 - dist / 120)) + ')';
              ctx.lineWidth   = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      /* Loop de animación */
      function animate() {
        ctx.clearRect(0, 0, W, H);

        particles.forEach(function (p) {
          // Mover
          p.x += p.speedX;
          p.y += p.speedY;

          // Rebotar en bordes
          if (p.x < 0 || p.x > W) p.speedX *= -1;
          if (p.y < 0 || p.y > H) p.speedY *= -1;

          // Dibujar
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(168,159,148,' + p.opacity + ')';
          ctx.fill();
        });

        drawConnections();
        requestAnimationFrame(animate);
      }
      animate();
    }

    /* ═══════════════════════════════════════════════════════
       2. PARALLAX en círculos de fondo (mouse move)
       ═══════════════════════════════════════════════════════ */
    var circles = document.querySelectorAll('.bg-circle');

    if (circles.length) {
      document.addEventListener('mousemove', function (e) {
        var cx = window.innerWidth  / 2;
        var cy = window.innerHeight / 2;
        var dx = (e.clientX - cx) / cx; // -1 a 1
        var dy = (e.clientY - cy) / cy;

        circles.forEach(function (circle, i) {
          var factor = (i + 1) * 2.5; // cada círculo se mueve un poco más
          circle.style.transform = 'translate(' + (dx * factor) + 'px, ' + (dy * factor) + 'px)';
        });
      });
    }

    /* ═══════════════════════════════════════════════════════
       3. AUTO-REDIRECT COUNTDOWN (opcional)
       Si existe un elemento .countdown-number en el DOM,
       cuenta regresiva y redirige a index.html
       ═══════════════════════════════════════════════════════ */
    var countdownEl = document.querySelector('.countdown-number');
    if (countdownEl) {
      var seconds = 10; // segundos antes de redirigir
      countdownEl.textContent = seconds;

      var timer = setInterval(function () {
        seconds--;
        if (seconds <= 0) {
          clearInterval(timer);
          countdownEl.textContent = '→';
          window.location.href = 'index.html';
        } else {
          countdownEl.textContent = seconds;
        }
      }, 1000);
    }

    /* ═══════════════════════════════════════════════════════
       4. EFECTO HOVER en el número 404
       Pequeña distorsión al pasar el ratón
       ═══════════════════════════════════════════════════════ */
    var num404 = document.querySelector('.number-404');
    if (num404) {
      num404.addEventListener('mousemove', function (e) {
        var rect   = this.getBoundingClientRect();
        var x      = e.clientX - rect.left;
        var y      = e.clientY - rect.top;
        var rotX   = (y / rect.height - 0.5) * 4;  // grados
        var rotY   = (x / rect.width  - 0.5) * -4;

        this.style.transform = 'perspective(600px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        this.style.transition = 'none';
      });

      num404.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
        this.style.transition = 'transform .4s cubic-bezier(.22,1,.36,1)';
      });
    }

  }); // end DOMContentLoaded
})();
