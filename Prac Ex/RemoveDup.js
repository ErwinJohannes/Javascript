function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 2, 1, 5];
  const newArrayWithoutDuplicates = removeDuplicates(originalArray);
  
  console.log(newArrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]
  