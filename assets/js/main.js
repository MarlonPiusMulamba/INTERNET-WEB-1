/* main.js — Dept of Computing & Informatics */

// Active nav link highlight
document.addEventListener('DOMContentLoaded', function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

  // Member tab switcher
  document.querySelectorAll('.member-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.tab;
      document.querySelectorAll('.member-tab').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.member-panel').forEach(function (p) { p.style.display = 'none'; });
      btn.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.style.display = 'block';
    });
  });

  // Registration form submit
  var regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Registration submitted successfully!');
      regForm.reset();
    });
  }

  // Contact form submit
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Message sent! We will get back to you soon.');
      contactForm.reset();
    });
  }
});

function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(function () { toast.style.display = 'none'; }, 3000);
}
