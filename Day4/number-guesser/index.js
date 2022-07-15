const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

let randomNumber = getRandomNumber();
document.getElementById("user-guess-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const guess = document.getElementById("user-guess").value;
  if (guess === "") {
    wrong("no input");
  }
  if (parseInt(guess) === randomNumber) {
    correct();
    return;
  }
  if (parseInt(guess) > randomNumber) {
    wrong("higher");
    return;
  }
  if (parseInt(guess) < randomNumber) {
    wrong("lower");
    return;
  }
});

const correct = () => {
  const correctAlert = document.createElement("div");
  correctAlert.classList.add("alert");
  correctAlert.classList.add("alert-success");
  correctAlert.classList.add("mt-3");
  correctAlert.innerHTML = `You got it correct! The number was ${randomNumber}`;
  const alertDiv = document.getElementById("alert");
  while (alertDiv.firstChild) {
    alertDiv.removeChild(alertDiv.firstChild);
  }
  alertDiv.append(correctAlert);
  randomNumber = getRandomNumber();
  document.getElementById("user-guess").value = "";
};

const wrong = (higherOrLower) => {
  const wrongAlert = document.createElement("div");
  wrongAlert.classList.add("alert");
  wrongAlert.classList.add("alert-danger");
  wrongAlert.classList.add("mt-3");
  if (higherOrLower === "higher") {
    wrongAlert.innerHTML =
      "Try again! That was wrong :( Your number needs to be lower!";
  } else if (higherOrLower === "lower") {
    wrongAlert.innerHTML =
      "Try again! That was wrong :( Your number needs to be higher!";
  } else {
    wrongAlert.innerHTML = "Enter something";
  }

  const alertDiv = document.getElementById("alert");
  while (alertDiv.firstChild) {
    alertDiv.removeChild(alertDiv.firstChild);
  }
  alertDiv.append(wrongAlert);
};
