import Card from "../card";
import {ChevronRight} from "react-feather"

export default function PageNav({links}){
  return (
    <div>
      <Card>
        <div className="p-4 flex bg-gravier-light">
          {links.map((link) => (
            <a 
              className="m-3 text-asphalte hover:text-automne font-medium flex" 
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