function On(){
    document.getElementById("bulb").style.backgroundColor="yellow"
}

function Off(){
    document.getElementById("bulb").style.backgroundColor="white"
}

function red(){
    document.getElementById("bulb").style.backgroundColor="red"
}
function blue(){
    document.getElementById("bulb").style.backgroundColor="blue"
}
function green(){
    document.getElementById("bulb").style.backgroundColor="green"
}

const userColor= document.getElementById("color")

userColor.addEventListener("change",()=>changeBulbColor(userColor.value));

function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor=color;
}

function SB_Control(){
    const btn= document.getElementById("SB_btn")
    if(btn.innerText==="On")
    {
 document.getElementById("SB_btn").innerText="Off";
        document.getElementById("smartBulb").classList.add("on");
    }
    else{
        document.getElementById("SB_btn").innerText="On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function SB_Control2()
{
    document.getElementById("smartBulb").classList.toggle("on");
}

document.getElementById("c1").addEventListener("mouseenter",()=>{
    fillColor("Violet")
});
document.getElementById("c1").addEventListener("mouseleave",()=>{
    fillColor("white")
});
function fillColor(color){
    document.getElementById("rainbow").style.backgroundColor=color;
}

document.getElementById("c2").addEventListener("mouseenter",()=>{
    fillColor("indigo")
});
document.getElementById("c2").addEventListener("mouseleave",()=>{
    fillColor("white")
});

document.getElementById("c3").addEventListener("mouseenter",()=>{
    fillColor("blue")
});
document.getElementById("c3").addEventListener("mouseleave",()=>{
    fillColor("white")
});

document.getElementById("c4").addEventListener("mouseenter",()=>{
    fillColor("green")
});
document.getElementById("c4").addEventListener("mouseleave",()=>{
    fillColor("white")
});

document.getElementById("c5").addEventListener("mouseenter",()=>{
    fillColor("yellow")
});
document.getElementById("c5").addEventListener("mouseleave",()=>{
    fillColor("white")
});

document.getElementById("c6").addEventListener("mouseenter",()=>{
    fillColor("orange")
});
document.getElementById("c6").addEventListener("mouseleave",()=>{
    fillColor("white")
});

document.getElementById("c7").addEventListener("mouseenter",()=>{
    fillColor("red")
});
document.getElementById("c7").addEventListener("mouseleave",()=>{
    fillColor("white")
});
