
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
    <section className="max-w-[1200px] min-w-[350px] mx-auto my-8 px-2 py-4 flex justify-center flex-wrap gap-4">

      {
        iconsArray.map((entry, id) => (
          <div key={id} style={{ textAlign: "center", border: "1px solid goldenrod", padding: "1em", borderRadius: "1em", flex: "1 1 auto", maxWidth: "350px", minWidth: "350px", }}>
            <p style={{ width: "60px", aspectRatio: "1", display: "inline-block", placeItems: "center", placeContent: "center", fontSize: "2em", backgroundColor: "goldenrod", borderRadius: "50%", marginBottom: "0.5em", }}>{entry.icon}</p>
            <p className="font-bold text-yellow-800" style={{ fontSize: "1.2em" }}>{entry.title}</p>
            <p className="leading-tight text-sm text-gray-600">
              {entry.description}
            </p>
          </div>
        ))
      }

    </section>
  );
}
