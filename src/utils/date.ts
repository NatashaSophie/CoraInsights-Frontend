import { parse, format } from 'date-fns';

export const convertInputValueToDate = (date: string) => {
  const parsedDate = parse(date, 'dd/mm/yyyy', new Date());

  return format(parsedDate, 'yyyy-mm-dd');
};

export const formatDateToLocalDate = (date: string) => {
  const parsedDate = parse(date, 'yyyy-mm-dd', new Date());

  return format(parsedDate, 'dd/mm/yyyy');
};
