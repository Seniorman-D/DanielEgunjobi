document.querySelectorAll('img[src*="luo-ancestral-logo.jpg"]').forEach(img=>img.src='/assets/luo-ancestral-logo.svg');
const products=[
{name:'Man Power Blend',category:'Men’s Traditional Preparation',desc:'Herbal & spiritual preparation presented for traditional men’s vitality, strength and ancestral wellness practices.',sprite:0},
{name:'Court Case Blend',category:'Protection & Justice',desc:'Herbal & spiritual preparation presented within traditional practices associated with protection, justice and favourable outcomes.',sprite:1},
{name:'Feminine Health',category:'Women’s Traditional Preparation',desc:'Herbal & spiritual preparation presented around feminine wellness, reproductive heritage and traditional women’s care.',sprite:2},
{name:'Business Attraction',category:'Prosperity & Growth',desc:'Traditional herbal & spiritual preparation presented around prosperity, opportunity, business growth and abundance.',sprite:3},
{name:'Summoning of Ancestors',category:'Ancestral Connection',desc:'Traditional preparation associated with ancestral connection, cultural ceremony and honouring the lineage.',sprite:4},
{name:'Land & Home Protection',category:'Home & Heritage',desc:'Herbal & spiritual preparation presented around traditional concepts of land, home, family and protection.',sprite:5}
];
let cart=JSON.parse(localStorage.getItem('luoCart')||'[]');
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function money(n){return n==null?'Price on request':`KSh ${n.toLocaleString()}`}
function spriteStyle(i){const x=(i%3)*50,y=Math.floor(i/3)*100;return `height:215px;border-radius:9px;background-image:url('/images/product-sprite.jpg');background-size:300% 200%;background-position:${x}% ${y}%;background-repeat:no-repeat;box-shadow:inset 0 0 0 1px #e8dcc9,0 8px 18px #2d160f12`}
function renderProducts(){const el=$('#shopGrid');el.innerHTML=products.map((p,i)=>`<article class="product"><div class="real-product-media" style="${spriteStyle(p.sprite)}" role="img" aria-label="${p.name} product image"></div><span class="product-category">${p.category}</span><h3>${p.name}</h3><small>${p.desc}</small><span class="price">Price on request</span><button class="btn primary add" data-i="${i}">🛒 Add to Enquiry</button></article>`).join('')}
function renderCart(){const items=$('#cartItems');$('#cartCount').textContent=cart.reduce((a,x)=>a+x.qty,0);if(!cart.length){items.innerHTML='<p style="color:#76685c;font-size:13px">Your enquiry list is empty. Explore our traditional collection.</p>'}else{items.innerHTML=cart.map((x,i)=>`<div class="drawer-item"><div><b>${x.name}</b><br><small>${x.qty} × Price on request</small></div><button data-remove="${i}" style="border:0;background:none;cursor:pointer">×</button></div>`).join('')}$('#cartTotal').textContent=cart.length?'Price on request':'KSh 0';localStorage.setItem('luoCart',JSON.stringify(cart))}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#overlay').classList.add('open')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#overlay').classList.remove('open')}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2500)}
renderProducts();renderCart();
$('#shopGrid').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(!b)return;const p=products[+b.dataset.i], found=cart.find(x=>x.name===p.name);found?found.qty++:cart.push({...p,qty:1});renderCart();toast(`${p.name} added to your enquiry list`)});
$('#cartItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(!b)return;cart.splice(+b.dataset.remove,1);renderCart()});
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=closeCart;
$('#checkout').onclick=()=>{if(!cart.length)return toast('Add a product to your enquiry list');toast('Your enquiry list is ready. Contact the Covenant team for availability, pricing and ordering.');};
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
