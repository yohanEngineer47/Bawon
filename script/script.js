// for switch laguages
const toggle = document.querySelector('.lang-toggle');
const menu = document.getElementById('lang-menu');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  if(open){
    menu.hidden = true;
  } else {
    menu.hidden = false;
    menu.querySelector('button').focus();
  }
});

document.addEventListener('click', (e) => {
  if(!document.querySelector('.lang-switch').contains(e.target)){
    toggle.setAttribute('aria-expanded','false');
    menu.hidden = true;
  }
});

menu.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if(!btn) return;
  const lang = btn.dataset.lang;
  toggle.textContent = lang.toUpperCase();
  // ici: appliquer changement de langue (rediriger ou stocker préférence)
  menu.hidden = true;
  toggle.setAttribute('aria-expanded','false');
});
 
//for many images

(function(){
  const stack = document.querySelector('.img-stack');
  if(!stack) return;
  const imgs = Array.from(stack.querySelectorAll('img'));
  let i = 0;
  const delay = 2500; // ms par image

  function show(next){
    imgs.forEach((img, idx) => img.classList.toggle('active', idx === next));
  }

  setInterval(() => {
    i = (i + 1) % imgs.length;
    show(i);
  }, delay);
})();

 // Smooth scroll for anchors (if any)
    document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth'});
      });
    });

    function submitForm(e){
      e.preventDefault();
      const name = document.getElementById('name').value || '—';
      alert('Merci ' + name + ' — message envoyé (simulation).');
      e.target.reset();
    }

    // Decorative subtle fog animation
    const fog = document.querySelector('.fog');
    if(fog){
      let t = 0;
      function animateFog(){
        t += 0.005;
        fog.style.transform = 'translateX(' + Math.sin(t)*40 + 'px) translateY(' + Math.cos(t/1.5)*12 + 'px)';
        requestAnimationFrame(animateFog);
      }
      animateFog();
    }

    // Chat button simple handler
    document.querySelector('.chat-btn').addEventListener('click',()=>{
      alert('Chat simulé — ici vous pourriez intégrer un widget de chat.');
    });

    // Insert Google Maps iframe in the contact map area
    (function addMap(){
      var map = document.getElementById('map');
      if(!map) return;
      var iframe = document.createElement('iframe');
      iframe.style.width='100%';
      iframe.style.height='100%';
      iframe.style.border='0';
      iframe.loading='lazy';
      iframe.referrerPolicy='no-referrer-when-downgrade';
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292915674412!3d48.85837307928716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fef00000001%3A0x0!2zNDjCsDUxJzQ1LjAiTiAywrAxNyc0OC4wIlc!5e0!3m2!1sfr!2sfr!4v1610000000000!5m2!1sfr!2sfr";
      map.innerHTML='';
      map.appendChild(iframe);
    })();