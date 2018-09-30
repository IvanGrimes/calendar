export default function setTimeFromTimeStringToDate(timestring, date) {
  const [hours, minutes] = timestring.split(':');
  const newDate = date;

  newDate.setHours(hours);
  newDate.setMinutes(minutes);

  return newDate;
}
