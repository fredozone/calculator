// show real time 

var day = new Date();
var hours = day.getHours();
hours = (hours % 12) || 12;
var minutes = day.getMinutes() ;
var finalTime = hours + ":" + minutes; 

let time = document.getElementById("time").innerHTML = finalTime;
let totalNumer = document.getElementById("total");
let number = "";
var firstnumber = "";
let operatorMath = "";
let equealsMath = "";
let dotMat = "0.";

function addnumber(e){
    number += e;
    totalNumer.innerHTML = number;
}

function dot(){
    let numberString = number.toString();
    // search if the find the 0. in the string 
    if(numberString.search(dotMat) == '-1' ){
        if(numberString == "" || numberString == 0){
            numberString = dotMat + numberString;
            number = numberString;
            totalNumer.innerHTML = number;
        }
    }
}

function operator(e){
    let cerozero = [];
    operatorMath = e;
    
    if(number == "" || number == "Error"){
        number = "0";
    }
    firstnumber = number.toString();
    // deleteing the ceros on the left
    let textNumer = firstnumber.replace(/^0+/, '');
    for(let j=0; j < textNumer.length; j++){
        console.log("textNumer[j] : " + textNumer[j]);
        if(textNumer[0] == "."){
                cerozero = "0"+textNumer;
        }else{
            cerozero = textNumer;
        }
        firstnumber = cerozero;
    }

    totalNumer.innerHTML = firstnumber;
    number = "";
}

function equal(e){
    equealsMath = e;
    if(operatorMath === '÷'){
        if(number != "0"){
            total = Number(firstnumber) / Number(number);
        }else{
            total = "Error";
        }
        number = total;
    }else if(operatorMath === '×'){
        total = Number(firstnumber) * Number(number);
        number = total;
    }else if(operatorMath === '-'){
        total = Number(firstnumber) - Number(number);
        number = total;
    }else if(operatorMath === '+'){
        total = Number(firstnumber) + Number(number);
        number = total;
    }else if(operatorMath === "%"){
        total =  Number(firstnumber) * (Number(number) / 100);
        number = total;
    }

    if(!firstnumber || !operatorMath){
        firstnumber = "0";
        total = Number(firstnumber) + Number(number);
        number = total;
    }

    firstnumber = "";
    operatorMath = "";
    totalNumer.innerHTML = total;
}

function clearMath(){
    number = "";
    firstnumber = "";
    total = "";
    operatorMath = "";
    totalNumer.innerHTML = "0";
}

function plusminus(){

    if(number > 0 || number == ""){
        number = "-" + number;
    }else{
        // created a new array to latter fill with the numbers
        let positive = [];
        let numberString = number.toString();
        for(let i=0; i < numberString.length; i++){
            if(numberString[i] != '-'){
                positive += numberString[i];
            }     
        }
        number = positive;
    }  
    number.toString;
    totalNumer.innerHTML = number;
}