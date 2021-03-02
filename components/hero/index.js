import Image from "next/image";

import Container from "../container";

export default function Hero({image, intro, children, bgColor}){
  return (
    <div>
      <div className={`text-gravier-light pt-16 bg-${bgColor}`}>
        <Container>
          <div className="relative">
            <div className="block md:absolute z-20 h-full w-full md:w-10/12 flex flex-col justify-center items-start">
              {children}
            </div>
            <div className="hero-image ml-auto w-full md:w-9/12 relative rounded-xl overflow-hidden">
              <div className="absolute z-10 top-0 bottom-0 w-4/12 bg-gradient-to-r from-black to-transparent" ></div>
              <Image 
                src={image}
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {intro &&
            <div className="w-full md:w-8/12 mx-auto py-16">
              <p className="text-center text-lg font-medium">{intro}</p>
            </div>
          }
        </Container>
      </div>
      <div className={`absolute clip-path bg-${bgColor} w-full h-32`}></div>
    </div>
  )
}