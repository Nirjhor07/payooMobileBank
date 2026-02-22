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
    alert(
      `cash out succesful from ${agentNumber} and the amount is ${cashOutAmount}`,
    );
    balance.innerText = newBalance;

    //get the transtion parent div
    const parentTransitionDiv = document.getElementById(
      "Transactions-history-container",
    );
    //create a new div
    const newTransitionDiv = document.createElement("div");
    newTransitionDiv.className = "w-full bg-base-200 text-xl p-4 mb-5 rounded";
    // set the transtion history
    newTransitionDiv.innerHTML = `
     <div class="w-full bg-base-200 text-xl " id="Transactions-card">
           cash out succesful from ${agentNumber} and the amount is ${cashOutAmount}
     </div>
    `;

    //append the newchild or div to the parent
    parentTransitionDiv.appendChild(newTransitionDiv);
  } else {
    alert("Invalid pin!");
    return;
  }
});
