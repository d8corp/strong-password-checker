function strongPasswordChecker(pass, minLength = 6, maxLength = 20, maxRepeat = 3, charConditions = [/[0-9]/, /[a-z]/, /[A-Z]/]) {
    const { length } = pass;
    const reduceIncreaseCount = length < minLength ? minLength - length : length > maxLength ? length - maxLength : 0;
    const charConditionsResult = charConditions.map(() => false);
    const lengths = [];
    let replaceCharCount = charConditionsResult.length;
    let replaceCount = 0;
    // temp variables
    let repeatLength = 1;
    let oldChar;
    // going through password symbols
    for (let i = 0; i < length; i++) {
        // current symbol
        const char = pass[i];
        // check character conditions
        if (replaceCharCount) {
            for (let j = 0; j < charConditionsResult.length; j++) {
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
        let reducer = reduceIncreaseCount;
        let replacer = replaceCount;
        let changed = true;
        while (changed) {
            changed = false;
            for (let i = 0; i < maxRepeat && replacer; i++) {
                for (let j = 0; j < lengths.length && replacer; j++) {
                    const len = lengths[j];
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

export default strongPasswordChecker;
