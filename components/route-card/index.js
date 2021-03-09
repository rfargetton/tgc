import {ArrowRight, TrendingUp} from "react-feather";
import Image from "next/image";

import Card from "../card";
import { route } from "next/dist/next-server/server/router";

export default function RouteCard({image, title, description, link, distance, elevation}) {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="h-48 md:h-72 w-full relative">
          <div className="absolute z-20 h-1/2 bottom-0 w-full bg-gradient-to-t from-black to-transparent"></div>
          <Image 
            src={image}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="-mt-28 relative z-20 flex flex-col items-start p-6 flex-grow">
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
    <div className="bg-asphalte text-white flex rounded-lg shadow my-3">
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