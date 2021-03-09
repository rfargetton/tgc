import settings from "../../config.json";
import Container from "../container";
import RouteCard from "../route-card";

export default function RouteList({ routes, children }) {
  return (
    <section id="parcours">
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing relative z-20">
            {children}
          </div>
          <div className="inner-spacing">
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
        </div>
      </div>
    </section>
  );
}