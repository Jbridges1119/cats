const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
    else functionToRunWhenThingsAreDone(undefined)
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
//breedDetailsFromFile('Bombay', printOutCatBreed);


module.exports = breedDetailsFromFile;






// breedDetailsFromFile('Bombay', printOutCatBreed);
// // ---this command gives out function a literal name("breed") and a callback function(printOutCatBreed)

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   // ---our name literal is inputed into a read file search(readfile: name, format, (error, file data))
//  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//   // ---if it doesn't error we then run our callback function (functionToRunWhenThingsAreDone(data) = printOutCatBreed(breed))
//    if (!error) functionToRunWhenThingsAreDone(data);});};
//   // ---we now run printOutCatBreed(data) - data is the breed variable.
// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed)
//   // ---this prints "return value: and the txt from "readFile"
// };