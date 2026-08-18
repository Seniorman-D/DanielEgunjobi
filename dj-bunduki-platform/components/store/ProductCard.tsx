export default function ProductCard({ product }: { product: any }) {
  const message = encodeURIComponent(`Hello DJ Bunduki Team, I would like to order ${product.name}`);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-5">
        <h3 className="text-white font-bold">{product.name}</h3>
        <p className="text-gray-400">{product.price}</p>
        <a className="mt-4 inline-block rounded-full bg-[#D4AF37] px-5 py-3 text-black font-bold" href={`https://wa.me/254720947480?text=${message}`}>
          Order Via WhatsApp
        </a>
      </div>
    </div>
  );
}
