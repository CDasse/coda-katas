export function isSithCode(code: string): boolean {
    if (code.length === 0) return false;
    if (code.length === 1) return true;

    const codeToLowerCaseAndWithoutSpace = code.toLowerCase().replace(/\s/g, '');

    return checkEquality(codeToLowerCaseAndWithoutSpace, 0);
}

function checkEquality(code: string, i: number): boolean {
    const isEqual = code[i] === code[code.length - 1 - i];
    let halfCodeLength = Math.floor(code.length / 2);

    const isEqualAndContinue = isEqual && i < halfCodeLength;
    const isEqualAndStop = isEqual && i == halfCodeLength;

    if (isEqualAndContinue) {
        return checkEquality(code, i + 1);
    }

    return isEqualAndStop;
}