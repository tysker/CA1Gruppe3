function urlStr(e) {
    var operator = e.target.value;
    switch (operator) {
        case "+":
            operator = "add";
            break;
        case "-":
            operator = "sub";
            break;
        case "*":
            operator = "mul";
            break;
        case "/":
            operator = "div";
            break;
    }
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    document.getElementById("urlStr").innerHTML = "calculator?operation=" + operator + "&n1=" + n1 + "&n2=" + n2;
    fetchStr(operator,n1,n2)
}
;
document.getElementById('buttons').addEventListener('click', urlStr);

function fetchStr(operation, n1, n2) {
    fetch(`calculator?operation=${operation}&n1=${n1}&n2=${n2}`)
            .then(res => res.text())
            .then(d => { document.getElementById("fetchStr").innerHTML = d;
            });
}

function clear() {
    document.getElementById("cc").reset();
}
document.getElementById('clear').addEventListener('click', clear);

function stop(event) {
    event.stopPropagation();
}