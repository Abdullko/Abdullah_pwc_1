var a = "abcdef";
console.log(a);
console.log(a.toUpperCase());


a = 3; // It assigns a different datatype to a without issues.
console.log(a);
// The following will cause an issue as `a` doesn't hold a string anymore
// console.log(a.toUpperCase());
// There is another language written on top of JavaScript, which just makes javascript a
// statically typed language. This language is TypeScript.

var c = (a = 2) + (b = 3); // b doesn't throw any error because of assignment. The interpreter declares a new variable


console.log(a, b, c);
// console.log(d + 3);
// Operations other than assignment on undeclared variables throw a ReferenceError