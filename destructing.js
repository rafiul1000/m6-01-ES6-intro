/* necessity of destructuring

Destructuring in JavaScript provides a way to extract values from arrays and objects into distinct variables, making it more concise and readable to access and work with data. It can improve code clarity, reduce redundancy, and simplify variable assignments. The necessity of destructuring becomes apparent in several scenarios:

Array Destructuring:


const numbers = [1, 2, 3];
const [first, second, third] = numbers;
// first = 1, second = 2, third = 3
Multiple Assignments: Destructuring allows you to assign multiple variables from an array in a single line.
Object Destructuring:


const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
// firstName = 'John', lastName = 'Doe'
Selective Extraction: You can extract specific properties from an object without accessing them through dot notation or bracket notation.
Function Parameters:


function displayFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}
const person = { firstName: 'John', lastName: 'Doe' };
displayFullName(person);
// Outputs: "John Doe"
Parameter Extraction: Destructuring can simplify the extraction of properties directly from function parameters.
Default Values:


const person = { firstName: 'John' };
const { firstName, lastName = 'Doe' } = person;
// firstName = 'John', lastName = 'Doe'
Default Values: You can provide default values for properties that might be missing from the object.
Nested Destructuring:


const person = {
  name: { first: 'John', last: 'Doe' },
  age: 30,
};
const {
  name: { first, last },
  age,
} = person;
// first = 'John', last = 'Doe', age = 30
Nested Data Structures: Destructuring supports extracting values from nested objects or arrays.
Returning Multiple Values:

Functions can return an object or array, which can be destructured on the caller's side to access multiple return values.


function getDetails() {
  return { name: 'John', age: 30 };
}
const { name, age } = getDetails();
Destructuring enhances code readability and reduces the need for repetitive object or array access, especially when dealing with complex data structures. It's widely used in modern JavaScript development to make code more concise and maintainable. However, it's important to use destructuring judiciously and avoid overusing it in situations where it might reduce code clarity. */


function doubleThem(a, b){
    return [a*2, b*2];
}


const [prothom, ditiyo] = doubleThem(5, 10);
console.log(prothom, ditiyo);