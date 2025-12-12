function submit() {
  const nm = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("number").value;
  const db = document.getElementById("dob").value;

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  if (!nm) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("NameError").innerText =
      "Only alphabets and spaces are allowed";
    return;
  }

  if (!em) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("EmailError").innerText = "Use proper Email Id";
    return;
  }

  if (!ph) {
    document.getElementById("NumError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("NumError").innerText =
      "Only Indian Numbers are valid";
    return;
  }

  if (!db) {
    document.getElementById("DobError").innerText = "Required";
    return;
  } else {
    const cy = new Date().getFullYear();
    const dy = new Date(db).getFullYear();
    if (cy - dy < 18) {
      document.getElementById("DobError").innerText =
        "You must be 18 years old";
      return;
    }
  }

  const currentdate = new Date();
  console.log(currentdate);

  const data = {
    FullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
  };
}
