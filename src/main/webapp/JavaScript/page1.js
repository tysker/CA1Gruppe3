//Implement a simple calculator
//Implement a calculator with the functionality given below .
//a. When a button is clicked the value should be appended to the display div (middle figure)
//b. When the equal sign is clicked the result of the calculation must be presented. (last figure)
//c. Use the HTML and Style given below to get started

//Hints (and these are just hints, there are many ways to solve this problem)
//● Assign a single click event handler to the div with the buttons id to handle anything but the “=” button.
//● Use your knowledge about event bubbling and the events target property to get the text in the div that was clicked (via the innerText property).
//● Assign a new event handler to the div with the “ calculate ” id. Use the event arguments .stopPropagation() method, to prevent this event from bubbling up to your “outer” event handler.
//● Use the indexOff(..) method to test whether a string contains *, /, + or -.
//● Use split(..) (with one of the four operators) to get the two numeric values and use Number(..) to convert a numeric string into a number before you do the calculation.
var add = "+";
var sub = "-";
var mul = "*";
var div = "/";

//Calculation functions
function addRes(n1, n2){
    return n1 + n2;
}

function subRes(n1, n2){
    return n1 - n2;
}

function mulRes(n1, n2){
    return n1 * n2;
}

function divRes(n1, n2){
    return n1 / n2;
}

function click(e) {
    var input = e.target.innerText;
    var existingInput = document.getElementById('display').innerText;
    document.getElementById('display').innerText = existingInput + '' + input;
};
document.getElementById('buttons').addEventListener('click', click);

function calculate() {
    var display = document.getElementById('display').innerText;
    //var result = eval(display);
    var result = evalDisplay(display, getResult);
    document.getElementById('display').innerText = result;
}
document.getElementById('calculate').addEventListener('click', calculate);

function stop(event) {
    event.stopPropagation();
}

function evalDisplay(display, callback) {
    var operator;

    if(display.indexOf(add) !== -1) operator = add;
    if(display.indexOf(sub) !== -1) operator = sub;
    if(display.indexOf(mul) !== -1) operator = mul;
    if(display.indexOf(div) !== -1) operator = div;

    return callback(display, operator);
}

function getResult(display, operator){
    var _result = display.split(operator);

    var operation = function (n1, n2, callback) {
        return callback(n1, n2);
    };

    switch(operator){
        case add: 
        var result = operation(Number(_result[0]), Number(_result[1]), addRes);
        break; 

        case sub: 
        var result = operation(Number(_result[0]), Number(_result[1]), subRes);
        break; 

        case mul: 
        var result = operation(Number(_result[0]), Number(_result[1]), mulRes);
        break; 

        case div: 
        var result = operation(Number(_result[0]), Number(_result[1]), divRes);
        break; 
    }
    
    return result;
}