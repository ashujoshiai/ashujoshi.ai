// script.js — small interactions & animations
document.getElementById('year').textContent = new Date().getFullYear();

// Simple Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.section, .work-card, .profile-card, .card-glass').forEach(el => observer.observe(el));

// Contact form handler — opens default mail client with prefilled subject/body
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const mail = 'ashujoshi1711@gmail.com';
  const subject = encodeURIComponent(`Website contact from ${name}`);
  const body = encodeURIComponent(message + "\n\n-- Sent from portfolio site");
  const mailto = `mailto:${mail}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
}

// copy email quick action
function copyEmail(){
  const email = 'ashujoshi1711@gmail.com';
  navigator.clipboard?.writeText(email).then(() => {
    alert('Email copied to clipboard — paste it in Instagram DM or email client.');
  }, () => {
    prompt('Copy this email:', email);
  });
}
