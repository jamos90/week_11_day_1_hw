//Episode 1

//js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//It should log Miss Scarlet as the murder. All the varialbes have the const declaration meaning they are viewable globally.

// Checked and was correct.
