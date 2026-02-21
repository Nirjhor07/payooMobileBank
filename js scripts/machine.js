// creating a machine to avoid code repetation and get the id value

function getInputIdValue(id) {
  const inputValue = document.getElementById(id);
  const value = inputValue.value;
//   console.log(value)
  return value;
}
