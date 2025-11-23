function submit() {
  // const batch=document.querySelectorAll("input[name='batch']:checked");
  // console.log(batch);

  // let selectedBatchTiming=[];
  // batch.forEach((element)=>{
  //     selectedBatchTiming.push(element.value)
  // })
  // console.log(selectedBatchTiming);

  //   let selectedBatchTiming = [];
  //   document
  //     .querySelectorAll("input[name='batch']:checked")
  //     .forEach((element) => {
  //       selectedBatchTiming.push(element.value);
  //     });
  //   console.log(selectedBatchTiming);

  //   const selectedBatch=document.querySelector("input[name='gender']:checked").value;
  //   console.log(selectedBatch);

  const fullname = document.getElementById("fullName").value;
  const selectedGender = document.querySelector(
    "input[name='gender']:checked"
  ).value;

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
  const coachingInfo=document.getElementById("coachingInfo").value;

  console.log("Full Name:" + fullname);
  console.log("Gender:" + selectedGender);
  console.log("Email:" + email);
  console.log("number:" + number);
  console.log("Date of Birth:" + dob);
  console.log("Qualification:" + qualification);
  console.log("Percentage:" + grade);
  console.log("Course:" + course);
  console.log(selectedBatchTiming);
  console.log("Address:" + address);
  console.log("City:" + city);
  console.log("Pin Code:" + pincode);
  console.log("Guardian Name:" + gname);
  console.log("Guardian Number:" + gnumber);
  console.log("Information from"+coachingInfo);
}
