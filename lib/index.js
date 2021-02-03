'use strict';

function strongPasswordChecker(pass, minLength, maxLength, maxRepeat, charConditions) {
    if (minLength === void 0) { minLength = 6; }
    if (maxLength === void 0) { maxLength = 20; }
    if (maxRepeat === void 0) { maxRepeat = 3; }
    if (charConditions === void 0) { charConditions = [/[0-9]/, /[a-z]/, /[A-Z]/]; }
    var length = pass.length;
    var reduceIncreaseCount = length < minLength ? minLength - length : length > maxLength ? length - maxLength : 0;
    var charConditionsResult = charConditions.map(function () { return false; });
    var lengths = [];
    var replaceCharCount = charConditionsResult.length;
    var replaceCount = 0;
    // temp variables
    var repeatLength = 1;
    var oldChar;
    // going through password symbols
    for (var i = 0; i < length; i++) {
        // current symbol
        var char = pass[i];
        // check character conditions
        if (replaceCharCount) {
            for (var j = 0; j < charConditionsResult.length; j++) {
                if (!charConditionsResult[j]) {
                    if (charConditions[j].test(char)) {
                        charConditionsResult[j] = true;
                        replaceCharCount--;
                    }
                }
            }
        }
        if (oldChar === char) {
            if (++repeatLength % maxRepeat === 0) {
                replaceCount++;
            }
        }
        else {
            lengths.push(repeatLength);
            repeatLength = 1;
        }
        oldChar = char;
    }
    lengths.push(repeatLength);
    if (length < minLength) {
        return Math.max(reduceIncreaseCount, replaceCharCount);
    }
    else if (length > maxLength) {
        var reducer = reduceIncreaseCount;
        var replacer = replaceCount;
        var changed = true;
        while (changed) {
            changed = false;
            for (var i = 0; i < maxRepeat && replacer; i++) {
                for (var j = 0; j < lengths.length && replacer; j++) {
                    var len = lengths[j];
                    if (len >= maxRepeat && len % maxRepeat === i) {
                        if (lengths[j] >= maxRepeat && reducer > i && reducer) {
                            lengths[j] -= i + 1;
                            replacer--;
                            reducer -= i + 1;
                            changed = true;
                        }
                    }
                }
            }
        }
        return reduceIncreaseCount + Math.max(replacer, replaceCharCount);
    }
    else {
        return Math.max(reduceIncreaseCount, replaceCharCount, replaceCount);
    }
}

module.exports = strongPasswordChecker;
