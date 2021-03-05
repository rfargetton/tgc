import Link from "next/link";
import {ArrowRight} from "react-feather";
import Image from "next/image";

import settings from "../../config.json";
import Container from "../container";
import Card from "../card";
import RouteCard from "../route-card";

export default function RouteList({ routes, children }) {
  return (
    <section>
      <div className="my20 md:my-40">
        <Container>
          <div className="p-6 md:p-12 relative z-20">
            {children}
          </div>
          <div className="px-6 md:px-12">
            <ul className="list-none flex flex-col md:flex-row m-0 md:-m-3">
              {routes.map((route) => (
                <li className="w-full md:w-1/2 my-3 md:m-3 box-border" key={route.id}>
                  <RouteCard 
                    title={route.title}
                    description={route.description}
                    image={route.image}
                    link={settings.register_link}
                    distance={route.distance}
                    elevation={route.elevation}
                  />   
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}