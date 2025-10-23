# Homework Assignment: JavaScript Object Manipulation with Node.js

## 🎯Objective
In this assignment, you will practice working with JavaScript objects, arrays, and loops. You will write a script in Node.js that processes a list of objects and creates a new object based on the lengths of the values in the original objects. This will help you understand how to manipulate objects and arrays in JavaScript.
<hr/>

## deliverable
A PDF to Canvas with a link to a GitHub repo that includes the following:

file - ```sculptureScript.js``` [you write your solution here!]

file - ```data.js``` [given to you!]

file - ```readme.md``` [this file **must** include the content of ```sculptureListLengths``` object that you create in your solution]

file - feel free to include any other files but the above 3 are the minimum acceptable submission.

<hr/>

### Script

```JavaScript
for (let i = 0; i < sculptureList.length; i++) {
    const sculpture = sculptureList[i];
    const sculptureLengths = {};
    
    // For each key in the sculpture object, create a new object with the same keys
    // but values are the length of the corresponding string values
    for (const key in sculpture) {
        sculptureLengths[key] = sculpture[key].length;
    }
    
    // Add the sculpture lengths to our main object
    sculptureListLengths[i] = sculptureLengths;
}

// Log the sculptureListLengths object to verify results
console.log('sculptureListLengths:', JSON.stringify(sculptureListLengths, null, 2));

// Also log the first element to match the example in the readme
console.log('\nFirst element of sculptureListLengths:');
console.log(JSON.stringify(sculptureListLengths[0], null, 2));

```