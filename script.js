// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections on scroll
const revealables = document.querySelectorAll('.section .container, .card, .steps li');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealables.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

// Contact form: validates, then opens the visitor's email app with the message.
// TODO: swap for a form service (Formspree, Netlify Forms, etc.) to receive submissions directly.
const CONTACT_EMAIL = 'info@kellyeducationalconsulting.com';
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in your name, a valid email, and a message.';
    status.classList.add('error');
    form.querySelector(':invalid').focus();
    return;
  }
  const d = new FormData(form);
  const subject = `Website inquiry from ${d.get('name')} (${d.get('role')})`;
  const body = `${d.get('message')}\n\n— ${d.get('name')}\n${d.get('email')}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.classList.remove('error');
  status.textContent = 'Thanks! Your email app should open with your message ready to send.';
  form.reset();
});
