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
          <div>
            {blocks.map((block, index) => (
              <div key={block.title} className="inner-spacing">
                <div className="w-full lg:w-10/12 mx-auto">
                  <div className={`flex justify-between items-center flex-col-reverse ${isEven(index) ? "md:flex-row" : "md:flex-row-reverse"} -m-3`}>
                    <div className="max-w-full md:w-1/2 m-3">
                      <h3 className="text-automne">{block.title}</h3>
                      <p>{block.description}</p>
                    </div>
                    <div className="max-w-full md:w-1/3 m-3">
                      <Image 
                        src={block.image}
                        width="400"
                        height="400"
                        className="rounded-xl"
                        alt={block.title}
                      />
                    </div>
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