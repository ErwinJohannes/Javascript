function criticalCode() {
    throw "throwing an exception";

}


function logError(theExcption) {
    console.log(theException);
}

console.log("\n************Try.catch*************\n")

try {
    criticalCode();
} catch(ex) {
    console.log("Got an Error");
    logError(ex);

}


console.log("\n************Try.catch*************\n")
try {
    throw "An exception that is thrown every time";
} catch(ex) {
    console.log("Got an error");
    logError(ex);
}


console.log("\n************Try.catch final*************\n")
try {
    criticalCode();
} catch(ex){
    console.log("Got an Error");
    logError(ex);
} finally {
    console.log("Code that will always run");

}

function hello() {
    console.log("\n************Throwing Exceptions********\n");
}
