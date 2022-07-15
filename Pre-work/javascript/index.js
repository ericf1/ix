const max = 5;
let counter = 0;
let lastTime = false;

document.querySelector("#submit-btn1").addEventListener("click", (e) => {
  e.preventDefault();
  if (counter >= max) {
    if (lastTime) {
      counter = 0;
      lastTime = false;
      const parent = document.querySelector(".added-text");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      return;
    }
    const successClick = document.createElement("div");
    successClick.innerHTML = "Max is 5 times!";
    document.querySelector(".added-text").append(successClick);
    lastTime = true;
    return;
  }
  const successClick = document.createElement("div");
  successClick.innerHTML = `You clicked ${counter} times!`;
  document.querySelector(".added-text").append(successClick);
  counter = counter + 1;
});
