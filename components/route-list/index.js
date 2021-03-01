import Link from "next/link";
import {ArrowRight} from "react-feather";
import Image from "next/image";

import Container from "../container";
import Card from "../card";

export default function RouteList({ routes, children }) {
  return (
    <div className="my-8">
      <Container>
        <div className="py-4 w-full md:w-8/12 mx-auto text-center">
          {children}
        </div>
        <div>
          <ul className="list-none flex flex-col md:flex-row -m-2">
            {routes.map((route) => (
              <li className="w-full md:w-1/2 m-2" key={route.id}>
                <Card>
                  <div className="h-72 w-full relative">
                    <Image 
                      src={route.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4 relative z-50">
                    <div>
                      <h3 className="mt-0">{route.title}</h3>
                      <p>{route.description}</p>
                      <Link href={route.link}>
                        <a>
                          <div className="flex justify-between text-blue-700 items-center mt-4">
                            <div>Read More</div>
                            <div>
                              <ArrowRight />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Card>          
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}