
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());

function getLargeDeposits(array) {
  const largeDeposits = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    const obj = bankAccounts[i];
    if (obj.deposits) {
      for (let j = 0; j < obj.deposits.length; j++) {
        const deposit = obj.deposits[j];
        if (deposit > 100) {
          largeDeposits.push(deposit);
        }
      }
    }
  }
  return largeDeposits;
}
console.log(getLargeDeposits());





export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const largeDeposits = [];
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    if (obj.deposits) {
      for (let j = 0; j < obj.deposits.length; j++) {
        const deposit = obj.deposits[j];
        if (deposit > 100) {
          largeDeposits.push(deposit);
        }
      }
    }
  }
  return largeDeposits;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
