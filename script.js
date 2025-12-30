// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(toggle){
  toggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
  });
}
// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=>{
    navLinks.classList.remove('show');
  });
});
// Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
// Signup form validation (simple)
const form = document.getElementById('signup-form');
const msg = document.getElementById('form-msg');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!name||!email||!message){
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = '#f97316';
      return;
    }
    if(!emailRe.test(email)){
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#f97316';
      return;
    }
    // Simulate submit
    msg.textContent = 'Thanks! Your message has been sent.';
    msg.style.color = '#10b981';
    form.reset();
  });
}
