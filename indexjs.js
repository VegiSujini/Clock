var breakfasttime = "07:00";
var lunchtime = "13:00";
var dinnertime = "19:00";

function myFunction() {
  var x1 = document.getElementById("breakfastTimeSelector").value;
  var x2 = document.getElementById("lunchTimeSelector").value;
  var x3 = document.getElementById("dinnerTimeSelector").value;
  //   var m1 = parseInt(breakfasttime);
  //   var n1 = parseInt(x1);
  //   var m2 = parseInt(lunchtime);
  //   var n2 = parseInt(x2);
  //   var m3 = parseInt(dinnertime);
  //   var n3 = parseInt(x2);
  var m1 = breakfasttime.split(":");
  m1 = parseInt(m1[0]);
  var m2 = lunchtime.split(":");
  m2 = parseInt(m2[0]);
  var m3 = dinnertime.split(":");
  m3 = parseInt(m3[0]);
  var n1 = x1.split(":");
  n1 = parseInt(n1[0]);
  var n2 = x2.split(":");
  n2 = parseInt(n2[0]);
  var n3 = x3.split(":");
  n3 = parseInt(n3[0]);
  console.log(m1, m2, m3, n1, n2, n3);
  if (m1 === n1 && m2 === n2 && m3 === n3) {
    var messageText12 = "You are awesome!";
    document.getElementById("demo2").innerHTML = messageText12;
  } else if (
    (m1 === n1 && m2 === n2) ||
    (m2 === n2 && m3 === n3) ||
    (m3 === n3 && m1 === n1)
  ) {
    var messageText12 = "You need to improve a bit!";
    document.getElementById("demo2").innerHTML = messageText12;
  } else {
    var messageText12 = "Poor habits!";
    document.getElementById("demo2").innerHTML = messageText12;
  }
  //   if (m1 == n1) {
  //     document.getElementById("demo1").innerHTML = x1;
  //     var messageText11 = "Good Morning";
  //     document.getElementById("demo1").innerHTML = messageText11;
  //   } else {
  //     document.getElementById("demo1").innerHTML = x1;
  //     var messageText11 = "Good Morning";
  //     document.getElementById("demo1").innerHTML = messageText11;
  //     var messageText12 = "Please Follow the Time :)";
  //     document.getElementById("demo2").innerHTML = messageText12;
  //   }

  //   if (m2 == n2) {
  //     document.getElementById("demo1").innerHTML = x2;
  //     var messageText21 = "Good Afternoon";
  //     document.getElementById("demo1").innerHTML = messageText21;
  //     var messageText22 = "It's best time to eat lunch";
  //     document.getElementById("demo2").innerHTML = messageText22;
  //   } else {
  //     document.getElementById("demo1").innerHTML = x2;
  //     var messageText21 = "Good Afternoon";
  //     document.getElementById("demo1").innerHTML = messageText21;
  //     var messageText22 = "Please Follow the Time :)";
  //     document.getElementById("demo2").innerHTML = messageText22;
  //   }

  //   if (m3 == n3) {
  //     document.getElementById("demo1").innerHTML = x3;
  //     var messageText3 = "Good Evening";
  //     document.getElementById("demo1").innerHTML = messageText31;
  //     var messageText31 = "It's best time to eat Dinner";
  //     document.getElementById("demo2").innerHTML = messageText32;
  //   } else {
  //     document.getElementById("demo1").innerHTML = x3;
  //     var messageText31 = "Good Evening";
  //     document.getElementById("demo1").innerHTML = messageText31;
  //     var messageText32 = "Please Follow the Time :)";
  //     document.getElementById("demo2").innerHTML = messageText32;
  //   }
}
