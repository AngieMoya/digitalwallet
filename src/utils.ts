export function formatDateWithIntl(date: Date) {
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Use 24-hour format
  });

  return dateFormatter.format(date).replace(',', ''); // Remove the comma between date and time
}
