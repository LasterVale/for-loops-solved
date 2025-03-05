// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());


function getClientWithLeastPositiveBalance1(array) {
  // Your code goes here...
  let lowestBalance = Infinity;
  let result = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    const balance = bankAccounts[i].balance;
    if (balance > 0 && balance < lowestBalance) {
      lowestBalance = balance;
      result = [bankAccounts[i]];
    } else if (balance === lowestBalance && lowestBalance !== Infinity) {
      result.push(bankAccounts[i]);
    }
  }

  return result.length > 0 ? result : [];
}
console.log(getClientWithLeastPositiveBalance1())









export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let lowestBalance = Infinity;
  let result = [];

  for (const obj of array) {
    if (obj.balance > 0 && obj.balance < lowestBalance) {
      lowestBalance = obj.balance;
      result = [obj];
    }
  }

  return result.length > 0 ? result : [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function