export const STORE_WHATSAPP = "254720947480";

export function createOrderMessage(product: string, quantity = 1) {
  return `Hello DJ Bunduki Team,

I would like to order:

Product: ${product}
Quantity: ${quantity}

Please share payment and delivery details.`;
}

export function orderWhatsAppUrl(message: string) {
  return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
