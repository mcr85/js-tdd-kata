'use strict';

describe('String Calculator tests', function() {

    var calc;
    beforeEach(function() {
        calc = new Calc();
    });

    describe('add method', function() {

        it('returns empty string if no values passed', function() {
            expect(calc.add()).to.equal('');
        });

    });

});
