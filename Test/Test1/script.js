function submit() {
  const fullname = document.getElementById("fullName").value;
  const clg = document.getElementById("clgname").value;
  const branch = document.getElementById("branch").value;
  const sem = document.getElementById("semester").value;
  const selectedGender = document.querySelector(
    "input[name='gender']:checked"
  ).value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("number").value;
  const dob = document.getElementById("dob").value;
  const course = document.getElementById("course").value;

  console.log("Full Name:" + fullname);
  console.log("college name:" + clg);
  console.log("Branch:" + branch);
  console.log("Semester:" + sem);
  console.log("Gender:" + selectedGender);
  console.log("Email:" + email);
  console.log("Mobile Number:" + mobile);
  console.log("Date of Birth:" + dob);
  console.log("Courses:" + course);

  alert("Thank You for Enrolling " + fullname);
}

function submit1() {
  const fullname = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  console.log("Full Name:" + fullname);
  console.log("Email:" + email);
  console.log("Message:" + msg);

   alert("Thank You for Enrolling " + fullname);

}
