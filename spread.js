const max =  Math.max(16, 12, 23, 32, 55, 104, 110);
console.log(max);


/* javascript spread operator
ChatGPT
The spread operator in JavaScript is denoted by three consecutive dots (...) and is used to "spread" the elements of an iterable (like an array or a string) into individual elements. It's a versatile operator that is commonly used for various operations like array copying, function arguments, and object merging.

Here are some common use cases of the spread operator:

Array Spreading:

You can use the spread operator to create a new array by spreading the elements of an existing array into it.


const originalArray = [1, 2, 3];
const newArray = [...originalArray]; // Creates a new array with the same elements
Function Arguments:

The spread operator can be used to pass the elements of an array as individual arguments to a function.


function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // Equivalent to sum(1, 2, 3)
Concatenating Arrays:

You can concatenate arrays easily using the spread operator.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
Object Spreading:

With ES2018 (ES9) and later, you can use the spread operator to merge properties from one object into another.

const obj1 = { foo: 'bar' };
const obj2 = { baz: 'qux' };
const mergedObj = { ...obj1, ...obj2 }; // { foo: 'bar', baz: 'qux' }
String to Array Conversion:

You can spread a string into an array of characters.

javascript
const str = 'hello';
const charArray = [...str]; // ['h', 'e', 'l', 'l', 'o']
Cloning Objects:

While the spread operator works well for shallow copying of objects, it doesn't perform deep cloning.


const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = { ...originalObj }; // Shallow copy
Remember that the spread operator is a useful tool for creating new data structures based on existing ones or for expanding iterables into individual elements. It simplifies many common programming tasks and is widely used in modern JavaScript development.
 */




