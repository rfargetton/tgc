import Card from "../card";
import {ChevronRight} from "react-feather"

export default function PageNav({links}){
  return (
    <div>
      <Card>
        <div className="p-4 flex flex-col md:flex-row bg-gravier-light">
          {links.map((link) => (
            <a 
              className="my-2 md:mx-2 text-asphalte hover:text-automne font-medium flex" 
              key={link.destination} 
              href={`#${link.destination}`}
            >
              <ChevronRight />
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </Card>
    </div>
  )
}