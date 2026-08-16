(() => {
  const slugMap = {
    'Body Cleansing':'body-cleansing','Digestive Health':'digestive-health','Removal of Majini':'removal-of-majini','Memory Boost':'memory-boost','Weight Loss':'weight-loss','Business Attraction':'business-attraction','Land Issues':'land-issues','Court Cases':'court-cases','Man Power':'man-power','Fibroids Support':'fibroids-support'
  };
  const style = document.createElement('style');
  style.textContent = `.checkout-modal{position:fixed;inset:0;background:#1b0c088c;z-index:9999;display:none;align-items:center;justify-content:center;padding:18px}.checkout-modal.open{display:flex}.checkout-card{background:#fff;max-width:620px;width:100%;max-height:90vh;overflow:auto;border-radius:18px;padding:26px;box-shadow:0 30px 80px #0005}.checkout-card h2{margin-top:0}.checkout-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.checkout-grid .wide{grid-column:1/-1}.checkout-card input,.checkout-card textarea{width:100%;box-sizing:border-box;padding:12px;border:1px solid #d8c8b5;border-radius:8px;margin-top:6px}.checkout-card label{font-size:13px;font-weight:600;color:#4c3428}.checkout-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:18px}.checkout-summary{background:#faf6f0;border:1px solid #eadcc9;padding:14px;border-radius:10px;margin:15px 0}.checkout-error{color:#9d241d;margin-top:10px}.checkout-note{color:#6b5a4d;font-size:13px}@media(max-width:600px){.checkout-grid{grid-template-columns:1fr}.checkout-grid .wide{grid-column:auto}}`;
  document.head.appendChild(style);
  const modal = document.createElement('div');
  modal.className = 'checkout-modal';
  modal.innerHTML = `<div class="checkout-card" role="dialog" aria-modal="true"><div style="display:flex;justify-content:space-between;gap:15px"><div><span class="eyebrow">SECURE CHECKOUT</span><h2>Complete Your Order</h2></div><button id="checkoutClose" style="border:0;background:none;font-size:28px;cursor:pointer">×</button></div><div id="checkoutSummary" class="checkout-summary"></div><form id="checkoutForm"><div class="checkout-grid"><label>Name<input name="name" required autocomplete="name"></label><label>WhatsApp / Phone<input name="phone" required autocomplete="tel"></label><label>Email<input name="email" type="email" autocomplete="email"></label><label>Delivery location<input name="address" required autocomplete="street-address"></label><label class="wide">Additional notes<textarea name="notes" rows="3" placeholder="Delivery instructions or questions"></textarea></label></div><p class="checkout-note">Your information is used to process the order and arrange delivery. Payment details are handled by the payment provider.</p><div id="checkoutError" class="checkout-error"></div><div class="checkout-actions"><button type="button" id="checkoutCancel" class="btn secondary">Cancel</button><button type="submit" class="btn primary" id="checkoutSubmit">Place Order</button></div></form></div>`;
  document.body.appendChild(modal);
  const readCart = () => JSON.parse(localStorage.getItem('luoCart') || '[]');
  const summary = () => {
    const cart = readCart();
    $('#checkoutSummary').innerHTML = cart.length ? cart.map(x => `<div style="display:flex;justify-content:space-between;gap:12px;margin:5px 0"><span>${x.name} × ${x.qty}</span><strong>${x.price == null ? 'Price on request' : `KSh ${Number(x.price).toLocaleString()}`}</strong></div>`).join('') : '<p>Your enquiry list is empty.</p>';
  };
  const open = () => { if (!readCart().length) return; summary(); modal.classList.add('open'); };
  const close = () => modal.classList.remove('open');
  window.addEventListener('load', () => {
    const checkout = document.querySelector('#checkout');
    if (checkout) checkout.onclick = open;
    document.querySelector('#checkoutClose').onclick = close;
    document.querySelector('#checkoutCancel').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.querySelector('#checkoutForm').onsubmit = async e => {
      e.preventDefault();
      const cart = readCart();
      if (!cart.length) return close();
      const form = new FormData(e.target);
      const customer = Object.fromEntries(form.entries());
      const items = cart.map(x => ({ slug: slugMap[x.name] || x.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''), quantity: x.qty }));
      const button = document.querySelector('#checkoutSubmit');
      const error = document.querySelector('#checkoutError');
      button.disabled = true; button.textContent = 'Processing…'; error.textContent = '';
      try {
        const response = await fetch('/.netlify/functions/create-order', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ customer, items }) });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Unable to create order.');
        localStorage.removeItem('luoCart');
        if (data.payment_available) {
          const pay = await fetch('/.netlify/functions/create-payment', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ order_id:data.order.id }) });
          const payment = await pay.json();
          if (!pay.ok) throw new Error(payment.error || 'Order created, but payment could not be started.');
          window.location.href = payment.redirect_url;
          return;
        }
        close();
        alert(`Thank you. Your order ${data.order.order_number} has been received. The Covenant team will contact you with pricing and delivery details.`);
        if (typeof renderCart === 'function') renderCart();
      } catch (err) { error.textContent = err.message; button.disabled = false; button.textContent = 'Place Order'; }
    };
  });
})();
