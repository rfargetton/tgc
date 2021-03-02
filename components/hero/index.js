import Image from "next/image";

import Container from "../container";

export default function Hero({image, intro, children}){
  return (
    <div>
      <div className="text-gravier-light pt-16 bg-feuillage">
        <Container>
          <div className="relative">
            <div className="absolute z-20 h-full w-5/12 flex flex-col justify-center items-start">
              {children}
            </div>
            <div className="ml-auto h-96 w-9/12 relative">
              <div className="absolute z-10 top-0 bottom-0 w-4/12 bg-gradient-to-r from-black to-transparent" ></div>
              <Image 
                src={image}
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full md:w-8/12 mx-auto py-24">
            <p className="text-center text-lg font-medium">{intro}</p>
          </div>
        </Container>
      </div>
      <div className="absolute clip-path bg-feuillage w-full h-32"></div>
    </div>
  )
}