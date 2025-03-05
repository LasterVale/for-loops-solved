// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());


export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const acctNames = [];
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    const name = account.name.toLowerCase();
    const names = account.name;
    for (let j = 0; j < name.length; j++) {
      if (name[j] === letter.toLowerCase()) {
        acctNames.push(names);
        break;
      }
    }
  }
  return acctNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
