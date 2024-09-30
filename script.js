let balance = 0;

function checkBal() {
  document.getElementById("message").innerText = "Your balance is " + balance;
}

function dep() {
  let depositAmount = prompt("Enter amount to deposit");
  if (depositAmount && !isNaN(depositAmount)) {
    balance += parseFloat(depositAmount);
    document.getElementById("balance").value = balance;
    document.getElementById("message").innerText = "Deposit successful.";
  } else {
    document.getElementById("message").innerText = "Invalid deposit amount";
  }
}

function withdraw() {
  let withdrawAmount = prompt("Enter amount to withdraw:");
  if (withdrawAmount && !isNaN(withdrawAmount)) {
    if (balance >= withdrawAmount) {
      balance -= parseFloat(withdrawAmount);
      document.getElementById("balance").value = balance;
      document.getElementById("message").innerText = "Withdrawal successful.";
    } else {
      document.getElementById("message").innerText = "Insufficient funds.";
    }
  } else {
    document.getElementById("message").innerText = "Invalid withdrawal amount.";
  }
}

function exitATM() {
  balance = 0;
  const currentYear = new Date().getFullYear();
  document.getElementById("balance").value = balance;
  document.getElementById("message").innerText = "THANK YOU FOR USING ATM";
  document.getElementById(
    "copyright"
  ).innerHTML = `&copy; ${currentYear} RMAGALLANEZ. All rights reserved.`;
}
