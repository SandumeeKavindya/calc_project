//console.log("Hellooo");

/*document.getElementById("num01");
document.getElementById("num02");
document.getElementById("output");*/


function calc(){
    let number1;
    let number2;

    number1=new Number(document.getElementById("num01").value);
    number2=new Number(document.getElementById("num02").value);
    let output=document.getElementById("output");


    output.innerHTML=number1 + number2;

}


