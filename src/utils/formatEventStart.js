import { format, formatDistanceStrict } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', {
    locale: uk,
  });
};

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
