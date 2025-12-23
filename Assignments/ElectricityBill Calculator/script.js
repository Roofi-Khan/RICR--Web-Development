function calculate() {
  const units = Number(document.getElementById("units").value);
  const l=document.getElementById("result");
  const unit = document.createElement("div");
  unit.classList.add("container", "d-flex", "w-25");
  let charge = 0;
  if (units <= 50) {
    charge = units * 0.5;
    const d1 = document.createElement("div");
    d1.innerText = `${units}`;
    const d2=document.createElement("div");
    d2.innerText=`${charge}`;
    unit.appendChild(d1);
    unit.appendChild(d2);
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
