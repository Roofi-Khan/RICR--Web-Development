function Input(char)
{
    if(char==='='){
       try{
        const exp= document.getElementById("result").value;
       document.getElementById("result").value=eval(exp);
       }
       catch(error){
        alert("Invalid Expression")
        document.getElementById("result").value="";
       }
    }
    else if(char==='C'){
        document.getElementById("result").value="";
    }else{
       let exp= document.getElementById("result").value;
       exp=exp+char;
       document.getElementById("result").value=exp;
    }

}