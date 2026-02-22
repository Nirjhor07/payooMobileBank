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
