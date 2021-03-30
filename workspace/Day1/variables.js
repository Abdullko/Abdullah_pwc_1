// Definition: Declare + Assign/Initialization
let name = "let him out";

// Declaration is normally used to either define the scope or if the variable is const or variable

// Const is a named storage location, whose value cannot be changed during program execution
// const v = 2;
// let and var both declare a variable
// let has block scope
let v;
// var has function scope
// var v;

// Assignment without declaration
// It's a very bad practice to assign without declaring
v = 1;

// Assignment
name = "Shrivardhan";

// When you separate arguments to a function with a comma
// It automatically inserts a space in between.
console.log("Hello,", name, v);
// Hello, Faiz


console.log(1 + 2 + "3" + 4);