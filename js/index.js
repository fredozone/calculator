// show real time 
function timeClock(){
    var day = new Date();
    var hours = day.getHours();
    hours = (hours % 12) || 12;
    let minutes = day.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var finalTime = hours + ":" + minutes; 
    document.getElementById("time").innerHTML = finalTime;
}

setInterval(timeClock, 1000);

let totalNumer = document.getElementById("total");
let number = "";
var firstnumber = "";
let operatorMath = "";
let dotMat = ".";

function addnumber(e){
    if(number.length < 20){
        number += e;
        totalNumer.innerHTML = addCommaNumber(number);
    }
}

function dot(){
    let numberString = number.toString().replace(/,/g, '');
    // search if the find the 0. in the string 
    if(numberString.indexOf(dotMat) === -1 ){
        if(numberString == "" || numberString == 0){
            dotMat = "0.";
            numberString = dotMat + numberString;
        }else if(numberString >= 0 || numberString <= 0){
            dotMat = ".";
            numberString = numberString.concat("", dotMat);
        }
    }
    number = numberString;
    totalNumer.innerHTML = number;
}

function operator(e){
    let cerozero = [];
    operatorMath = e;

    if(number == "" || number == "Error"){
        number = "0";
    }
    firstnumber = number.toString();
    // deleteing the ceros on the left
    let textNumer = firstnumber.replace(/^0+/,'');
    for(let j=0; j < textNumer.length; j++){
        if(textNumer[0] == "."){
                cerozero = "0"+textNumer;
        }else{
            cerozero = textNumer;
        }
        firstnumber = cerozero;
    }

    totalNumer.innerHTML = operatorMath;
    number = "";
}

function equal(){

    //removing the , in my string firstnumber to be able to do the math
    if(operatorMath === '÷'){
        if(number != "0"){
            if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
                totalOne = Number(firstnumber.replace(/,/g, '')) / Number(number.replace(/,/g, ''));
                total = totalOne.toFixed(2).replace(/\.00$/, '');
            }else{
                totalOne = Number(firstnumber) / Number(number);
                total = totalOne.toFixed(2).replace(/\.00$/, '');
            }
        }else{
            total = "Error";
        }
        number = total;
    }else if(operatorMath === '×'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            totalOne = Number(firstnumber.replace(/,/g, '')) * Number(number.replace(/,/g, ''));
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }else{
            totalOne = Number(firstnumber) * Number(number);
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }
        number = total;
    }else if(operatorMath === '-'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            totalOne = Number(firstnumber.replace(/,/g, '')) - Number(number.replace(/,/g, ''));
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }else{
            totalOne = Number(firstnumber) - Number(number);
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }
        number = total;
    }else if(operatorMath === '+'){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            totalOne = Number(firstnumber.replace(/,/g, '')) + Number(number.replace(/,/g, ''));
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }else{
            totalOne = Number(firstnumber) + Number(number);
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }
        number = total;
    }else if(operatorMath === "%"){
        if(firstnumber.replace(/,/g, '') || number.replace(/,/g, '')){
            totalOne =  Number(number.replace(/,/g, '')) * (Number(firstnumber.replace(/,/g, '') / 100));
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }else{
            totalOne =  Number(firstnumber) * (Number(number) / 100);
            total = totalOne.toFixed(2).replace(/\.00$/, '');
        }
        number = total;
    }

    if(!firstnumber || !operatorMath){
        firstnumber = "0";
        total = Number(firstnumber) + Number(number);
        number = total;
    }
    let aqui = parseFloat(firstnumber.replace(/,/g, ''));
    let num = parseFloat(aqui); // convert the string to a float
    let formattedNum = num.toFixed(2);
    console.log(formattedNum);
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

    totalNumer.innerHTML = addCommaNumber(number);
}

function addCommaNumber(e){
    const str = e.toString(); // convert to string
    const isNegative = str.charAt(0) === '-';
    const [integerPart, decimalPart] = str.replace('-', '').split('.'); // remove negative sign if present and split into integer and decimal parts
    let formattedInteger = '';
    
    // add commas to the integer part
    for (let i = integerPart.length - 1; i >= 0; i--) {
      const digit = integerPart.charAt(i);
      formattedInteger = digit + formattedInteger; // prepend the digit to the formatted integer
      if ((integerPart.length - i) % 3 === 0 && i !== 0) {
        formattedInteger = ',' + formattedInteger; // add a comma after every 3 digits (except for the last group)
      }
    }
    
    // combine the formatted integer and decimal parts, and add negative sign if necessary
    let result = isNegative ? '-' + formattedInteger : formattedInteger;
    if (decimalPart !== undefined) {
      result += '.' + decimalPart;
    }
    
    return result;
}