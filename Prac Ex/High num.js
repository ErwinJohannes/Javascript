function findHighestDigit(number) {
    // Convert the number to a string
    const numberString = number.toString();
  
    // Initialize a variable to store the highest digit
    let highestDigit = 0;
  
    // Iterate through each character in the string
    for (let i = 0; i < numberString.length; i++) {
      // Convert the character to a number
      const currentDigit = Number(numberString[i]);
  
      // Update the highestDigit if the currentDigit is greater
      if (currentDigit > highestDigit) {
        highestDigit = currentDigit;
      }
    }
  
    return highestDigit;
  }
  
  // Example usage
  const myNumber = 75839;
  const result = findHighestDigit(myNumber);
  console.log(result); // Output: 9
  