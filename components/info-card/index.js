import Card from "../card";
import Date from "../date";
import settings from "../../config.json";

export default function InfoCard({name, location, date, link}){
  return (
    <div>
      <Card>
        <div className="p-4 flex flex-col items-start md:items-center md:flex-row bg-gravier-light">
          <div className="my-2 md:mx-2">
            <div className="text-automne text-sm uppercase">à venir</div>
            <div className="text-asphalte font-medium">{name}</div>
          </div>

          <div className="my-2 md:mx-2">
            <div className="text-automne text-sm uppercase">où</div>
            <div className="text-asphalte font-medium">{location}</div>
          </div>

          <div className="my-2 md:mx-2">
            <div className="text-automne text-sm uppercase">quand</div>
            <div className="text-asphalte font-medium">{date}</div>          
          </div>

          <div className="my-2 md:mx-2 self-end md:self-center">
            <a href={link} target="_blank" className="btn">S'inscrire</a>
          </div>
        </div>
      </Card>
    </div>
  )
}