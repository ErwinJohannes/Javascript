function convert12to24(time12) {
    const [time, period] = time12.split(' ');
    let [hours, minutes, seconds] = time.split(':');
  
    hours = parseInt(hours, 10);
  
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
  }
  
  // Example usage:
  const time12 = '03:45:30 PM';
  const time24 = convert12to24(time12);
  
  console.log('digitalclock',time12,('→'),time24); 
  