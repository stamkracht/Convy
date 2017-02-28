export function dynamicClassNames(initial, dynamic) {
  return Object.keys(dynamic).reduce((a, b) => {
    if(dynamic[b]) {
      return `${a} ${b}`
    }
    return a
  }, initial)
}

