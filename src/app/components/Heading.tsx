
export default function Heading({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold text-center pt-4" style={{ width: "70%", margin: "0 auto", minWidth: "350px", }}>{title}</h1>
  )
}