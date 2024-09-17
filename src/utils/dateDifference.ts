import { formatDistanceStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateDifferenceInSeconds = (date1: Date, date2: Date) => {
	return Number(formatDistanceStrict(date1, date2, { locale: ptBR, addSuffix: false, unit: 'second' }).replace(' segundos', '').replace(' segundo', ''))
}