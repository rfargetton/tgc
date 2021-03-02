import Card from "../card";
import Date from "../date";

export default function InfoCard({edition, location, date}){
  return (
    <div>
      <Card>
        <div className="p-4 flex items-center flex-wrap">
          <div className="flex-shrink-0 mx-3">
            <div className="text-automne text-sm uppercase">à venir</div>
            <div className="text-asphalte font-bold">{`Touraine Gravel Challenge ${edition}`}</div>
          </div>

          <div className="flex-shrink-0 mx-3">
            <div className="text-automne text-sm uppercase">où</div>
            <div className="text-asphalte font-bold">{location}</div>
          </div>

          <div className="flex-shrink-0 mx-3">
            <div className="text-automne text-sm uppercase">quand</div>
            <div className="text-asphalte font-bold"><Date dateString={date} /></div>
          </div>

          <div className="btn ">
            <a>S'inscrire</a>
          </div>
        </div>
      </Card>
    </div>
  )
}