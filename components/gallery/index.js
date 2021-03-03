import Container from "../container";
import Slider from "../slider";

export default function Gallery({images}){
  return (
    <section>
      <div className="my-40">
        <div className="bg-asphalte">
          <Container>
            <div className="p-3 md:p-6 bg-asphalte">
              <h2 className="text-center -mt-12"><span className="bg-automne p-3 shadow-lg">Galerie</span></h2>
            </div>
          </Container>        
        </div>
        <Slider images={images} />
      </div>
    </section>
  )
}