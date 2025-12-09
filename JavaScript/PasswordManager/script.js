function AddData() {
  const site = document.getElementById("siteName").value.trim();
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value.trim();
  const DataPacket = {
    website: site,
    user: un,
    password: ps,
  };

  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  Data.push(DataPacket);
  localStorage.setItem("PasswordManager", JSON.stringify(Data));

  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
}

function Download() {
  const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  if (data.length <= 0) {
    alert("No Data Found");
    return;
  }
  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data.map((item) => Object.values(item).join(",")).join("\n");

  const CSVContent = headers+rows;
  const blob=new Blob([CSVContent],{type: "text/csv"});

  const anchorTag=document.createElement("a");

  anchorTag.href=URL.createObjectURL(blob);
  anchorTag.download="data.csv";
  document.body.appendChild(anchorTag)
  anchorTag.click();
  document.body.remove(anchorTag);
//   localStorage.removeI
}
