
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

import { classSeatsFlattened } from "../data/data";
function separateNamesByLetter(names, letter) {
  const withLetter = [];
  const withoutLetter = [];

  for (let i = 0; i < classSeatsFlattened.length; i++) {
    const name = classSeatsFlattened[i];
    let found = false;

    for (let j = 0; j < name.length; j++) {
      if (name[j] === 'a') {
        found = true;
        break;
      }
    }

    if (found) {
      withLetter[withLetter.length] = name;
    } else {
      withoutLetter[withoutLetter.length] = name;
    }
  }

  return [withLetter, withoutLetter];
}
console.log(separateNamesByLetter())

export function separateNamesWithAFromRest(array, letter) {
  // Your code goes here...
  const withLetter = [];
  const withoutLetter = [];

  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    let found = false;

    for (let j = 0; j < name.length; j++) {
      if (name[j] === 'a') {
        found = true;
        break;
      }
    }

    if (found) {
      withLetter[withLetter.length] = name;
    } else {
      withoutLetter[withoutLetter.length] = name;
    }
  }

  return [withLetter, withoutLetter];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
