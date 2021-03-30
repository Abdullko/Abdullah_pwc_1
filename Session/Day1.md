# Setting up the environment

- NodeJS
    - Install

# Hello World

- We created a file called `test.js`
- We Executed that file using the `node .\test.js` command from powershell

# Comments

- Comments are non executable stables
- Code is read more times than it is written
- they are mostly used to comment out lines of code

# Ways to run JavaScript

- This is how JavaScript is running on our computer
    - using Nodejs
- Node REPL
    - read–eval–print loop (REPL)
    - run the command `node` on powershell
    - to exit type in `.exit`
- To Run it on a browser
    - .js files
        - Create an HTML File
        - Create a .js
        - use script tag to import the js file
    - console
        - Open up a browser, press F12, go to console, and type in the javascript

# Variables

- Variables are named storage locations
- They allow you to store, modify, and process data using a human friendly label called identifier.

# Statically Typed Vs Dynamically Typed Language

- Statically Typed language, before you can work on any value, you should declare its data type
    - Your variable can only store one type of data within its scope.
- Dynamically Typed language, you can use variables without declaring a data type
    - A variable can hold multiple data types, but only one at a time.
    - the datatype is inferred from the last value that was given to that variable.

```java
String var1;
int i;
```

# Strongly Typed vs Weakly Typed

- Strongly Typed language, values are not automatically converted into different data types depending on operation
- Weakly Typed language, values are automatically converted into different data types depending on operation

# Data Types: Primitive Data Types

- Number
    - 1
    - (-1)
    - 1.2
    - 1.5E15
- Strings
    - words/sentences/paragraphs treated as data rather than language tokens
- Boolean
    - true 
    - false

## Numbers

- Day1/Numbers.js

## String

- Day1/Strings.js

## Boolean

- Day1/Boolean.js

# Type Conversions

- `Day1/TypeConversion.js`


# Expressions and Operations

- Statements: A combinations of expressions or code that ends with a semicolon.
- Expressions: A piece of code that results in a value
- Operators: Operators are symbols that give meaning to expressions. For example: a '+' sign gives the meaning of addition.

```js
let var1 = "Something"; // This is a statement. It's a complete line of code that ends with a semicolon.
// the above line is not an expression

var1="Test" // This is an expression
var1="Test"; // This is a statement

var1 = var2 = "Test"; // This is a single statement. This has two expressions.


var a;
var b;
var c;

c = (a=2) + (b=3);


c = 1 + 2 + 3;
```

# Types of Operators

## Assignment Operators

- Equal to operator: 
    - It assigns the value of the expression on the right to the variable on the left.
    - You can have comma separated variables on the left and these will be assigned the values of the comma separated values on the right
    - It returns the value of the assignment.
    - If variable is not declared before, but is assigned a value using assignment operator, then no error is thrown

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`
- `**=`

```js
a+=3;
a = a+3;

a**=3;
a = a**3;
```

## Logical Operators

- && : logical and
- || : logical or
- !  : logical not

## Comparison Operators

Comparison Operators return a boolean value

- `==` : This compares the value
- `===`: This compares value and type
- `!=` : Not equal to the value
- `!==`: Not equal to value and type
- `>`: 
- `<`
- `>=`
- `<=`
- `?` : will be discussed during conditional statement

## Arithmetic Operators

- `+`: Binary Plus
- `-`: Binary Minus
- `*`: Multiplication
- `**`: Exponential(ES6) similar to ^ in python
- '/' : Division
- "%" : Modulus


```js
2**10 // 2 raise to the power of 10

var a,b;
a=10;
b=3;

var divisor = a/b; // 3.333333
// Math is different from math
// JS is case sensitive
divisor = Math.floor(a/b); // gives 3
var remainder = a%b; // 1
```

## Bitwise Operators

- `&` 
- `|`
- `~`
- `^`
- `<<`
- `>>`

# To Do 

- Formatted output