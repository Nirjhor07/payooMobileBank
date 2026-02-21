console.log("File is connected");

document.getElementById("login-btn").addEventListener("click", function () {
  //   console.log("btn is clicked ");
  // getting the mobile number that the user input
  const inputNumber = document.getElementById("input-num");
  const numberInput = inputNumber.value;
  //   console.log(numberInput);

  // getting the pin that the user input
  const pin = document.getElementById("login-pin-4-digit");
  const inputPin = pin.value;
  //   console.log(inputPin);

  //now we will match mobile number and pin if
  // matched user will redirect to the home page
  // imagine the database has the phone number
  // Mob : 01871411854 Pin:1234

  if (numberInput === "01871411854" && inputPin === "1234") {
    alert("Succesfully logged in!!!");
    //redirect to the home page

    //replace dosent hold the prev history so you cannot goback
    // window.location.replace('/daisyUi.html')

    // if you want to have history use assign
    window.location.assign("/home.html");
  } else {
    alert("Credential dosent matched");
    return;
  }
});
