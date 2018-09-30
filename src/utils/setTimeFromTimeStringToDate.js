import dateFns from 'date-fns';

export default function setTimeFromTimeStringToDate(timestring, date) {
  const [hours, minutes] = timestring.split(':');
  let newDate;

  newDate = dateFns.setHours(date, hours);
  newDate = dateFns.setMinutes(newDate, minutes);
  newDate = dateFns.setSeconds(newDate, 0);

  return newDate;
}
