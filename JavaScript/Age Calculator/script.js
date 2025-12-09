function calculate(){
    const dob=document.getElementById("dob").value;
    const dobDate=new Date(dob);
    const yob=dobDate.getFullYear();

    const cd=document.getElementById("currentdate").value;
    const cdDate=new Date(cd);
     let cy=cdDate.getFullYear();

     console.log(yob);
     console.log(cy);
     const result=cy-yob;
     console.log(result);

     const res=document.createElement("p");
     res.classList.add("my-2");
     res.innerText=`Your age is ${result} years`;

     const label=document.getElementById("result");
     label.appendChild(res);
}