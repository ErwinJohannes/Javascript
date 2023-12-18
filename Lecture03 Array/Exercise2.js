let Furniture = "Table Chairs Couch";

//does the same as 
//for (let char of str) console.log(char);

let iterator = Furniture[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value); // output character 1 by 1
}