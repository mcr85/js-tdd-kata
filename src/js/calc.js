function Calc() {
    this.delimeters = ['\n', ','];
}

Calc.prototype.constructor = Calc;

Calc.prototype.add = function(numbers) {
    var components, 
        result = 0,
        defaultDelimeter;

    // no values
    if (!numbers) {
        return '';
    }

    // one value
    if (numbers.length === 1) {
        return parseInt(numbers, 10);
    }

    defaultDelimeter = numbers.match(/\/\/(.)\n/);
    if (!!defaultDelimeter) {
        this.delimeters[1] = defaultDelimeter[1];
        numbers = numbers.slice(numbers.indexOf(this.delimeters[0]) + 1);
    }

    components = numbers.split(this.delimeters[0])
                        .join(this.delimeters[1])
                        .split(this.delimeters[1]);

    for (var i = 0; i < components.length; i++) {
        result += parseInt(components[i], 10);
    }

    // two values
    return result;
};
