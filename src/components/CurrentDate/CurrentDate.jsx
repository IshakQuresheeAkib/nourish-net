const CurrentDate = () => {
    
    const currentDate = new Date();

// Format time
const formattedTime = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
}).format(currentDate);

// Format date
const formattedDate = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(currentDate);

// Combine time and date
const dateTimeString = `${formattedTime}, ${formattedDate}`;
console.log(dateTimeString);
    return dateTimeString;
}
export default CurrentDate;