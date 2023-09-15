document.getElementById("button").addEventListener("click", btnclick);

function btnclick() {
  let userQuestion = document.getElementById("question").value;
  document.getElementById("answer").innerHTML = getResponse(userQuestion);
}

function getResponse(question) {
  // getting a response
  if (question == "Does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (question == "") {
    return "Please ask a question…";
  } else if (question == "Is JavaScript awesome?") {
    return "Of Course!";
  } else {
    return randomResponse();
  }
}

function randomResponse() {
  // generating a random response
  odds = Math.random();
  if (odds < 0.2) {
    return "Without a Doubt.";
  } else if (odds < 0.4) {
    return "As I see it, yes.";
  } else if (odds < 0.6) {
    return "Concentrate and ask again.";
  } else if (odds < 0.8) {
    return "Don't count on it.";
  } else {
    return "Outlook not so good.";
  }
}
