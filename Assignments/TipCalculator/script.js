function calculate(){
    const ba=document.getElementById("billAmount").value;
    const serv=document.getElementById("service").value;
    const np=document.getElementById("persons").value;
    const result=Number((ba*serv)/np);

    const o=document.getElementById("contri");
    const s=document.createElement("span");
    const d=document.createElement("div");
    d.innerText="each";
    s.innerText=`${result}Rs`
    s.appendChild(d);
    o.appendChild(s);
    
    
}