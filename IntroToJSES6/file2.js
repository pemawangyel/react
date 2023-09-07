//Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";
/*So that the variable a holds the value "8".

And the variable b holds the value "3".

When the code is run, it should output:

a is 8

b is 3

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

You should NOT redeclare the variables a and b.

Hint: Use this code playground to run your code and see if it matches your expectations.

Hint: The solution is just 3 lines of code.*/
//solution
var c = a
a = b
b = c
console.log(`the value of a is ${a}`)
console.log(`the value of b is ${b}`)

console.log('the value of a is ' + a)
console.log('the value of b is ' +b)

//Naming convention examples"
var myName = "pema"
var myvar = "abc"
var my123 = my123
var my_name = "thinley"
var userFinalScore = 78

//string concatenation
var message = "hello";
var myName = 'pema'
alert(message + " there " + myName)
console.log(`hello there ${myName}`)
console.log(message + " there " + myName)

//string length and Retriving the number of character
var myName = 'pema'
var resutl = myName.length //length is used to count the number of characters in a string
alert(resutl)


