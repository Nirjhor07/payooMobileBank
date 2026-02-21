// here adding event listerner to perform cashout event when the widraw money button is clicked

document.getElementById("Widraw-btn").addEventListener("click", function () {
  //get the agent number
  const agentNumber = getInputIdValue("input-agent-num");
//   console.log(agentNumber);
  if (agentNumber.length != 11) {
    alert("invalid Number");
    return;
  }

  //get the given amount or cash out amount
  const cashOutAmount = getInputIdValue("input-amount-num");
  //get the currentBalance
  const balance = document.getElementById("current-balance");
  const currentBalance = balance.innerText;
  //   console.log(currentBalance);

  //new balance
  const newBalance = Number(currentBalance) - Number(cashOutAmount);
  //   console.log(newBalance)
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  //get the pin
  const pin = getInputIdValue("widraw-pin");
  if (pin === "1234") {
    alert("cash out succesfull");
    balance.innerText = newBalance;
  } else {
    alert("Invalid pin!");
    return;
  }
});
