const arr1 = [2, 4, 8, 10, 14];

// Create a new array to store the result
const newArr = [];

// Loop through the elements of arr1
for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]); // Add the existing element

    // Check if the next element is missing and it's not the last element
    if (i < arr1.length - 1 && arr1[i + 1] - arr1[i] > 2) {
        for (let j = arr1[i] + 2; j < arr1[i + 1]; j += 2) {
            newArr.push(j); // Add the missing odd numbers
        }
    }
}

console.log(newArr);


const arr = ["January", 23, "March", "December", 20, 30, "November", 33];

// a. Print all string values in a new array
const stringValues = arr.filter(item => typeof item === 'string');
console.log("String values:", stringValues);

// b. Print all number values in a new array
const numberValues = arr.filter(item => typeof item === 'number');
console.log("Number values:", numberValues);

let a = 5;
let b = 10;

// Swapping values using arithmetic operations
a = a + b; // a = 15, b = 10
b = a - b; // a = 15, b = 5
a = a - b; // a = 10, b = 5

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

for (let o = 0; o < 5; o++) {
    console.log(o);
  }