// business logic
var pingPongNumbers = [];


var pingPong = function(userInput){

  for (var i = 1; i <=userInput; i++) {

    if (i % 15 === 0) {
      pingPongNumbers.push("pingpong");

    } else if (i % 3 === 0) {
      pingPongNumbers.push("ping");

    } else if (i % 5 === 0){
      pingPongNumbers.push("pong");

    } else {
      pingPongNumbers.push(i);
    }
  };
};

// user interface logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);
    pingPongNumbers.forEach(function(numbers){
      $("#userResult").append("<li>" + numbers + "</li>");
      });

     //pingPongNumbers = pingPongNumbers.join(", ");

    // $("ul").append("<li>" + pingPongNumbers + "</li>");
    $("#userResult").show();
  });
});
