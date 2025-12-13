const rn = Math.floor(Math.random() * 10 + 1);
console.log(rn);

function submit() {
  const num = document.getElementById("number").value;
  if (!/^(10|[1-9])$/.test(num)) {
    alert("Enter a valid number");
    return;
  }
  if (num > rn) {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    l.appendChild(p);
    // alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.")
  } else if (num < rn) {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    l.appendChild(p);
    // alert("OOPS! SORRY!!! TRY A LARGER NUMBER.")
  } else {
    const l = document.getElementById("result");
    const p = document.createElement("p");
    p.innerText = "CONGRATULATION.YOU DID IT";
    l.appendChild(p);
    // alert("CONGRATULATION.YOU DID IT");
  }
  
  document.getElementById("number").value = "";
}

