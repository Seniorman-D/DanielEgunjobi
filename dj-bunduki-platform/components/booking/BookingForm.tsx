export default function BookingForm() {
  return (
    <form className="space-y-4 rounded-2xl bg-[#111111] p-6 border border-white/10">
      <input className="w-full rounded-lg bg-black p-3 text-white" placeholder="Full Name" />
      <input className="w-full rounded-lg bg-black p-3 text-white" placeholder="Phone Number" />
      <input className="w-full rounded-lg bg-black p-3 text-white" placeholder="Event Type" />
      <input className="w-full rounded-lg bg-black p-3 text-white" placeholder="Event Date" />
      <input className="w-full rounded-lg bg-black p-3 text-white" placeholder="Venue / Location" />
      <textarea className="w-full rounded-lg bg-black p-3 text-white" placeholder="Message" />
      <button className="rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black">
        Request Booking
      </button>
    </form>
  );
}
