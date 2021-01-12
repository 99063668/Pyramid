var ShowPyramid = document.getElementById("ShowPyramid");
var LengthInput = document.getElementById("Length");
var text = document.getElementById("Text");
var input = parseInt(LengthInput.value);

var Array = [];

ShowPyramid.onclick = function(){
  Pyramid();
};

LengthInput.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();

    ShowPyramid.click();
  }
});

function Pyramid() {
  input = parseInt(LengthInput.value);
  Array = [];
  text.innerHTML = '';

  if(isNaN(input)){
    text.innerHTML = 'U heeft geen nummer ingevuld.';
  } else {
    for (var i = 0; i <= input; i++) {
      Array.push(i);
      text.innerHTML += Array + "<br>";
    }
  }
}
