
export default function Description({ title }: { title: string }) {
  return (
    <p className="text-center pb-8" style={{width: "70%", margin: "0 auto", minWidth: "350px", }}>{title}</p>
  )
}