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
let dotMat = "0.";

function addnumber(e){

    if(number.length < 11){
        number += e;
        totalNumer.innerHTML = addCommaNumber(number);
    }
}

function dot(){
    let numberString = number.toString();
    // search if the find the 0. in the string 
    if(numberString.search(dotMat) == '-1' ){
        if(numberString == "" || numberString == 0){
            numberString = dotMat + numberString;
            number = numberString.toString();
            totalNumer.innerHTML = number;
        }else if(numberString > 0 || numberString < 0){
            dotMat = ".";
            numberString = numberString + dotMat;
            number = numberString.toString();
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

function equal(){

    //removing the , in my string firstnumber to be able to do the math
    if(operatorMath === '÷'){
        if(number != "0"){
            if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
                total = Number(firstnumber.replace(/,/g, '')) / Number(number.replace(/,/g, ''));
            }else{
                total = Number(firstnumber) / Number(number);
            }
        }else{
            total = "Error";
        }
        number = total;
    }else if(operatorMath === '×'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            total = Number(firstnumber.replace(/,/g, '')) * Number(number.replace(/,/g, ''));
        }else{
            total = Number(firstnumber) * Number(number);
        }
        number = total;
    }else if(operatorMath === '-'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            total = Number(firstnumber.replace(/,/g, '')) - Number(number.replace(/,/g, ''));
        }else{
            total = Number(firstnumber) - Number(number);
        }
        number = total;
    }else if(operatorMath === '+'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            total = Number(firstnumber.replace(/,/g, '')) + Number(number.replace(/,/g, ''));
        }else{
            total = Number(firstnumber) + Number(number);
        }
        number = total;
    }else if(operatorMath === "%"){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            total =  Number(number.replace(/,/g, '')) * (Number(firstnumber.replace(/,/g, '') / 100));
        }else{
            total =  Number(firstnumber) * (Number(number) / 100);
        }
        number = total;
    }

    if(!firstnumber || !operatorMath){
        firstnumber = "0";
        total = Number(firstnumber) + Number(number);
        number = total;
    }

    firstnumber = "";
    operatorMath = "";
    
    totalNumer.innerHTML = addCommaNumber(total);
}

function clearMath(){
    number = "";
    firstnumber = "";
    total = "";
    operatorMath = "";
    totalNumer.innerHTML = "0";
}

function plusminus(){
    // removing the comma because js is not allow to use , 
    let removingComma = number.toString().replace(/,/g, '');
    // if the number is grater than 0 or iqual that nothing is going to add the -
    if(removingComma > 0 || removingComma == ""){
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

function addCommaNumber(e){
    const formatter = new Intl.NumberFormat('en-US');
    //   adding the e to be an string and deleting the comma
    const floatNum = parseFloat(e.toString().replace(/,/g, ''));
    let totalComma;
    // if is a string
    if(isNaN(floatNum)){
        totalComma = e;
    }else{

        // adding the comma
        totalComma = formatter.format(floatNum);
    }
    return number = totalComma;
}