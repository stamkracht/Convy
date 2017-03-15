export function conditionalClass(conditionalClass) {
  const classString = Object.keys(conditionalClass).filter((key) =>
    conditionalClass[key]
  ).join(' ');

  return classString;
}
