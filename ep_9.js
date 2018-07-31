let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Profession plum, because the let that defines it as Mrs Peacock is insde of the if statement. If it was a var variable it would be reassigned to Mrs. Peacock.
