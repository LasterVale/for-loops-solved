
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from "../data/data";
function getClientWithGreatestBalance1(array) {
  // Your code goes here...
  let highestBalance = -Infinity;
  let result = [];

  for (const obj of bankAccounts) {
    if (obj.balance > highestBalance) {
      highestBalance = obj.balance;
      result = [obj];
    }
  }

  return result.length > 0 ? result : [];
}
console.log(getClientWithGreatestBalance1())






export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let highestBalance = -Infinity;
  let result = [];

  for (const obj of array) {
    if (obj.balance > highestBalance) {
      highestBalance = obj.balance;
      result = [obj];
    }
  }

  return result.length > 0 ? result : [];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
