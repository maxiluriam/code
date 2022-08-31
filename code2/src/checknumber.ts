export default function checkNumber(i: number, limit: number) {
  if (i > limit) {
    return (i = 0);
  } else if (i < 0) {
    return (i = limit);
  } else return i;
}
