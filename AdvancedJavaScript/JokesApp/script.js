async function GetNewJoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  const data = await response.json();
  // console.log(data);
  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;
}
