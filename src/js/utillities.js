export function conditionalClasses(conditionalClasses) {
  const classString = Object.keys(conditionalClasses).filter((key) =>
    conditionalClasses[key]
  ).join(" ");
  return classString
}


