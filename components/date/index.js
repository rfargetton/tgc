import { parseJSON, format } from "date-fns";

export default function Date({dateString}){
  const date = parseJSON(dateString);
  return (
    <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
  )
}