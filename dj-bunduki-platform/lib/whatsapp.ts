const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "254720947480";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createBookingMessage() {
  return createWhatsAppLink(
    "Hello DJ Bunduki Team, I would like to make a booking inquiry."
  );
}

export function createOrderMessage(product: string) {
  return createWhatsAppLink(
    `Hello DJ Bunduki Team, I would like to order: ${product}`
  );
}
