let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);

//Miss Scarlet, Professor Plum and Colonel Mustard. Suspect 3 is redefined inside the function and called after it has been redefined.

console.log(`Suspect three is ${suspectThree}.`);

//Mrs. Peackock - suspect three is only redefined inside of the declareAllSuspects function and is not defined as a const so should not be visible outside of the function.
