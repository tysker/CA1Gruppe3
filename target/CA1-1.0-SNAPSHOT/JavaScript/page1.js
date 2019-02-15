function click(e) {
    var input = e.target.innerText;
    var existingInput = document.getElementById('display').innerText;
    document.getElementById('display').innerText = existingInput + '' + input;
};
document.getElementById('buttons').addEventListener('click', click);

function calculate() {
    var display = document.getElementById('display').innerText;
    var result = eval(display);
    document.getElementById('display').innerText = result;
}
document.getElementById('calculate').addEventListener('click', calculate);

function getResult(event) {
      event.stopPropagation();
  }