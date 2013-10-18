'use strict';

describe('Three Middle Digit Tests', function() {
    var chai = require('chai');
    var expect = chai.expect,
        assert = chai.assert;

    var digits = require('./digits.js');

    it('should exist', function() {
       expect(digits).to.not.equal(undefined);
    });

    it('should have a function, getMiddleThreeDigits', function () {
        expect(digits.getMiddleThreeDigits).to.not.equal(undefined);
    });

    it('should return the middle three digits of 100', function() {
       expect(digits.getMiddleThreeDigits(100)).to.equal(100);
    });

    it('should return the middle three digits of -100', function() {
        expect(digits.getMiddleThreeDigits(-100)).to.equal(100);
    });

    it('should get three middle digits of 12345', function (){
        expect(digits.getMiddleThreeDigits(12345)).to.equal(234);
    });

    it('should get three middle digits of -12345', function (){
        expect(digits.getMiddleThreeDigits(-12345)).to.equal(234);
    });

    it('should get three middle digits of 1234567890', function (){
        expect(digits.getMiddleThreeDigits(123456789)).to.equal(456);
    });

    it('should get three middle digits of -123456789', function (){
        expect(digits.getMiddleThreeDigits(-123456789)).to.equal(456);
    });

    it('should get the middle three digits of 10201', function () {
        expect(digits.getMiddleThreeDigits(10201)).to.equal(20);
    })

    it('should throw an exception when the integer is undefined', function() {
        expect(function() { digits.getMiddleThreeDigits(undefined) }).to.throw(Error, "'integer' is undefined.");
    });

    it('should throw an exception when a number does not contain 3 digits', function() {
        expect(function() { digits.getMiddleThreeDigits(-1) }).to.throw("'integer' value does not contain at least 3 numeric digits.");
    });

    it('should throw an exception when a number is not a number', function() {
        expect(function() { digits.getMiddleThreeDigits('abc123') }).to.throw("'integer' is not an integer.");
    });

    it('should throw an exception when a number is not a whole number', function() {
        expect(function() { digits.getMiddleThreeDigits(123.5) }).to.throw("'integer' is not an integer.");
    });

    it('should throw an exception for an even number of digits using 1000', function (){
        expect(function() { digits.getMiddleThreeDigits(1000) }).to.throw("'integer' has even number of digits.");
    });

    it('should throw an exception for an even number of digits using -10000', function (){
        expect(function() { digits.getMiddleThreeDigits(-100000) }).to.throw("'integer' has even number of digits.");
    });


});
