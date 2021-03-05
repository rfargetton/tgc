import Slider from "../slider";

export default function Gallery({images}){
  return (
    <section>
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing">
            <h2 className="text-center"><span className="section-title bg-automne">Galerie</span></h2>
          </div>
        </div>
        <Slider images={images} />
      </div>
    </section>
  )
}