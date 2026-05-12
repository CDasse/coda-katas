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

// je récupère le premier code
// j'examine le premier code
// je regarde le premier chiffre
// je vérifie s'il est identique au suivant (si oui je stocke le nombre d'occurence puis je vérifie le suivant /
//                                               si non je met le conteur à zero et j'incrémente la ligne suivant avec le compteur et le chiffre)
// je continue sur tout le code
// je refais la meme chose avec la ligne suivante jusqu'a la n-ieme -1 iteration
// je parse to string la derniere itération