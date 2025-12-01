
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
        iconsArray
          .map((entry, id) => (
            <div key={id} className="text-center border border-yellow-600 p-2 rounded-xl flex-1 max-w-[330px] min-w-[320px]">
              <p className="w-[60px] aspect-square inline-grid place-items-center text-4xl bg-yellow-600 rounded-full mb-2">
                {entry.icon}
              </p>

              <p className="font-bold text-yellow-800 text-[1.2em]">
                {entry.title}
              </p>

              <p className="leading-tight text-sm text-gray-600">
                {entry.description}
              </p>

            </div>
          ))
      }

    </section>
  );
}
