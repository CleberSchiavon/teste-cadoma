import numeral from 'numeral';

export function fNumber(number: string) {
  return numeral(number).format();
}
