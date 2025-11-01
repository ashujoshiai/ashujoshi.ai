// interactions & small animations
document.getElementById('year')?.textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
navToggle?.addEventListener('click', () => {
  document.querySelector('.nav')?.classList.toggle('open');
  navToggle.textContent = navToggle.textContent === '☰' ? '✕' : '☰';
});

// Intersection reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.section, .reel-card, .service-card, .glass').forEach(el => io.observe(el));

// contact form -> open mail client
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const to = 'ashujoshi1711@gmail.com';
  const subject = encodeURIComponent(`Website contact from ${name || 'Website visitor'}`);
  const body = encodeURIComponent(message + "\n\n-- Sent from ashujoshi.github.io");
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

// copy email
function copyEmail(){
  const email = 'ashujoshi1711@gmail.com';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => alert('Email copied to clipboard!'));
  } else {
    prompt('Copy this email:', email);
  }
}

// open instagram quick
function openIG(){ window.open('https://instagram.com/ashujoshi.ai', '_blank'); }

// animate skill bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.bar-fill').forEach(el => {
    const w = getComputedStyle(el).getPropertyValue('--w') || '50%';
    el.style.width = w;
  });
});
