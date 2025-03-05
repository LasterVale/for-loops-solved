
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts, bankAccounts2 } from "../data/data";
function accountNames(array) {
  let acctNames = [];
  for (let acct of bankAccounts2) {
    acctNames.push(acct.name);
  }
  return acctNames;
}
console.log(accountNames());

function checkBalance(array) {
  const wrongBalances = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    const current = bankAccounts[i];

    for (const transaction in current.deposits) {
      totalDeposits += current.deposits[transaction];
    }

    for (const transaction in current.withdrawals) {
      totalWithdrawals += current.withdrawals[transaction];
    }

    const calculatedBalance = totalDeposits - totalWithdrawals;

    if (calculatedBalance !== current.balance) {
      wrongBalances.push(current);
    }
  }
  return wrongBalances;
}
console.log(checkBalance());









export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const wrongBalances = [];

  for (let i = 0; i < array.length; i++) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    const current = array[i];

    for (const transaction in current.deposits) {
      totalDeposits += current.deposits[transaction];
    }

    for (const transaction in current.withdrawals) {
      totalWithdrawals += current.withdrawals[transaction];
    }

    const calculatedBalance = totalDeposits - totalWithdrawals;

    if (calculatedBalance !== current.balance) {
      wrongBalances.push(current);
    }
  }
  return wrongBalances;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
