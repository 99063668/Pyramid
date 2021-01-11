var Numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var ShowPyramid = document.getElementById("ShowPyramid");
ShowPyramid.onclick = function(){
  Pyramid()
};

function Pyramid() {
  var output = '';
  /*document.getElementById("Pyramid", "20");*/
  var Rows = prompt("Enter a number", "20");
  for (var i=1; i<=Rows; i++){
      for (var j=1; j<=i; j++){
          output += j+ '  ';
      }
      document.write(output);
      document.write("<br>");
      output = '';
  }
}

Pyramid();
