function submit() {
  const fullname = document.getElementById("fullName").value.trim();

  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const dob = document.getElementById("dob").value;
  const qualification = document.getElementById("qualification").value;
  const grade = document.getElementById("score").value;
  const course = document.getElementById("course").value;

  let selectedBatchTiming = [];
  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatchTiming.push(element.value);
    });
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pinCode").value;
  const gname = document.getElementById("guardianName").value;
  const gnumber = document.getElementById("guardianNumber").value;
  const coachingInfo = document.getElementById("coachingInfo").value;

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  if (!fullname) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(fullname)) {
    document.getElementById("NameError").innerText =
      "Please enter a valid name";
    return;
  }

  if (!email) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (
    !/^[\w\.]+@(gmail|yahoo|example|outlook)\.(com|in|co.in)$/.test(email)
  ) {
    document.getElementById("EmailError").innerText =
      "Please enter a valid email address";
    return;
  }

  if (!number) {
    document.getElementById("NumberError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(number)) {
    document.getElementById("NumberError").innerText =
      "Enter a 10 digit Indian Mobile Number";
    return;
  }

  if (!dob) {
    document.getElementById("DobError").innerText = "Required";
    return;
  } else {
    const cy = new Date().getFullYear;
    const dy = new Date(dob).getFullYear;
    if (cy - dy < 15) {
      document.getElementById("DobError").innerText =
        "You must be atleast 15 years old";
      return;
    }
  }

  if (!qualification) {
    document.getElementById("QualificationError").innerText =
      "Please select a qualification";
    return;
  }

  if (!grade) {
    document.getElementById("ScoreError").innerText = "Required";
    return;
  } else if (/^[A-F|1-100]$/.test(grade)) {
    document.getElementById("ScoreError").innerText =
      "Please enter a valid percentage or grade";
    return;
  }

  if (!course) {
    document.getElementById("CourseError").innerText = "Select a course";
    return;
  }

  if (selectedBatchTiming.length === 0) {
    document.getElementById("BatchError").innerText = "Select a batch timing";
    return;
  }

  if(!address){
     document.getElementById("AddressError").innerText = "Required";
    return;
  }

  if (!city) {
    document.getElementById("CityError").innerText = "Required";
    return;
  } 
  // else if (/^[A-Za-z ]+$/.test(city)) {
  //   document.getElementById("CityError").innerText =
  //     "Please enter a valid city name";
  //   return;
  // }

  if (!pincode) {
    document.getElementById("PinCode").innerText = "Required";
    return;
  } else if (/^[1-9]\d{5}$/.test(pincode)) {
    document.getElementById("PinCode").innerText =
      "Enter a valid 6-digit pin code";
    return;
  }

  if (!gname) {
    document.getElementById("GuarNameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(gname)) {
    document.getElementById("GuarNameError").innerText =
      "Enter guardian's full name";
    return;
  }

  if (!gnumber) {
    document.getElementById("GuarNumError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(number)) {
    document.getElementById("GuarNumError").innerText =
      "Enter a 10 digit contact Number";
    return;
  }

  if (!coachingInfo) {
    document.getElementById("CoachingInfoError").innerText = "Required";
    return;
  }
}
