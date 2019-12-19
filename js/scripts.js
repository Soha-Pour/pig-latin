var pigLatin = function(input) {
  if ((input.charAt(0) === "a") || (input.charAt(0) === "i") || (input.charAt(0) === "o") || (input.charAt(0) === "u") || (input.charAt(0) === "y")) {
    return (input + "ay");
  } else if {

  }
};


$(document).ready(function() {
  $("form#sentenceInput").submit(function(event) {
    event.preventDefault();

    var input = $("input#sentence").val();
    var resultText = pigLatin(input);

    alert(resultText);




  });




});
