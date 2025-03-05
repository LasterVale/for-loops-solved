// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());

function calculateSmallDeposits(array) {
  const totals = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    const obj = bankAccounts[i];
    let total = 0;

    if (obj.deposits && Array.isArray(obj.deposits)) {
      for (let j = 0; j < obj.deposits.length; j++) {
        const deposit = obj.deposits[j];
        if (deposit < 2000) {
          total += deposit;
        }
      }
    }
    totals.push(total);
  }
  return totals;
}
console.log(calculateSmallDeposits());

function processDeposits(array) {
  const totals = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    const obj = bankAccounts[i];
    let sum = 0;

    if (obj.deposits && Array.isArray(obj.deposits)) {
      for (let j = 0; j < obj.deposits.length; j++) {
        sum += obj.deposits[j];
      }
    }

    if (sum < 2000) {
      totals.push({ ...obj});
    }
  }
  return totals;
}
console.log(processDeposits());






export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const totals = [];

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    let sum = 0;

    if (obj.deposits && Array.isArray(obj.deposits)) {
      for (let j = 0; j < obj.deposits.length; j++) {
        sum += obj.deposits[j];
      }
    }

    if (sum < 2000) {
      totals.push({ ...obj});
    }
  }
  return totals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
