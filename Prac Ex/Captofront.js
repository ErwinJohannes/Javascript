function CapToFront(inputString) {
    let capitalLetters = '';
    let nonCapitalLetters = '';
  
  
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
  
      
      if (currentChar >= 'A' && currentChar <= 'Z') {
        capitalLetters += currentChar;
      } else {
        nonCapitalLetters += currentChar;
      }
    }
  
    // Combine capital letters and non-capital letters
    const result = capitalLetters + nonCapitalLetters;
  
    return result;
  }
  
  // Example usage
  const myString = 'aBcDeF';
  const result = CapToFront(myString);
  console.log('CaptoFront',myString,result); // Output: 'BDFace'
  