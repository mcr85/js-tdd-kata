function Calc() {
    this.delimeters = ['\n', ','];
}

Calc.prototype.constructor = Calc;

Calc.prototype.add = function(numbers) {
    var components, 
        result = 0,
        defaultDelimeter,
        parsedArg;

    this.numbers = numbers;

    // no values
    if (!this.numbers) {
        return '';
    }

    // one value
    if (this.numbers.length === 1) {
        return parseInt(this.numbers, 10);
    }

    handleCustomDelimeter.call(this);
    components = parseArgs.call(this, this.numbers, this.delimeters);

    for (var i = 0; i < components.length; i++) {
        parsedArg = parseInt(components[i], 10);
        if (parsedArg < 0) {
            throw new Error("negatives not allowed");
        }
        result += parsedArg;
    }

    // two or more values
    return result;
};

/**
 * sets custom delimeter and cuts delimeter part from numbers
 */
function handleCustomDelimeter() {
    var defaultDelimeter = this.numbers.match(/\/\/(.)\n/);
    if (!!defaultDelimeter) {
        this.delimeters[1] = defaultDelimeter[1];
        this.numbers = this.numbers.slice(this.numbers.indexOf(this.delimeters[0]) + 1);
    }
}

/**
 * @return {Array}
 */
function parseArgs(numbers, delimeters) {
    return numbers.split(delimeters[0])
                       .join(delimeters[1])
                       .split(delimeters[1]);
}
