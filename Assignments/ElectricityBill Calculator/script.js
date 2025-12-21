function calculate() {
  const units = Number(document.getElementById("units").value);
  const l=document.getElementById("result");
  const unit = document.createElement("div");
  unit.classList.add("container", "d-flex");
  let charge = 0;
  if (units <= 50) {
    charge = units * 0.5;
    const p1 = document.createElement("p");
    p1.innerText = `${units}`;
    const p2=document.createElement("p");
    p2.innerText=`${charge}`;
    unit.appendChild(p1);
    unit.appendChild(p2);
    l.appendChild(unit);
  }
  if (units <= 200) {
    charge = 50 * 0.5 + (units - 50) * 0.75;
  }
  if (units <= 450) {
    charge = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
  } else {
    charge = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;
  }
  console.log(charge);
  const total = charge + charge * 0.2;
  console.log(total);

  
}
