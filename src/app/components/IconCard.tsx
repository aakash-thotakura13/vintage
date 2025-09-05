
interface IconEntry {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IconCardProps {
  iconsArray: IconEntry[];
}

export default function IconCard({ iconsArray }: IconCardProps) {
  return (
    <section style={{ width: "80%", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", }}>
      {
        iconsArray.map((entry, id) => (
          <div key={id} style={{ textAlign: "center", border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", flex: "1 1 300px", }}>
            <p style={{ display: "inline-block", fontSize: "2em", backgroundColor: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{entry.icon}</p>
            <p className="font-bold">{entry.title}</p>
            <p className="leading-tight text-sm text-gray-600">
              {entry.description}
            </p>
          </div>
        ))
      }
    </section>
  )
}