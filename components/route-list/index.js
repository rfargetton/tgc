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
            <ul className="grid md:grid-cols-2 gap-6">
              {routes.map((route) => (
                <li className="box-border transform scale-100 hover:scale-105 transition" key={route.id}>
                  <RouteCard 
                    title={route.title}
                    description={route.description}
                    image={route.imageBlur}
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