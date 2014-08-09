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

        it('returns number if only one number passed', function() {
            expect(calc.add('1')).to.equal(1);
        });

        it('returns sum of two numbers', function() {
            expect(calc.add('1,2')).to.equal(3);
        });

        it('returns sum of any amount of values', function() {
            expect(calc.add('1,2,3')).to.equal(6);
            expect(calc.add('2,2,2,2,2')).to.equal(10);
            expect(calc.add('999,1,0,1')).to.equal(1001);
        });
    });

});
