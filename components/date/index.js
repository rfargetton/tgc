import { parseISO, format } from "date-fns";
import fr from "date-fns/locale/fr";

export default function Date({ dateString, dateEnd, separator }) {
  const date = parseISO(dateString);
  const date2 = parseISO(dateEnd);
  if(dateEnd) {
    return (
      <span>
        <time dateTime={dateString}>{format(date, "d", {locale: fr})}</time>
        <span>{separator || " > "}</span>
        <time dateTime={dateEnd}>{format(date2, "d MMMM yyyy", {locale: fr})}</time>
      </span>
    );
  }
  return <time dateTime={dateString}>{format(date, "dd MMMM yyyy", {locale: fr})}</time>;
}
