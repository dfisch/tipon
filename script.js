const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

// FormSubmit uses its own confirmation step the first time the address is used.
// Remove the empty _next field so its default thank-you page is shown after submission.
document.querySelectorAll('form[action*="formsubmit.co"]').forEach(form => {
  const next = form.querySelector('input[name="_next"]');
  if (next && !next.value) next.remove();
});
