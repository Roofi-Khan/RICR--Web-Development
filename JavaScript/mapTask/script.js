
function search() {
  const audio=document.getElementById("stateSound").play();
  
  const text = document.getElementById("state").value;
  const img = document.getElementById("div");
  const div = document.createElement("div");
  div.classList.add("flag");
  div.innerText = "🚩";
  div.style.position = "absolute";
  div.style.zIndex = "99";
  div.style.width = "999px";

  const temp = document.createElement("p");
  
  if (text === "Andhra Pradesh") {
    div.style.top = "68%";
    div.style.left = "37%";
    temp.innerText = `State : Andhra Pradesh 
    Capital: Amravati`;
    img.appendChild(div);
  }
  if (text === "Arunachal Pradesh") {
    div.style.top = "26%";
    div.style.left = "85%";
    temp.innerText = `State : Arunachal Pradesh 
    Capital: Itanagar`;
    img.appendChild(div);
  }
  if (text === "Assam") {
    div.style.top = "32%";
    div.style.left = "80%";
    temp.innerText = `State : Assam 
    Capital: Dispur`;
    img.appendChild(div);
  }
  if (text === "Bihar") {
    div.style.top = "35%";
    div.style.left = "59%";
    temp.innerText = `State : Bihar 
    Capital: Patna`;
    img.appendChild(div);
  }
  if (text === "Punjab") {
    div.style.top = "19%";
    div.style.left = "30%";
    temp.innerText = `State : Punjab 
    Capital: Chandigarh`;
    img.appendChild(div);
  }
  if (text === "Chhattisgarh") {
    div.style.top = "47%";
    div.style.left = "47%";
    temp.innerText = `State : Chhattisgarh 
    Capital: Raipur`;
    img.appendChild(div);
  }
  if (text === "Delhi") {
    div.style.top = "26%";
    div.style.left = "32%";
    temp.innerText = `State : Delhi 
    Capital: New Delhi`;
    img.appendChild(div);
  }
  if (text === "Goa") {
    div.style.top = "65.5%";
    div.style.left = "20%";
    temp.innerText = `State : Goa 
    Capital: Panaji`;
    img.appendChild(div);
  }
  if (text === "Gujarat") {
    div.style.top = "42%";
    div.style.left = "15%";
    temp.innerText = `State : Gujarat 
    Capital: Gandhinagar`;
    img.appendChild(div);
  }
  if (text === "Haryana") {
    div.style.top = "24%";
    div.style.left = "30%";
    temp.innerText = `State : Haryana 
    Capital: Chandigarh`;
    img.appendChild(div);
  }
  if (text === "Himachal Pradesh") {
    div.style.top = "16%";
    div.style.left = "34%";
    temp.innerText = `State : Himachal Pradesh 
    Capital: Shimla`;
    img.appendChild(div);
  }
  if (text === "Jammu & Kashmir") {
    div.style.top = "10%";
    div.style.left = "27%";
    temp.innerText = `State : Jammu & Kashmir 
    Capital: Srinagar`;
    img.appendChild(div);
  }
  if (text === "Jharkhand") {
    div.style.top = "41%";
    div.style.left = "57%";
    temp.innerText = `State : Jharkhand 
    Capital: Ranchi`;
    img.appendChild(div);
  }
  if (text === "Karnataka") {
    div.style.top = "68%";
    div.style.left = "26%";
    temp.innerText = `State : Karnataka 
    Capital: Bengaluru`;
    img.appendChild(div);
  }
  if (text === "Kerala") {
    div.style.top = "83%";
    div.style.left = "28%";
    temp.innerText = `State : Kerala 
    Capital: Thiruvananthapuram`;
    img.appendChild(div);
  }
  if (text === "Ladakh") {
    div.style.top = "7%";
    div.style.left = "32%";
    temp.innerText = `State : Ladakh 
    Capital: Leh`;
    img.appendChild(div);
  }
  if (text === "Madhya Pradesh") {
    div.style.top = "42%";
    div.style.left = "35%";
    temp.innerText = `State : Madhya Pradesh 
    Capital: Bhopal`;
    img.appendChild(div);
  }
  if (text === "Maharashtra") {
    div.style.top = "53%";
    div.style.left = "25%";
    temp.innerText = `State : Maharashtra 
    Capital: Mumbai`;
    img.appendChild(div);
  }
  if (text === "Manipur") {
    div.style.top = "37%";
    div.style.left = "84%";
    temp.innerText = `State : Manipur 
    Capital: Imphal`;
    img.appendChild(div);
  }
  if (text === "Meghalaya") {
    div.style.top = "35%";
    div.style.left = "77%";
    temp.innerText = `State : Meghalaya 
    Capital: Shillong`;
    img.appendChild(div);
  }
  if (text === "Mizoram") {
    div.style.top = "42%";
    div.style.left = "81%";
    temp.innerText = `State : Mizoram 
    Capital: Aizawl`;
    img.appendChild(div);
  }
  if (text === "Nagaland") {
    div.style.top = "32%";
    div.style.left = "86%";
    temp.innerText = `State : Nagaland 
    Capital: Kohima`;
    img.appendChild(div);
  }
  if (text === "Odisha") {
    div.style.top = "50%";
    div.style.left = "50%";
    temp.innerText = `State : Odisha 
    Capital: Bhubaneswar`;
    img.appendChild(div);
  }

  if (text === "Rajasthan") {
    div.style.top = "30%";
    div.style.left = "20%";
    temp.innerText = `State : Rajasthan 
    Capital: Jaipur`;
    img.appendChild(div);
  }
  if (text === "Sikkim") {
    div.style.top = "30%";
    div.style.left = "66.8%";
    temp.innerText = `State : Sikkim 
    Capital: Gangtok`;
    img.appendChild(div);
  }
  if (text === "Tamil Nadu") {
    div.style.top = "80%";
    div.style.left = "35%";
    temp.innerText = `State : Tamil Nadu 
    Capital: Chennai`;
    img.appendChild(div);
  }
  if (text === "Telangana") {
    div.style.top = "58%";
    div.style.left = "37%";
    temp.innerText = `State : Telangana 
    Capital: Hyderabad`;
    img.appendChild(div);
  }
  if (text === "Tripura") {
    div.style.top = "40%";
    div.style.left = "77%";
    temp.innerText = `State : Tripura 
    Capital: Agartala`;
    img.appendChild(div);
  }
  if (text === "Uttar Pradesh") {
    div.style.top = "32%";
    div.style.left = "43%";
    temp.innerText = `State : Uttar Pradesh 
    Capital: Lucknow`;
    img.appendChild(div);
  }
  if (text === "Uttarakhand") {
    div.style.top = "21%";
    div.style.left = "39%";
    temp.innerText = `State : Uttarakhand 
    Capital: Dehradun`;
    img.appendChild(div);
  }
  if (text === "West Bengal") {
    div.style.top = "41%";
    div.style.left = "65%";
    temp.innerText = `State : West Bengal 
    Capital: Kolkata`;
    img.appendChild(div);
  }

  div.addEventListener("mouseenter", () => {
    div.appendChild(temp);
  });
  div.addEventListener("mouseleave", () => {
    div.removeChild(temp);
  });
  
}

function resetFlags() {
  // Remove all flag markers
  const sound=document.getElementById("allStatesSound").play();
  const flags = document.querySelectorAll(".flag");
  flags.forEach((flag) => flag.remove());
  
  // Reset dropdown
  document.getElementById("state").value = "-";
}

function allStates() {
  const sound=document.getElementById("allStatesSound").play();
  const img = document.getElementById("div");
  const states = [
    { name: "Andhra Pradesh", top: "68%", left: "37%", capital: "Amravati" },
    { name: "Arunachal Pradesh", top: "26%", left: "85%", capital: "Itanagar" },
    { name: "Assam", top: "32%", left: "80%", capital: "Dispur" },
    { name: "Bihar", top: "35%", left: "59%", capital: "Patna" },
    { name: "Punjab", top: "19%", left: "30%", capital: "Chandigarh" },
    { name: "Chhattisgarh", top: "47%", left: "47%", capital: "Raipur" },
    { name: "Delhi", top: "26%", left: "32%", capital: "New Delhi" },
    { name: "Goa", top: "65.5%", left: "20%", capital: "Panaji" },
    { name: "Gujarat", top: "42%", left: "15%", capital: "Gandhinagar" },
    { name: "Haryana", top: "24%", left: "30%", capital: "Chandigarh" },
    { name: "Himachal Pradesh", top: "16%", left: "34%", capital: "Shimla" },
    { name: "Jammu & Kashmir", top: "10%", left: "27%", capital: "Srinagar" },
    { name: "Jharkhand", top: "41%", left: "57%", capital: "Ranchi" },
    { name: "Karnataka", top: "68%", left: "26%", capital: "Bengaluru" },
    { name: "Kerala", top: "83%", left: "28%", capital: "Thiruvananthapuram" },
    { name: "Ladakh", top: "7%", left: "32%", capital: "Leh" },
    { name: "Madhya Pradesh", top: "42%", left: "35%", capital: "Bhopal" },
    { name: "Maharashtra", top: "53%", left: "25%", capital: "Mumbai" },
    { name: "Manipur", top: "37%", left: "84%", capital: "Imphal" },
    { name: "Meghalaya", top: "35%", left: "77%", capital: "Shillong" },
    { name: "Mizoram", top: "42%", left: "81%", capital: "Aizawl" },
    { name: "Nagaland", top: "32%", left: "86%", capital: "Kohima" },
    { name: "Odisha", top: "50%", left: "50%", capital: "Bhubaneswar" },
    { name: "Rajasthan", top: "30%", left: "20%", capital: "Jaipur" },
    { name: "Sikkim", top: "30%", left: "66.8%", capital: "Gangtok" },
    { name: "Tamil Nadu", top: "80%", left: "35%", capital: "Chennai" },
    { name: "Telangana", top: "58%", left: "37%", capital: "Hyderabad" },
    { name: "Tripura", top: "40%", left: "77%", capital: "Agartala" },
    { name: "Uttar Pradesh", top: "32%", left: "43%", capital: "Lucknow" },
    { name: "Uttarakhand", top: "21%", left: "39%", capital: "Dehradun" },
    { name: "West Bengal", top: "41%", left: "65%", capital: "Kolkata" },
  ];
  resetFlags();
  states.forEach(({ name, top, left, capital }) => {
    const div = document.createElement("div");
    div.classList.add("flag");
    div.innerText = "🚩";
    div.style.position = "absolute";
    div.style.zIndex = "99";
    div.style.top = top;
    div.style.left = left;
    
    const temp = document.createElement("p");
    temp.innerText = `State : ${name}\nCapital: ${capital}`;
    // temp.style.whiteSpace = "pre-line";
    img.appendChild(div);
    div.addEventListener("mouseenter", () => {
      div.appendChild(temp);
    });
    div.addEventListener("mouseleave", () => {
      div.removeChild(temp);
    });
  });
}
