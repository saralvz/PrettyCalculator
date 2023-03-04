//These will be the three variables that will be used to perform the operations (ex. first + second = total | 2 + 3 = 5)
var first;
var second;
var total;

//This function select by id the different fields from HTML and save then into they respective variables
function init() {
    //DOM: Operations
    var result = document.getElementById('result');
    var division = document.getElementById('division');
    var reset= document.getElementById('reset');
    var multiplication= document.getElementById('multiplication');
    var substraction= document.getElementById('substraction');
    var addition= document.getElementById('addition');
    var equal= document.getElementById('equal');
    
    //DOM: Numbers
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var zero = document.getElementById('zero');
    var double = document.getElementById('double');
    
    //Click events: numbers
    seven.onclick = function(e) {
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function(e) {
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function(e) {
        result.textContent = result.textContent + "9";
    }
    four.onclick = function(e) {
        result.textContent = result.textContent + "4";
    }
    five.onclick = function(e) {
        result.textContent = result.textContent + "5";
    }
    six.onclick = function(e) {
        result.textContent = result.textContent + "6";
    }
    one.onclick = function(e) {
        result.textContent = result.textContent + "1";
    }
    two.onclick = function(e) {
        result.textContent = result.textContent + "2";
    }
    three.onclick = function(e) {
        result.textContent = result.textContent + "3";
    }
    zero.onclick = function(e) {
        result.textContent = result.textContent + "0";
    }
    double.onclick = function(e) {
        result.textContent = result.textContent + "00";
    }

    //Click events: operations
    division.onclick = function(e) {
        first = result.textContent;
        total = "/";
        clean();
    }
    multiplication.onclick = function(e) {
        first = result.textContent;
        total = "*";
        clean();
    }
    substraction.onclick = function(e) {
        first = result.textContent;
        total = "-";
        clean();
    }
    addition.onclick = function(e) {
        first = result.textContent;
        total = "+";
        clean();
    }
    reset.onclick = function(e) {
        reboot();
    }
    equal.onclick = function(e) {
        second = result.textContent;
        resolve();
    }

    //Clean, reboot and resolve functions
    function clean() {
        result.textContent = "";
    }
    function reboot() {
        result.textContent = "";
        first = 0;
        second = 0;
        total = "";
    }
    function resolve() {
        var res = 0;
        switch(total) {
            case "/":
                res = parseFloat(first) / parseFloat(second);
                break;

            case "*":
                res = parseFloat(first) * parseFloat(second);
                break;
            
            case "-":
                res = parseFloat(first) - parseFloat(second);
                break;
            
            case "+":
                res = parseFloat(first) + parseFloat(second);
                break;
        }
        reboot();
        result.textContent = res;
    }
};

//The End :) <3





