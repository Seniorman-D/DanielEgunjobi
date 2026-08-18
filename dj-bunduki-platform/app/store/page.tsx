import ProductCard from '@/components/store/ProductCard';

const products = [
  {
    name: 'DJ Bunduki Champion T-Shirt',
    price: 'KSh 2,500',
    availability: 'Available',
    image: '/placeholder-product.jpg'
  },
  {
    name: 'DJ Bunduki Premium Hoodie',
    price: 'KSh 4,500',
    availability: 'Available',
    image: '/placeholder-product.jpg'
  }
];

export default function StorePage(){
  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">DJ Bunduki Merchandise</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product,index)=>(
          <ProductCard key={index} product={product}/>
        ))}
      </div>
    </main>
  );
}
