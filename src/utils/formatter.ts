import { formatDistanceToNow } from "date-fns";
import pt from "date-fns/locale/pt";

export function dateFormatter(date: string) {
    return formatDistanceToNow(new Date(date), {
        locale: pt,
        addSuffix: true,
      })
}