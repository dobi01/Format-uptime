// jshint esversion: 6

const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);
    
            const expected = '23 s';
    
            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();
    
            const expected = '0 s';
    
            assert.equal(actual, expected);
        });
    });

    describe('minutes', () => {
        it('should work for one digit minutes and seconds', () => {
            const actual = formatDate(65);

            const expected = '1 m 5 s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digits minutes and seconds', () => {
            const actual = formatDate(1414);

            const expected = '23 m 34 s';

            assert.equal(actual, expected);
        });

        it('should return only minutes', () => {
            const actual = formatDate(780);

            const expected = '13 m';

            assert.equal(actual, expected);
        });
    });

    describe('hours', () => {
        it('should work for one digit hours, minutes and seconds', () => {
            const actual = formatDate(3723);

            const expected = '1 h 2 m 3 s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digit hours, minutes and seconds', () => {
            const actual = formatDate(40333);

            const expected = '11 h 12 m 13 s';

            assert.equal(actual, expected);
        });

        it('should work for hours only', () => {
            const actual = formatDate('7200');

            const expected = '2 h';

            assert.equal(actual, expected);
        });

        it('should work for hours and minutes', () => {
            const actual = formatDate(77820);

            const expected = '21 h 37 m';

            assert.equal(actual, expected);
        });

        it('should work for hours and seconds', () => {
            const actual = formatDate('10815');

            const expected = '3 h 15 s';

            assert.equal(actual, expected);
        });
    });
});