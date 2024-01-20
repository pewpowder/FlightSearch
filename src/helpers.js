export function formatTimePeriod(timePeriod) {
  const match = separateTimePeriodWithRegExp(timePeriod);
  const hours = match[1] ?? '0';
  const minutes = match[2] ?? '0';

  return `${hours}ч ${minutes}м`;
}

export function convertTimePeriodToMinutes(timePeriod) {
  const match = separateTimePeriodWithRegExp(timePeriod);
  const hours = Number(match[1]) || 0
  const minutes = Number(match[2]) || 0

  return hours * 60 + minutes;
}

function separateTimePeriodWithRegExp(timePeriod) {
  const regex = /PT(\d+)H(\d+)?/;
  return regex.exec(timePeriod);
}

export function formatTimeStamp(timeStamp) {
  const regex = /T(\d+):(\d+)/;
  const match = regex.exec(timeStamp);
  const hours = match[1];
  const minutes = match[2];

  return `${hours}:${minutes}`
}

export function formatPrice(price, currency) {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: currency || 'RUB',
    maximumFractionDigits: 0
  });

  return formatter.format(price);
}

export function sortByField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}
