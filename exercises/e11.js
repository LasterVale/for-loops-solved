// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());

function processWithdrawals(array) {
  const results = [];
  for (let i = 0; i < bankAccounts.length; i++) {
      const obj = bankAccounts[i];
      if (obj.withdrawals && Array.isArray(obj.withdrawals)) {
          let sum = 0;
          for (let j = 0; j < obj.withdrawals.length; j++) {
              sum += obj.withdrawals[j];
          }
          results.push(sum);
      } else {
          results.push(0);
      }
  }
  return results;
}
console.log(processWithdrawals())


function sumWithdrawals(array) {
  const withdrawals = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    let sum = 0;
    if (bankAccounts[i].withdrawals) {
      for (let j = 0; j < bankAccounts[i].withdrawals.length; j++) {
        sum += bankAccounts[i].withdrawals[j];
      }
      withdrawals.push(sum);
    }
  }
  return withdrawals.length > 0 ? withdrawals : 0;
}
console.log(sumWithdrawals())







export function getAllWithdrawals(array) {
  // Your code goes here...
  const results = [];
  for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      if (obj.withdrawals && Array.isArray(obj.withdrawals)) {
          let sum = 0;
          for (let j = 0; j < obj.withdrawals.length; j++) {
              sum += obj.withdrawals[j];
          }
          results.push(sum);
      } else {
          results.push(0);
      }
  }
  return results;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
