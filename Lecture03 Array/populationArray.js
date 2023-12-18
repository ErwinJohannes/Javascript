let arr1 = ["A",true,2];

console.log("\n********Length and Index*************\n");
console.log(arr1.length);
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index
console.log(arr1[arr1.length - 1]); //equal2

console.log("\n********Length and Index  Part2*************\n");
let arr3 = Array(3); //Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //last index
console.log(arr3[arr3.length - 1]); // index = 2
console.log(arr3[0]); //no value
console.log(arr3[1]); // no value