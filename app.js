//console.log("Hellooo");

/*document.getElementById("num01");
document.getElementById("num02");
document.getElementById("output");*/


function calc(){
    let number1=document.getElementById("num01").value;
    let number2=document.getElementById("num02").value;
    let output=document.getElementById("output");

    let answer=number1+number2;


    output.innerHTML=answer;

}


