type ProductCardProps = {
  name: string,
  price: string,
  offerPrice: string,
  description: string,
  badge: string,
  image: string
}

export default function ProductCard(
  { name, price, offerPrice, description, badge, image }: ProductCardProps
) {
  return (
    <section className="relative rounded-xl border border-yellow-500 overflow-hidden flex-1 basis-[350px] min-w-[350px] max-w-[380px]">
      <small className="absolute top-2 right-2 bg-yellow-500 text-white text-sm font-bold rounded-full px-2 py-1">
        {badge}
      </small>
      <img
        src={image}
        alt={name}
        className="w-full aspect-square object-contain rounded-t-xl shadow-2xl bg-white hover:scale-105 transition duration-300 ease-in-out"
      />
      <div className="p-4 bg-white">
        <div className="flex justify-between items-end">
          <p className="font-bold text-2xl">{name}</p>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 line-through text-sm">{price}</span>
            <span className="font-bold text-yellow-500 text-lg">{offerPrice}</span>
          </div>
        </div>
        <small>{description}</small>
      </div>
    </section>
  )
}