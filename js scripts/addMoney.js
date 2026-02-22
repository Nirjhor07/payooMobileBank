// console.log("add money is connectted ");

document.getElementById("addMoney-btn").addEventListener("click", function () {
  //   console.log("add money is clicked");

  //get the selectted bank name
  const bankAccount = getInputIdValue("addMoneyBankAccount");
  // console.log(bankAccount);
  if (bankAccount === "Select a bank") {
    alert("please select a bank ");
    return;
  }

  // get the bank account number
  const bankAccountNumber = getInputIdValue("addMoneyBankAccountNumber");
  //validate if the bank account number is valid ('11 digit') or not
  if (bankAccountNumber.length != 11) {
    alert("Invalid bank account");
    return;
  }

  //get the amount
  const addMoneyAmount = getInputIdValue("addMoneyAmount");

  // get the current Amount
  const currentBalance = getCurrentAmount();
  //   console.log(currentBalance);

  // new balance
  const addMoneyNewBalance = currentBalance + Number(addMoneyAmount);
  console.log(addMoneyNewBalance);

  // get the pin
  const bankPin = getInputIdValue("addMoney-pin");
  if (bankPin === "1234") {
    alert("Add money succesfull");
    setBalance(addMoneyNewBalance);
  } else {
    alert("invalid pin");
    return;
  }
});
