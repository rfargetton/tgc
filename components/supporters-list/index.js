export default function Supporters({supporters}){
  return(
    <section id="partenaires">
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing relative z-20">
            <h2 className="text-center"><span className="section-title bg-white">Nos partenaires</span></h2>
          </div>
          <div className="inner-spacing">
            <ul className="flex flex-wrap justify-center items-center">
              {supporters.map((supporter) => (
                <li className="p-4 flex-shrink" key={supporter.title}>
                  <a className="block transform scale-100 hover:scale-105 transition" target="_blank" href={supporter.link}>
                    <img src={supporter.logo} alt={`logo de ${supporter.title}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}