function Calc() {

}

Calc.prototype.constructor = Calc;

Calc.prototype.add = function(numbers) {
    var components;

    // no values
    if (!numbers) {
        return '';
    }

    // one value
    if (numbers.length === 1) {
        return parseInt(numbers, 10);
    }

    components = numbers.split(',');

    // two values
    return parseInt(components[0], 10) + parseInt(components[1], 10);
};
