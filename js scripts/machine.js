// creating a machine to avoid code repetation and get the id value

function getInputIdValue(id) {
  const inputValue = document.getElementById(id);
  const value = inputValue.value;
  console.log(value);
  return value;
}

function getCurrentAmount() {
  const valueCurrent = document.getElementById("current-balance");
  const currentBalance = valueCurrent.innerText;
  return Number(currentBalance);
}

function setBalance(value) {
  const valueCurrent = document.getElementById("current-balance");
  valueCurrent.innerText = value;
}

// we will show only the class when respective button is pressed
function visibleClass(id) {
  //get the class
  const addMoney = document.getElementById("addMoneyDiv");
  const cashOut = document.getElementById("cashOut-div");
  const transactions = document.getElementById('Transactions-history');
  // hide all the classes
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transactions.classList.add('hidden')

  // ekhn jei id wala button a click korse oitare only show korum
  const showOnly = document.getElementById(id);
  showOnly.classList.remove("hidden");
}
