import Container from "../container";
import Image from "next/image";

function isEven(number){
  return number %  2 == 0 ;
}

export default function ContentBlock({blocks}){
  return (
    <section id="esprit">
      <div className="outer-spacing">
        <Container>
          <div className="inner-spacing relative z-20">
            <h2 className="text-center"><span className="section-title bg-automne">L'esprit TGC</span></h2>
          </div>
          <div className="inner-spacing">
            {blocks.map((block, index) => (
              <div key={block.title} className="w-full md:w-10/12 mx-auto my-10">
                <div className={`flex justify-between items-center ${isEven(index) ? "flex-row" : "flex-row-reverse"} -m-3`}>
                  <div className="w-full md:w-1/2 p-3">
                    <h3 className="text-automne">{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                  <div className="w-full md:w-80 h-80 relative m-3 rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src={block.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            ))}          
          </div>          
        </Container>
      </div>

    </section>
  )
}