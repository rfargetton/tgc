import Card from "../card";
import Date from "../date";
import settings from "../../config.json";

export default function InfoCard({edition, location, date}){
  return (
    <div>
      <Card>
        <div className="p-3 flex items-center flex-wrap">
          <div className="flex-shrink-0 m-3">
            <div className="text-automne text-sm uppercase">à venir</div>
            <div className="text-asphalte font-bold">{`Touraine Gravel Challenge ${settings.edition}`}</div>
          </div>

          <div className="flex-shrink-0 m-3">
            <div className="text-automne text-sm uppercase">où</div>
            <div className="text-asphalte font-bold">{settings.location}</div>
          </div>

          <div className="flex-shrink-0 m-3">
            <div className="text-automne text-sm uppercase">quand</div>
            <div className="text-asphalte font-bold"><Date dateString={settings.date} /></div>
          </div>

          <div className="btn m-3">
            <a href={settings.register_link}>S'inscrire</a>
          </div>
        </div>
      </Card>
    </div>
  )
}