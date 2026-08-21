
type ProductCardProps = {
  name: string;
  telName: string;
  price: string;
  offerPrice: string;
  description: string;
  badge: string;
  image: string;
  available?: boolean;
};

export default function ProductCard({
  name,
  telName,
  price,
  offerPrice,
  description,
  badge,
  image,
  available
}: ProductCardProps) {
  return (
    <section className="relative rounded-xl border border-yellow-500 overflow-hidden flex-1 basis-[350px] min-w-[350px] max-w-[380px]">

      {/* Premium Breed Badge */}
      <small className="absolute top-2 right-2 z-10 bg-yellow-500 text-white text-sm font-bold rounded-full px-2 py-1">
        {badge}
      </small>

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className={`w-full aspect-square object-contain rounded-t-xl shadow-2xl bg-white transition duration-300 ease-in-out ${available
            ? "hover:scale-105"
            : "grayscale opacity-60"
          }`}
      />

      {/* Product Details */}
      <div className="p-4 bg-white">
        <div className="flex justify-between items-end">

          <div className="flex flex-col items-start">
            <p className="font-bold text-2xl">{name}</p>
            <p className="font-bold text-md">{telName}</p>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-400 line-through text-sm">
              {price}
            </span>

            <span className="font-bold text-yellow-500 text-lg">
              {offerPrice}
            </span>
          </div>

        </div>

        <small>{description}</small>
      </div>
    </section>
  );
}

