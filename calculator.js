//display on the screen
//select an operation
//compute the displayed values with the selected operation
//clear the screen
//backspace incase of a mistake
// Applying solid principles
// const result = document.getElementById('result');
var Calculator = /** @class */ (function () {
    // class constructor:---
    function Calculator() {
        this.result = document.getElementById('result');
    }
    // class methods:----
    Calculator.prototype.displayNumber = function (data) {
        this.result.textContent += data;
    };
    Calculator.prototype.clearData = function () {
        this.result.textContent = '';
    };
    Calculator.prototype.backSpace = function () {
        this.result.textContent = this.result.textContent.slice(0, -1);
    };
    Calculator.prototype.compute = function () {
        try {
            this.result.textContent = eval(this.result.textContent);
        }
        catch (error) {
            alert('invalid');
        }
    };
    return Calculator;
}());
// instantiating 
var calc = new Calculator();
calc.displayNumber('0');
calc.backSpace();
calc.clearData();
calc.compute();
