document.querySelectorAll('img[src*="luo-ancestral-logo.jpg"]').forEach(img=>img.src='/assets/luo-ancestral-logo.svg');
const products=[
{name:'Heritage Herbal Blend',price:1800,desc:'Traditional botanical blend presented as part of indigenous herbal knowledge.'},
{name:'Ancestral Wellness Tea',price:1500,desc:'A curated traditional tea blend for everyday cultural wellness rituals.'},
{name:'African Botanical Oil',price:2200,desc:'Plant-based traditional oil for personal and cultural use.'},
{name:'Covenant Herbal Collection',price:3200,desc:'A selection of traditional herbal products from our collection.'}
];
let cart=JSON.parse(localStorage.getItem('luoCart')||'[]');
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function money(n){return `KSh ${n.toLocaleString()}`}
function renderProducts(){const el=$('#shopGrid');el.innerHTML=products.map((p,i)=>`<article class="product"><div class="product-media"></div><h3>${p.name}</h3><div class="rating">★★★★★</div><small>${p.desc}</small><span class="price">${money(p.price)}</span><button class="btn primary add" data-i="${i}">🛒 Add to Cart</button></article>`).join('')}
function renderCart(){const items=$('#cartItems');$('#cartCount').textContent=cart.reduce((a,x)=>a+x.qty,0);if(!cart.length){items.innerHTML='<p style="color:#76685c;font-size:13px">Your cart is empty. Explore our traditional collection.</p>'}else{items.innerHTML=cart.map((x,i)=>`<div class="drawer-item"><div><b>${x.name}</b><br><small>${x.qty} × ${money(x.price)}</small></div><button data-remove="${i}" style="border:0;background:none;cursor:pointer">×</button></div>`).join('')}$('#cartTotal').textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0));localStorage.setItem('luoCart',JSON.stringify(cart))}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#overlay').classList.add('open')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#overlay').classList.remove('open')}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2500)}
renderProducts();renderCart();
$('#shopGrid').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(!b)return;const p=products[+b.dataset.i], found=cart.find(x=>x.name===p.name);found?found.qty++:cart.push({...p,qty:1});renderCart();toast(`${p.name} added to your cart`)});
$('#cartItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(!b)return;cart.splice(+b.dataset.remove,1);renderCart()});
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=closeCart;
$('#checkout').onclick=()=>{if(!cart.length)return toast('Add a product before checkout');toast('Checkout is ready to connect to your preferred payment provider.');};
$('#accountBtn').onclick=()=>toast('Customer accounts will be available soon.');
$('#searchBtn').onclick=()=>{const q=prompt('Search Luo Ancestral Covenant');if(q)toast(`Search for “${q}” — catalogue search coming soon.`)};
$('#menuBtn').onclick=()=>$('#navLinks').classList.toggle('open');
$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));
const slides=[...$$('.slide')],dots=$('#dots');let current=0,timer;
slides.forEach((_,i)=>{const d=document.createElement('button');d.setAttribute('aria-label',`Go to slide ${i+1}`);d.onclick=()=>go(i);dots.appendChild(d)});
function go(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===current));clearInterval(timer);timer=setInterval(()=>go(current+1),7000)}
$('#prev').onclick=()=>go(current-1);$('#next').onclick=()=>go(current+1);go(0);
$('#newsletterForm').onsubmit=e=>{e.preventDefault();toast('Thank you for joining the Covenant community.');e.target.reset()};
$('#contactForm').onsubmit=e=>{e.preventDefault();toast('Thank you. Your message has been received.');e.target.reset()};
