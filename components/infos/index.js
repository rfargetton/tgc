import Container from "../container";
import FeaturesList from "../features-list";

export default function Infos({children}){
  return (
    <section id="infos">
      <div className="outer-spacing">
        <Container>
          <div className="inner-spacing">
            <h2 className="text-center"><span className="section-title bg-white">Infos pratiques</span></h2>
          </div>
          <div className="inner-spacing">
            {children}
          </div>
        </Container>
      </div>
    </section>
  )
}