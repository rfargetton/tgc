import Image from "next/image";

import Container from "../container";

export default function Hero({image, intro, children}){
  return (
    <div className="bg-gray-200 py-16">
      <Container>
        <div className="relative">
          <div className="absolute z-20 h-full w-5/12 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="ml-auto h-96 w-9/12 relative">
            <div className="absolute z-10 top-0 bottom-0 w-4/12 bg-gradient-to-r from-gray-200 to-transparent" ></div>
            <Image 
              src={image}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full md:w-8/12 mx-auto my-10">
          <p className="text-center">{intro}</p>
        </div>
      </Container>
    </div>
  )
}