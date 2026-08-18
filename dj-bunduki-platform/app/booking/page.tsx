import BookingForm from '@/components/booking/BookingForm';

export default function BookingPage(){
  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-bold text-[#D4AF37]">Book DJ Bunduki</h1>
        <p className="mt-4 text-gray-300">
          The Champion of Sound. Available for clubs, weddings, corporate events and festivals.
        </p>
      </section>
      <BookingForm />
    </main>
  );
}
