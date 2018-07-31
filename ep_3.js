let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//First verdict is Mrs Peacock as the original defintion is a let and is then redefined in the declareMurder function.

//Second verdict is Professor Plumb as the let that re-defines the murderer as Mrs Peacock is only inside the function and therefore not visible outside of it, meaning the original murder is still assigned to the murderer varialbe.

//Checked and correct.
