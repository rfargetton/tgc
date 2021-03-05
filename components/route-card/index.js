import {ArrowRight, TrendingUp} from "react-feather";
import Image from "next/image";

import Card from "../card";
import { route } from "next/dist/next-server/server/router";

export default function RouteCard({image, title, description, link, distance, elevation}) {
  return (
    <Card>
      <div className="h-72 w-full relative">
        <div className="absolute z-20 h-1/2 bottom-0 w-full bg-gradient-to-t from-black to-transparent"></div>
        <Image 
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-3 md:p-6 relative -mt-28 z-30">
        <div className="flex flex-col items-start">
          <h3 className="mt-0 text-white">{title}</h3>
          <RouteStats distance={distance} elevation={elevation} />
          <p className="my-6">{description}</p>
          <a href={link} target="_blank" className="btn justify-self-end">S'inscrire</a>
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