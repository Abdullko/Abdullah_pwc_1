let varNum = 1.1;
let varString = "This is a string";
let varBool = true;

// Anything printed on the screen is always printed as a string.
// Nodejs helps us understand if we are trying to print a string or number using color coding
// Highlight of yellow means non-string, white color means string
// This might change from implementation to implementation
console.log(varNum);
// Typeconversion using String function
console.log(String(varNum));
console.log(varNum.toString());
// Typeconversion into boolean
console.log("Boolean value of number ", varNum, Boolean(varNum));
varNum = 0;
console.log("Boolean value of number ", varNum, Boolean(varNum));
varNum = -1;
console.log("Boolean value of number ", varNum, Boolean(varNum));

console.log(varBool);
// Typeconversion using String function
console.log(String(varBool));
