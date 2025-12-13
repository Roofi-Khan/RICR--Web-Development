function submit() {
  const num = document.getElementById("number").value;
  if (!/^(10|[1-9])$/.test(num)) {
    alert("Enter a valid number");
    return;
  }
  const rn = Math.floor(Math.random() * 10 + 1);
  console.log(rn);

  if (num > rn) {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    l.appendChild(p);
    // alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.")
  }
  if (num < rn) {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    l.appendChild(p);
    // alert("OOPS! SORRY!!! TRY A LARGER NUMBER.")
  }
  if (num === rn) {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    l.appendChild(p);
    // alert("CONGRATULATION.YOU DID IT");
  }

  document.getElementById("number").value = "";
}
