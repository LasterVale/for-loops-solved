
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

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
  const result = [];
  for (let n = 0; n < bankAccounts.length; n++) {
    if (bankAccounts[n].balance > 100) {
      result.push(bankAccounts[n]);
    }
  }
  return result;
}
console.log(getClientWithLeastPositiveBalance1())





export function getClientsWithBalanceOverOneHundred(array) {
  // Your code goes here...
  const result = [];
  for (let n = 0; n < array.length; n++) {
    if (array[n].balance > 100) {
      result.push(array[n]);
    }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
