function sum(...args) {
    let result = 0;
    for (let arg of args) result += arg;
    return result;
}

let totalSum = sum(4, 8, 10, 29, 100);
console.log(totalSum);  // Output: 151
