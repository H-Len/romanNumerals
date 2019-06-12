//business logic

var numberToConvert;
var isANumber;
var romanNumeralArray = [];

function arrayResetter() {
  romanNumeralArray = [];
}
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

}

function singleDigitNumeralify(a, v){

};



function howManyDivision(inputNumber) {

  var howMany1000 = Math.floor(inputNumber/1000);
  inputNumber = inputNumber - (1000*howMany1000);
  console.log(inputNumber);
  var howMany500 = Math.floor(inputNumber/500);
  inputNumber = inputNumber - (500*howMany500);
  console.log(inputNumber);
  var howMany100 = Math.floor(inputNumber/100);
  inputNumber = inputNumber - (100*howMany100);
  console.log(inputNumber);
  var howMany50 = Math.floor(inputNumber/50);
  inputNumber = inputNumber - (50*howMany50);
  console.log(inputNumber);
  var howMany10 = Math.floor(inputNumber/10);
  inputNumber = inputNumber - (10*howMany10);
  console.log(inputNumber);
  var howMany5 = Math.floor(inputNumber/5);
  inputNumber = inputNumber - (5*howMany5);
  console.log(inputNumber);
  var howMany1 = Math.floor(inputNumber/1);
  inputNumber = inputNumber - (1*howMany1);
  console.log(inputNumber);


  for (i = 0; i < howMany1000; i++){
    romanNumeralArray.push(1000);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany500; i++){
    romanNumeralArray.push(500);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany100; i++){
    romanNumeralArray.push(100);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany50; i++){
    romanNumeralArray.push(50);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany10; i++){
    romanNumeralArray.push(10);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany5; i++){
    romanNumeralArray.push(5);
    console.log(romanNumeralArray);
  }
  for (i = 0; i < howMany1; i++){
    romanNumeralArray.push(1);
    console.log(romanNumeralArray);
  }
}

function fourthNumberModifier() {
  // finds instances of fourth number
  // romanNumeralArray.indexOf(500)
  // romanNumeralArray.indexOf(100)
  // romanNumeralArray.indexOf(50)
  // romanNumeralArray.indexOf(10)
  // romanNumeralArray.indexOf(5)
  var index1Factor = romanNumeralArray.indexOf(1,0)
  if (romanNumeralArray[index1Factor + 3] === 1){
    // deletes all four numbers
    romanNumeralArray.splice(index1Factor, index1Factor + 4);
    var array1Fixer = [1, 5];
    newArray = romanNumeralArray.concat(array1Fixer);
    console.log(newArray);
    romanNumeralArray = newArray;
    console.log("This is the output array: " + romanNumeralArray);
    console.log("fourth 1 detected!!");
  }

  var index5Factor = romanNumeralArray.indexOf(10,0)
  if (romanNumeralArray[index1Factor + 3] === 1){
    // deletes all four numbers
    romanNumeralArray.splice(index1Factor, index1Factor + 4);
    var array1Fixer = [1, 10];
    newArray = romanNumeralArray.concat(array1Fixer);
    console.log(newArray);
    console.log("fourth 5 detected!!");
  }
}


function fourthNumberModifierForEach() {

}



function romanNumeralConverter() {
  // arrayResetter();
  // numberGetter();
  // numberDetector(numberToConvert);
  // console.log("Is this a number: " + isANumber);
  // singleDigit(numberToConvert);
  // howManyDivision(numberToConvert);
  // fourthNumberModifier();
  // romanNumeralArray.every(singleDigit);
  // console.log(romanNumeralArray);

}








//UI logic

$(document).ready(function(){
console.log("hello from jquery!");



  $("#roman-numeral-form").submit(function(event){
    event.preventDefault();
    romanNumeralConverter();
  });

});
