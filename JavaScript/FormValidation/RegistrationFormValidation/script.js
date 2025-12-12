function submit() {
  const fullname = document.getElementById("fullName").value.trim();
//   const selectedGender = document.querySelector(
//     "input[name='gender']:checked"
//   ).value;

//   const email = document.getElementById("email").value;
//   const number = document.getElementById("number").value;
//   const dob = document.getElementById("dob").value;
//   const qualification = document.getElementById("qualification").value;
//   const grade = document.getElementById("score").value;
//   const course = document.getElementById("course").value;

//   let selectedBatchTiming = [];
//   document
//     .querySelectorAll("input[name='batch']:checked")
//     .forEach((element) => {
//       selectedBatchTiming.push(element.value);
//     });
//   const address = document.getElementById("address").value;
//   const city = document.getElementById("city").value;
//   const pincode = document.getElementById("pinCode").value;
//   const gname = document.getElementById("guardianName").value;
//   const gnumber = document.getElementById("guardianNumber").value;
//   const coachingInfo=document.getElementById("coachingInfo").value;

  document.querySelectorAll(".Error").forEach((element)=>{
    element.innerHTML="";
  });
  
  if(!fullname){
    document.getElementById("NameError").innerText="Required";
    return;
  }else if(!/^[A-Za-z ]+$/.test(fullname)){
     document.getElementById("NameError").innerText="Please enter a valid name";
    return;
  }
}
