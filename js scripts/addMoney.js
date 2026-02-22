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
    alert(`Add money is succesfull from ${bankAccount} at ${new Date()}`);
    setBalance(addMoneyNewBalance);

    //get the transtion parent div
    const parentTransitionDiv = document.getElementById(
      "Transactions-history-container",
    );
    //create a new div
    const newTransitionDiv = document.createElement("div");
    newTransitionDiv.className = "w-full bg-base-200 text-xl p-4 mb-5 rounded";
    // set the transtion history
    newTransitionDiv.innerHTML = `
     <div class="w-full bg-base-200 text-xl " id="Transactions-card mb-5">
           Add money is succesfull from ${bankAccount} at ${new Date()}
     </div>
    `;

    //append the newchild or div to the parent
    parentTransitionDiv.appendChild(newTransitionDiv);
  } else {
    alert("invalid pin");
    return;
  }
});
