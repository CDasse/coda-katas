export function droidTransmission(n: number): string {
    if (n === 0) return "";
    if (n === 1) return "1";

    let code = [[1]];

    for (let i = 1; i < n; i++) {
        code.push(createNewLine(code[i - 1]));
    }

    let result = code[n - 1].join("");

    return result;
}

function createNewLine(previousLine: number[]) :number[] {
    let i = 0;
    let nbOfOccurence = 1;
    let table: number[] = [];

    while (i < previousLine.length) {
        if (previousLine[i] === previousLine[i+1]) {
            nbOfOccurence++;
        } else {
            table.push(nbOfOccurence);
            table.push(previousLine[i]);

            nbOfOccurence = 1;
        }
        i++;
    }

    return table;
}