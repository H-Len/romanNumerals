//business logic

var numberToConvert;
var isANumber;

function numberGetter(){
  numberToConvert = parseInt($("#numeral-input").val());
  console.log(numberToConvert);
}

function numberDetector(numberToTest){
  if (numberToTest % 1 === 0) {
    isANumber = true;
  } else{
    isANumber = false;
  }
}

function singleDigit(number) {
  if(number === 1) {
    number = "I";
  } else if (number === 5) {
    number = "V";
  } else if (number === 10) {
    number = "X";
  } else if (number === 50) {
    number = "L";
  } else if (number === 100) {
    number = "C";
  } else if (number === 500) {
    number = "D";
  } else if (number === 1000) {
    number = "M";

  }
  return number;
}








function romanNumeralConverter() {
  numberGetter();
  numberDetector(numberToConvert);
  singleDigit(numberToConvert);
  console.log(singleDigit(numberToConvert));
  console.log(isANumber);
}




//UI logic

$(document).ready(function(){
console.log("hello from jquery!");



  $("#roman-numeral-form").submit(function(event){
    event.preventDefault();
    romanNumeralConverter();
  });

});
