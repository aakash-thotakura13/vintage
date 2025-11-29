
interface ContactInfoEntry {
icon: string;
title: string;
details: string[];
}

interface ContactUsDetailsProps {
  contactInfo: ContactInfoEntry[];
}


const ContactUseDetails: React.FC<ContactUsDetailsProps> = ({ contactInfo }) => {

  return (
    <div style={{  padding: "0.5em", borderRadius: "1em" }}>

      <section style={{ display: "grid", gap: "1em", margin: "0em auto", }}>
        {
          contactInfo.map((entry, id) => (
            <section key={id} style={{ display: "flex", alignItems: "center", border: "1px solid lightgrey", padding: "1em", borderRadius: "1em", backgroundColor: "#ffd70011", }}>
              <p style={{ aspectRatio: "1/1", display: "inline-block", fontSize: "1.5em", marginRight: "1em", }}>{entry.icon}</p>
              <section>
                <p className="font-bold text-yellow-700">{entry.title}</p>
                <div className="leading-tight text-sm text-gray-600">
                  {entry.details.map((entry, id) => <p key={id}>{entry}</p>)}
                </div>
              </section>
            </section>
          ))
        }
      </section>

    </div>
  )
};

export default ContactUseDetails;