import { parseJSON, format } from "date-fns";
import fr from "date-fns/locale/fr";

export default function Date({ dateString }) {
  const date = parseJSON(dateString);
  return <time dateTime={dateString}>{format(date, "dd MMMM yyyy", {locale: fr})}</time>;
}
