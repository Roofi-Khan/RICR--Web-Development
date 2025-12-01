function start() {
  console.log("Game started");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Play() {
  console.log("Player1Playing");
  let Score = Number(document.getElementById("p1Score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  switch (DF) {
    case 1: {
      document.getElementById("p1dice").src = "./images/Image1.jpg";
      break;
    }
    case 2: {
      document.getElementById("p1dice").src = "./images/Image2.jpg";
      break;
    }
    case 3: {
      document.getElementById("p1dice").src = "./images/Image3.jpg";
      break;
    }
    case 4: {
      document.getElementById("p1dice").src = "./images/Image4.jpg";
      break;
    }
    case 5: {
      document.getElementById("p1dice").src = "./images/Image5.jpg";
      break;
    }
    case 6: {
      document.getElementById("p1dice").src = "./images/Image6.jpg";
      break;
    }
    default: {
      document.getElementById("p1dice").src = "./images/Image6.jpg";
      break;
    }
  }

  if (DF == 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1Score").innerText = Score;
  }
}

function p2Play() {
  console.log("Player2Playing");
  let Score = Number(document.getElementById("p2Score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p2dice").src = `./images/Image${DF}.jpg`;

  if (DF == 6) {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  } else {
    Score = Score + DF;
    document.getElementById("p2Score").innerText = Score;
  }
}
