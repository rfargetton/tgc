import {useState} from "react";
import Image from "next/image";
import {ArrowRight, ArrowLeft} from "react-feather";

export default function Slider({images}){
  const [xPos, setXPos] = useState(25);
  const [activeSlide, setActiveSlide] = useState(0);

  function displayNext(){
    if(activeSlide < images.length - 1) {
      setXPos(xPos - 50);
      setActiveSlide(activeSlide + 1)
    }
  }

  function displayPrevious(){
    if(activeSlide > 0) {
      setXPos(xPos + 50);
      setActiveSlide(activeSlide - 1)
    }
  }

  function displayIndex(index){
    const pos = index * 50;
    setXPos(-pos + 25);
    setActiveSlide(index);
  }

  const ulStyle = {
    transform: `translateX(${xPos}%)`
  }
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute bg-asphalte w-full h-1/2"></div>
      <div className="z-50 left-0 absolute h-full flex items-center mx-6" onClick={displayPrevious}>
        <div className="btn h-16 w-16 flex justify-center items-center">
          <ArrowLeft />
        </div>
      </div>
      <div className="z-50 right-0 absolute h-full flex items-center mx-6" onClick={displayNext}>
        <div className="btn h-16 w-16 flex justify-center items-center">
          <ArrowRight />
        </div>        
      </div>
      <ul style={ulStyle} className="flex transition duration-500">
        {images.map((image, index) => (
          <Slide image={image} active={index === activeSlide} handleClick={() => {displayIndex(index)}} />
        ))}
      </ul>
    </div>
  )
}

function Slide({image, active, handleClick}){
  return (
    <li 
      key={image}
      className={`w-1/2 h-56 md:h-96 relative flex-shrink-0 transform ${active ? "scale-100" : "scale-90"} transition duration-500 rounded-xl overflow-hidden`}
      onClick={handleClick}
    >
      <Image 
        src={image}
        layout="fill"
        objectFit="cover"
      />
    </li>
  )
}