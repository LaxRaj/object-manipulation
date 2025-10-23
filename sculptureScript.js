const sculptureList = require('./data.js'); // import data.js

// Create an empty object to store the results
const sculptureListLengths = {};

// Loop through each object in sculptureList
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
