function calculate() {
  const units = Number(document.getElementById("units").value);
  const res = document.getElementById("result");
  const d = document.createElement("div");
  d.classList.add("row", "rounded");
  d.innerHTML = `<div class="col-6 border border-dark"><b>Units</b></div>
          <div class="col-6 border border-dark"><b>Charge</b></div>`;
  res.appendChild(d);
  let charge = 0;
  if (units <= 50) {
    charge = units * 0.5;
    const d1 = document.createElement("div");
    d1.classList.add("row", "rounded");
    d1.innerHTML = `<div class="col-6 border border-dark">${units}</div>
          <div class="col-6 border border-dark">${charge}</div>`;
    res.appendChild(d1);
  } else if (units <= 200) {
    charge = 50 * 0.5 + (units - 50) * 0.75;
    const d1 = document.createElement("div");
    d1.classList.add("row", "rounded");
    d1.innerHTML = `<div class="col-6 border border-dark">${50}</div>
          <div class="col-6 border border-dark">${50 * 0.5}</div>`;
    res.appendChild(d1);

    const d2 = document.createElement("div");
    d2.classList.add("row", "rounded");
    d2.innerHTML = `<div class="col-6 border border-dark">${units - 50}</div>
          <div class="col-6 border border-dark">${(units - 50) * 0.75}</div>`;

    res.appendChild(d2);
  } else if (units <= 450) {
    charge = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
    const d1 = document.createElement("div");
    d1.classList.add("row", "rounded");
    d1.innerHTML = `<div class="col-6 border border-dark">${50}</div>
          <div class="col-6 border border-dark">${50 * 0.5}</div>`;
    res.appendChild(d1);

    const d2 = document.createElement("div");
    d2.classList.add("row", "rounded");
    d2.innerHTML = `<div class="col-6 border border-dark">${150}</div>
          <div class="col-6 border border-dark">${150 * 0.75}</div>`;
    res.appendChild(d2);

    const d3 = document.createElement("div");
    d3.classList.add("row", "rounded");
    d3.innerHTML = `<div class="col-6 border border-dark">${units - 200}</div>
          <div class="col-6 border border-dark">${(units - 200) * 1.2}</div>`;
    res.appendChild(d3);
  } else {
    charge = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;

    const d1 = document.createElement("div");
    d1.classList.add("row", "rounded");
    d1.innerHTML = `<div class="col-6 border border-dark">${50}</div>
          <div class="col-6 border border-dark">${50 * 0.5}</div>`;
    res.appendChild(d1);

    const d2 = document.createElement("div");
    d2.classList.add("row", "rounded");
    d2.innerHTML = `<div class="col-6 border border-dark">${150}</div>
          <div class="col-6 border border-dark">${150 * 0.75}</div>`;
    res.appendChild(d2);

    const d3 = document.createElement("div");
    d3.classList.add("row", "rounded");
    d3.innerHTML = `<div class="col-6 border border-dark">${250}</div>
          <div class="col-6 border border-dark">${250 * 1.2}</div>`;
    res.appendChild(d3);

    const d4 = document.createElement("div");
    d4.classList.add("row", "rounded");
    d4.innerHTML = `<div class="col-6 border border-dark">${units - 450}</div>
          <div class="col-6 border border-dark">${(units - 450) * 1.5}</div>`;
    res.appendChild(d4);
  }
  const d5 = document.createElement("div");
  d5.classList.add("row", "rounded");
  d5.innerHTML = `<div class="col-6 border border-dark"><b>Total Units: ${units}</b></div>
  <div class="col-6 border border-dark"><b>SubTotal: ${charge}</b></div>`;
  res.appendChild(d5);

  const d6 = document.createElement("div");
  d6.classList.add("row", "rounded");
  d6.innerHTML = `<div class="col-12 border border-dark text-center"><b>Surcharge Amount: ${
    charge * 0.2
  }</b></div>`;
  res.appendChild(d6);

  const d7 = document.createElement("div");
  d7.classList.add("row", "rounded");
  d7.innerHTML = `<div class="col-12 border border-dark text-center"><b>Grand Total: ${
    charge + charge * 0.2
  }</b></div>`;
  res.appendChild(d7);
}

function reset() {
  window.location.reload();
}
