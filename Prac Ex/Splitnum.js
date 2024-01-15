function splitNumberIntoTwoHalves(number) {
    const numberString = number.toString();
    const splitIndex = Math.ceil(numberString.length / 2);
    return [parseInt(numberString.substring(0, splitIndex)), parseInt(numberString.substring(splitIndex))];
  }
  
  // Example usage
  const myNumber = 123456;
  const result = splitNumberIntoTwoHalves(myNumber);
  console.log('Original Number:', myNumber);
  console.log('Split Halves:', result);
  