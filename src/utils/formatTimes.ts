import { formatDistanceToNow } from 'date-fns';

export function fToNow(date: number) {
  return (
    date &&
    formatDistanceToNow(new Date(date * 1000), {
      addSuffix: true,
    })
  );
}
