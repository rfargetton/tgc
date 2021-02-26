import Container from "../container";

export default function Hero({image, children}){
  return (
    <div className="bg-gray-200 py-16">
      <Container>
        <div className="relative">
          <div className="absolute z-20 h-full w-6/12 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="ml-auto w-8/12 relative">
            <div className="absolute top-0 bottom-0 w-4/12 bg-gradient-to-r from-gray-200 to-transparent" ></div>
            <img className="rounded-2xl h-96 w-full object-cover" src={image} />
          </div>
        </div>
      </Container>
    </div>
  )
}