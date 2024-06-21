export default function classnames(...classes) {
  return classes.filter((x) => x !== undefined).join(" ");
}
