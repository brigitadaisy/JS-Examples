/* Author: Oscar Parra
   Last Update: 7/15/17 
   Program Description:
   Basic 4-function calculator with a reset option
*/

var out = document.getElementById("output");

function addition(v1, v2){
	var value = parseInt(v1) + parseInt(v2);
	var element = '<span> Value ='+ value + '</span>'; 
	out.innerHTML = element;
}

function subtract(v1, v2){
	var value = parseInt(v1) - parseInt(v2);
	var element = '<span> Value ='+ value + '</span>';
	out.innerHTML = element;
}

function multiply(v1, v2){
	var value = parseInt(v1) * parseInt(v2);
	var element = '<span> Value ='+ value + '</span>';
	out.innerHTML = element;
}

function divide(v1, v2){
	var value = parseInt(v1) - parseInt(v2);
	var element = '<span> Value ='+ value + '</span>';
	out.innerHTML = element;
}


function controller(arg1){
    console.log(arg1);
    var value1 = document.getElementById("input-ele").value;
    var value2 = document.getElementById("input-ele2").value;
    var oper = document.getElementById("operation").value;
    
    if(oper == "+"){
    	addition(value1, value2);
    }else if(oper == "-"){
    	subtract(value1, value2);
    }else if(oper == "*"){
    	multiply(value1, value2);
    }else
        divide(value1, value2);	  
}

function reset(){
   var form = document.getElementById("usr-inputs"); 
   var result = document.getElementById("output");
   form.reset();
   result.innerHTML = "";
}