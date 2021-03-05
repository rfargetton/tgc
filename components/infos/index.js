import Container from "../container";
import FeaturesList from "../features-list";

export default function Infos({children}){
  return (
    <section>
      <div className="my-40">
        <Container>
          <div className="p-3 md:p-6">
            <h2 className="text-center"><span className="bg-automne p-3 shadow-lg">Tarifs et Infos pratiques</span></h2>
          </div>
          <div className="p-3 md:p-6">
            {children}
          </div>
        </Container>
      </div>
    </section>
  )
}