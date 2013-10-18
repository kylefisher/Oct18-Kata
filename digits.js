function getMiddleThreeDigits(integer) {
    if (integer === undefined) {
        throw new Error("'integer' is undefined.");
    }

    if (integer !== parseInt(integer)) {
        throw new Error("'integer' is not an integer.");
    }

    integer = Math.abs(integer);

    if (integer < 100) {
        throw new Error("'integer' value does not contain at least 3 numeric digits.");
    }

    var intAsString = integer.toString();

    if (integer < 0) {
        intAsString = intAsString.substring(1);
    }

    if (intAsString.length % 2 == 0) {
        throw new Error("'integer' has even number of digits.");
    }

    var startPosition = Math.floor(intAsString.length / 2) - 1;
    return parseInt(intAsString.substring(startPosition, startPosition + 3));
}

module.exports = {
    'getMiddleThreeDigits': getMiddleThreeDigits
};
