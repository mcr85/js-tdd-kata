function Calc() {

}

Calc.prototype.constructor = Calc;

Calc.prototype.add = function(numbers) {
    if (!numbers) {
        return '';
    }

    if (numbers.length === 1) {
        return parseInt(numbers, 10);
    }

};
