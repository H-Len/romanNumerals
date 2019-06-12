//Business Logic
var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var output = function(userInput) {
  var romanNumOutput = "";
  for (var i = arabicNum.length-1; i >= 0; i--) {
    while (userInput >= arabicNum[i]) {
      console.log(userInput);
      romanNumOutput += romanNum[i];
      console.log(romanNumOutput);
      userInput -= arabicNum[i];
      console.log(userInput);
    }
  }
  return romanNumOutput;
}

// User Interface Logic
$(document).ready(function(){
  console.log("jquery is working!");
  $("#roman-numeral-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = output(userInput);
    console.log(result);
    $("#romanNumeral").text(result);
  });
});
