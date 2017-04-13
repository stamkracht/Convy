import moment from 'moment';

export function classNames(classNames='', conditionalClassNames={}) {
  return `${classNames} `.concat(Object.keys(conditionalClassNames).filter((key) => {
    return conditionalClassNames[key];
  }).join(' '));
}

export function humanReadableTimeStamp(inputValue) {
  let today = moment(inputValue).isSame(new Date(), 'd');
  let dateFormat = today ? 'HH:mm' : 'D-M-YYYY HH:mm';
  return moment(inputValue).format(dateFormat)
}
