import Image from "next/image";

export default function Team({team}){
  return (
    <section id="equipe">
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing relative z-20">
            <h2 className="text-center"><span className="section-title bg-white">L'équipe TGC</span></h2>
          </div>
          <div className="inner-spacing">
            <ul className="flex flex-col md:flex-row -m-3">
              {team.map((member) => (
                <li key={member.name} className="w-full md:w-1/4 flex flex-col items-center my-3 md:mx-3 text-center">
                  <Image 
                    src={member.image}
                    height="400"
                    width="400"
                    className="rounded-full"
                  />
                  <h3 className="text-automne">{member.name}</h3>
                  <p>{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}