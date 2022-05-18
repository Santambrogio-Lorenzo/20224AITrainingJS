var count = 2;
$("#btn1").click(function () {
  count++;
  var n1 = +$("#N1").val();
  var n2 = +$("#N2").val();
  //console.log(n1 -(-n2));
  console.log(n1 + n2);
  $("#table").append(
    "<tr><td>" +
      count +
      "</td><td>" +
      n1 +
      "</td><td>+</td><td>" +
      n2 +
      "</td><td>" +
      (n1 + n2) +
      "</td></tr>"
  );
});
$("#btn2").click(function () {
  count++;
  var n1 = +$("#N1").val();
  var n2 = +$("#N2").val();
  console.log(n1 - n2);
  $("#table").append(
    "<tr><td>" +
      count +
      "</td><td>" +
      n1 +
      "</td><td>-</td><td>" +
      n2 +
      "</td><td>" +
      (n1 - n2) +
      "</td></tr>"
  );
});
$("#btn3").click(function () {
  count++;
  var n1 = +$("#N1").val();
  var n2 = +$("#N2").val();
  console.log(n1 * n2);
  $("#table").append(
    "<tr><td>" +
      count +
      "</td><td>" +
      n1 +
      "</td><td>*</td><td>" +
      n2 +
      "</td><td>" +
      n1 * n2 +
      "</td></tr>"
  );
});
$("#btn4").click(function () {
  count++;
  var n1 = +$("#N1").val();
  var n2 = +$("#N2").val();
  console.log(n1 / n2);
  $("#table").append(
    "<tr><td>" +
      count +
      "</td><td>" +
      n1 +
      "</td><td>/</td><td>" +
      n2 +
      "</td><td>" +
      n1 / n2 +
      "</td></tr>"
  );
});
