import Container from "../container";
import FeaturesList from "../features-list";

export default function Infos({children}){
  return (
    <section>
      <div className="my-20 md:my-40">
        <Container>
          <div className="px-6 py-3 md:py-6 md:px-12">
            <h2 className="text-center"><span className="section-title bg-white">Tarifs et Infos pratiques</span></h2>
          </div>
          <div className="px-6 py-3 md:py-6 md:px-12">
            {children}
          </div>
        </Container>
      </div>
    </section>
  )
}