document.querySelectorAll('img[src*="luo-ancestral-logo.jpg"]').forEach(img=>img.src='/assets/luo-ancestral-logo.svg');
const fallbackProducts=[
{name:'Body Cleansing',slug:'body-cleansing',category:'Body Cleansing',desc:'Traditional herbal preparation presented around cleansing, detox, renewal and restorative wellness practices.',sprite:0},
{name:'Digestive Health',slug:'digestive-health',category:'Digestive Health',desc:'Traditional herbal preparation presented around digestive balance, cleansing, nourishment and restorative wellness.',sprite:1},
{name:'Removal of Majini',slug:'removal-of-majini',category:'Spiritual & Traditional Preparation',desc:'Traditional preparation presented within spiritual and ancestral practices associated with protection, freedom, peace and cultural ritual.',sprite:2},
{name:'Memory Boost',slug:'memory-boost',category:'Mind & Learning',desc:'Traditional herbal preparation presented for children and adults around focus, clarity, learning, memory and mental wellness.',sprite:3},
{name:'Weight Loss',slug:'weight-loss',category:'Weight Management',desc:'Traditional herbal preparation presented as slimming support for healthy weight management, metabolism, digestion and wellness.',sprite:4},
{name:'Business Attraction',slug:'business-attraction',category:'Prosperity & Growth',desc:'Traditional herbal preparation presented around opportunity, business protection, prosperity, growth and stability.',sprite:5},
{name:'Land Issues',slug:'land-issues',category:'Land & Heritage',desc:'Traditional herbal preparation presented around land disputes, ownership, boundaries, cleansing, peace and harmony.',sprite:0},
{name:'Court Cases',slug:'court-cases',category:'Justice & Protection',desc:'Traditional herbal preparation presented around clarity, justice, protection and cultural spiritual practices.',sprite:1},
{name:'Man Power',slug:'man-power',category:'Men’s Traditional Preparation',desc:'Traditional herbal vitality blend presented around male vitality, strength, stamina and reproductive wellness.',sprite:2},
{name:'Fibroids Support',slug:'fibroids-support',category:'Women’s Traditional Preparation',desc:'Traditional herbal preparation presented around womb wellness, feminine balance and reproductive well-being.',sprite:3}
];
let products=[];
let cart=JSON.parse(localStorage.getItem('luoCart')||'[]');
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function money(n){return n==null?'Price on request':`KSh ${Number(n).toLocaleString()}`}
function spriteStyle(i){const x=(Number(i)%3)*50,y=Math.floor(Number(i)/3)*100;return `height:215px;border-radius:9px;background-image:url('/images/product-sprite.jpg');background-size:300% 200%;background-position:${x}% ${y}%;background-repeat:no-repeat;box-shadow:inset 0 0 0 1px #e8dcc9,0 8px 18px #2d160f12`}
function renderProducts(){const el=$('#shopGrid');if(!el)return;el.innerHTML=products.map((p,i)=>`<article class="product"><div class="real-product-media" style="${spriteStyle(p.sprite??i%6)}" role="img" aria-label="${p.name} product image"></div><span class="product-category">${p.category||'Traditional Preparation'}</span><h3>${p.name}</h3><small>${p.desc||p.description||''}</small><span class="price">${money(p.price)}</span><button class="btn primary add" data-i="${i}">🛒 ${p.price==null?'Add to Enquiry':'Add to Cart'}</button></article>`).join('')}
function renderCart(){const items=$('#cartItems');if(!items)return;$('#cartCount').textContent=cart.reduce((a,x)=>a+x.qty,0);if(!cart.length){items.innerHTML='<p style="color:#76685c;font-size:13px">Your enquiry list is empty. Explore our traditional collection.</p>'}else{items.innerHTML=cart.map((x,i)=>`<div class="drawer-item"><div><b>${x.name}</b><br><small>${x.qty} × ${money(x.price)}</small></div><button data-remove="${i}" style="border:0;background:none;cursor:pointer">×</button></div>`).join('')}const total=cart.reduce((a,x)=>a+(x.price==null?0:Number(x.price)*x.qty),0);$('#cartTotal').textContent=cart.length&&cart.some(x=>x.price==null)?'Price on request':money(total);localStorage.setItem('luoCart',JSON.stringify(cart))}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#overlay').classList.add('open')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#overlay').classList.remove('open')}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2500)}
async function loadProducts(){try{const r=await fetch('/.netlify/functions/products');if(!r.ok)throw new Error('Catalogue unavailable');const d=await r.json();products=(d.products||[]).map((p,i)=>({...p,sprite:i%6}));if(!products.length)products=fallbackProducts}catch(e){products=fallbackProducts}renderProducts();renderCart()}
loadProducts();
$('#shopGrid').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(!b)return;const p=products[+b.dataset.i], found=cart.find(x=>x.slug===p.slug);found?found.qty++:cart.push({...p,qty:1});renderCart();toast(`${p.name} added to your ${p.price==null?'enquiry list':'cart'}`)});
$('#cartItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(!b)return;cart.splice(+b.dataset.remove,1);renderCart()});
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=closeCart;
$('#accountBtn').onclick=()=>toast('Customer accounts will be available soon.');
$('#searchBtn').onclick=()=>{const q=prompt('Search Luo Ancestral Covenant');if(q)toast(`Search for “${q}” — catalogue search is being expanded.`)};
$('#menuBtn').onclick=()=>$('#navLinks').classList.toggle('open');
$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));
const slides=[...$$('.slide')],dots=$('#dots');let current=0,timer;
slides.forEach((_,i)=>{const d=document.createElement('button');d.setAttribute('aria-label',`Go to slide ${i+1}`);d.onclick=()=>go(i);dots.appendChild(d)});
function go(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===current));clearInterval(timer);timer=setInterval(()=>go(current+1),7000)}
$('#prev').onclick=()=>go(current-1);$('#next').onclick=()=>go(current+1);go(0);
$('#newsletterForm').onsubmit=e=>{e.preventDefault();toast('Thank you for joining the Covenant community.');e.target.reset()};
$('#contactForm').onsubmit=e=>{e.preventDefault();toast('Thank you. Your message has been received.');e.target.reset()};
