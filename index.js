'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the alternatingCharacters function below.

// Epic: You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. 
//To do this, you are allowed to delete zero or more characters in the string. 
// Your task is to find the minimum number of required deletions.

// find length of consecutive characters to find number of deletions

function alternatingCharacters(string) {
  let duplicateCounter = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      duplicateCounter++;
    }
  }
  return duplicateCounter;
}
console.log(alternatingCharacters('AAABBB'));
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}

