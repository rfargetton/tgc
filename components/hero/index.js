import Container from "../container";

export default function Hero({image, heading, subheading}){
  return (
    <div className="py-8">
      <Container>
        <div className="relative">
          <div className="absolute z-50 h-full w-6/12 flex flex-col justify-center items-start">
            <h1>{heading}</h1>
            {subheading && <p>{subheading}</p>}
          </div>
          <div className="ml-auto w-8/12 relative">
            <div className="absolute top-0 bottom-0 w-4/12 bg-gradient-to-r from-white to-transparent" ></div>
            <img className="rounded-2xl" src={image} />
          </div>
        </div>
      </Container>
    </div>
  )
}