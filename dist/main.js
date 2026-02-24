const paystackUrl = document.querySelector('meta[name="paystack-url"]')?.content;
document.querySelectorAll('#preorder-hero, #paystack-book').forEach((el) => {
  el.href = paystackUrl && !paystackUrl.includes('__PAYSTACK') ? paystackUrl : 'https://paystack.com/pay/kleptocracy';
});

const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:0.15});
document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));

const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !heroBg) return;
  heroBg.style.transform = `translate3d(0, ${window.scrollY * 0.08}px, 0)`;
}, { passive: true });

const launchDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 42);
const c = document.getElementById('countdown');
setInterval(()=>{
  const d = launchDate - new Date();
  if (d < 0) return c.textContent = 'Now available for pre-order';
  const days = Math.floor(d / (1000*60*60*24));
  const hours = Math.floor((d / (1000*60*60)) % 24);
  c.textContent = `Pre-order window closes in ${days}d ${hours}h`;
},1000);

let i = 0;
const testimonials = [...document.querySelectorAll('.testimonial')];
setInterval(()=>{testimonials[i].classList.remove('active');i=(i+1)%testimonials.length;testimonials[i].classList.add('active')},4000);

const modal = document.getElementById('speak-modal');
['book-speaking','speaking-cta'].forEach((id)=>document.getElementById(id)?.addEventListener('click',()=>modal?.showModal()));

const params = new URLSearchParams(window.location.search);
if (params.get('success') === 'true') {
  document.getElementById('success-message')?.removeAttribute('hidden');
}
