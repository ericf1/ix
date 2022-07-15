const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

let inARow = 0;
const getMovie = () => {
  const ranNum = Math.floor(Math.random() * movies.length);
  return movies[ranNum];
};

let curMovie = getMovie();
document.getElementById("user-guess-description").innerHTML =
  curMovie.explanation;

const correct = () => {
  inARow++;
  const correctAlert = document.createElement("div");
  correctAlert.classList.add("alert");
  correctAlert.classList.add("alert-success");
  correctAlert.classList.add("mt-3");
  correctAlert.innerHTML = `That was correct! You got ${inARow} times in a row!`;
  const alertDiv = document.getElementById("alert");
  while (alertDiv.firstChild) {
    alertDiv.removeChild(alertDiv.firstChild);
  }
  alertDiv.append(correctAlert);
  let curMovie = getMovie();
  document.getElementById("user-guess-description").innerHTML =
    curMovie.explanation;
  document.getElementById("user-guess").value = "";
  document.getElementById("uesrGuessHelp").innerHTML =
    "I know it is a little bit badly explained.";
};

const wrong = () => {
  inARow = 0;
  const wrongAlert = document.createElement("div");
  wrongAlert.classList.add("alert");
  wrongAlert.classList.add("alert-danger");
  wrongAlert.classList.add("mt-3");
  wrongAlert.innerHTML = "Try again! That was wrong :(";
  const alertDiv = document.getElementById("alert");
  while (alertDiv.firstChild) {
    alertDiv.removeChild(alertDiv.firstChild);
  }
  alertDiv.append(wrongAlert);
};

document.getElementById("user-guess-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const userGuess = document.getElementById("user-guess").value;
  if (userGuess === curMovie.title) {
    correct();
    return;
  }
  wrong();
});

document.getElementById("user-hint").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("uesrGuessHelp").innerHTML = curMovie.hint;
});
