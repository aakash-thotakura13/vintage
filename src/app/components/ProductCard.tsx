

type ProductCardProps = {
  key: number,
  name: string,
  price: string,
  description: string,
  badge: string,
  image: string
}

export default function ProductCard(
  { name, price, description, badge, image, }: ProductCardProps
) {
  return (
    <section className="relative rounded-xl border border-yellow-500 overflow-hidden" style={{ flex: "1 1 350px", minWidth: "350px" }} >
      <small className="absolute top-2 right-2 bg-yellow-500 text-white text-sm font-bold rounded-full px-2 py-1">{badge}</small>

      <img
        src={image}
        alt={name}
        className="w-full aspect-[2/1] object-cover rounded-t-xl"
      />

      <div style={{ padding: "1rem", }}>
        <div className="flex justify-between">
          <p>{name}</p>
          <p className="font-bold text-yellow-500">{price}</p>
        </div>
        <small>{description}</small>
      </div>

    </section>
  )
}