// --loginBtn Event handler --//
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transitionArea = document.getElementById("transition-area");
  transitionArea.style.display = "block";
});

// --Deposit Btn Event handler --//
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  // --Current balance deposit --//
  const depositInput = document.getElementById("depositInput").value;
  const depositNumber = parseFloat(depositInput);

  const currentDeposit = document.getElementById("depositAmount");
  const currentDepositAmount = currentDeposit.innerText;
  const currentDepositNumber = parseFloat(currentDepositAmount);
  currentDeposit.innerText = depositNumber + currentDepositNumber;

  //   //   --Current balance amount --//
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  const balanceNumber = parseFloat(balanceAmount);
  const totalCurrentAmount = depositNumber + balanceNumber;
  document.getElementById("balanceAmount").innerText = totalCurrentAmount;

  //--clear the input --//
  document.getElementById("depositInput").value = "";
});

// --Withrow Btn Event handler --//
const withrowBtn = document.getElementById("withrowBtn");
withrowBtn.addEventListener("click", function () {
  // --current Withrow Balance --//
  const withrowInput = document.getElementById("withrowInput").value;
  const withrowNumber = parseFloat(withrowInput);

  const currentWithrow = document.getElementById("withrowAmount");
  const currentWithrowAmount = currentWithrow.innerText;
  const currentWithrowNumber = parseFloat(currentWithrowAmount);
  const totalCurrentWithrow = withrowNumber + currentWithrowNumber;
  currentWithrow.innerText = totalCurrentWithrow;

  //   //   --Current balance amount --//
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  const balanceNumber = parseFloat(balanceAmount);
  const totalCurrentAmount = balanceNumber - withrowNumber;
  document.getElementById("balanceAmount").innerText = totalCurrentAmount;

  //--clear the input --//
  document.getElementById("withrowInput").value = "";
});

// --get input amount --//
function getInput(id) {
  const inputAmount = document.getElementById(id).value;
  const inputAmountNumber = parseFloat(inputAmount);
  return inputAmountNumber;
}
