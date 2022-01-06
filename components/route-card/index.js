import {ArrowRight, TrendingUp} from "react-feather";
import BlurhashImage from "../blurhash-image";
import Date from "../date";
import Card from "../card";
import { route } from "next/router";

export default function RouteCard({image, title, date, description, link, distance, elevation}) {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="h-48 md:h-72 w-full relative">
          <div className="absolute z-20 h-1/2 bottom-0 w-full bg-gradient-to-t from-black to-transparent"></div>

          <BlurhashImage 
            imageProps={image}
          />
        </div>
        <div className="-mt-32 relative z-20 flex flex-col items-start p-6 flex-grow">
          <div className="text-white">{date}</div>          
          <h3 className="mt-0 text-white">{title}</h3>
          <RouteStats distance={distance} elevation={elevation} />
          <p className="my-6">{description}</p>
          <a href={link} target="_blank" className="btn self-end mt-auto">S'inscrire</a>
        </div>
      </div>
    </Card>
  )
}

export function RouteStats({distance, elevation}){
  return (
    <div className="bg-asphalte text-white flex rounded-lg shadow my-2">
      <div className="flex m-2">
        <ArrowRight />
        <div className="ml-2">{`${distance}km`}</div>
      </div>
      <div className="flex m-2">
        <TrendingUp />
        <div className="ml-2">{`${elevation}m`}</div>
      </div>
    </div>
  )
}