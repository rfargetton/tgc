import BlurhashImage from "../blurhash-image";

export default function Hero({image, intro, children, pageName}){

  return (
    <section className="-mb-32">
      <div className="text-gravier-light bg-feuillage">
        <div className="container">
          <div className="relative">
            <div className="p-6 md:p-12 absolute z-20 h-full w-full md:w-10/12 flex flex-col justify-center items-start">
              {children}
            </div>
            <div className="h-136 ml-auto w-full md:w-9/12 relative rounded-0 md:rounded-xl overflow-hidden bg-feuillage-dark">
              <div className="absolute z-10 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black to-transparent" ></div>
              <BlurhashImage 
                imageProps={image}
              />
            </div>
          </div>
          {intro &&
            <div className="inner-spacing">
              <div className="w-full md:w-8/12 mx-auto py-20">
                <p className="text-center text-lg font-medium">{intro}</p>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="absolute clip-path bg-feuillage w-full h-40"></div>
    </section>
  )
}