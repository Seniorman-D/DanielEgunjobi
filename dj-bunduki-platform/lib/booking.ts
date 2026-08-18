export const WHATSAPP_NUMBER = "254720947480";

export function createBookingMessage(data: {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  venue: string;
  location: string;
  budget?: string;
  message?: string;
}) {
  return `Hello DJ Bunduki Team,

I would like to book DJ Bunduki.

Name: ${data.name}
Phone: ${data.phone}
Event Type: ${data.eventType}
Date: ${data.date}
Venue: ${data.venue}
Location: ${data.location}
Budget: ${data.budget || "Not specified"}
Message: ${data.message || ""}`;
}

export function bookingWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
