function Calc() {

}

Calc.prototype.constructor = Calc;

Calc.prototype.add = function(numbers) {
    var components, 
        result = 0;

    // no values
    if (!numbers) {
        return '';
    }

    // one value
    if (numbers.length === 1) {
        return parseInt(numbers, 10);
    }

    components = numbers.split(',');

    for (var i = 0; i < components.length; i++) {
        result += parseInt(components[i], 10);
    }

    // two values
    return result;
};
