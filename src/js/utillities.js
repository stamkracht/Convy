export function conditionalClass(conditionalClass) {
  const classString = Object.keys(conditionalClass).filter((key) =>
    conditionalClass[key]
  ).join(' ');

  return classString;
}

export function humanReadableTimeStamp(inputValue) {
  let today = moment(inputValue).isSame(new Date(), 'd');
  let dateFormat = today ? 'HH:mm' : 'D-M-YYYY HH:mm';
  return moment(message.timeStamp).format(dateFormat)
}
