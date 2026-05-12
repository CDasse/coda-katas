export type Jedi = { name: string; midichlorians: number }

export function totalMidichlorians(jedis: Jedi[]): number {
    let result = 0;
    let i = 0;

    functionRecursive(jedis, result, i);

    return result;
}

function functionRecursive(jedis: Jedi[], i:number) {

    if (i < jedis.length - 1) {
        result += jedis[i].midichlorians;
        i++
    }

    if(i < jedis.length - 1) {
        functionRecursive(jedis, result, i);
    }
}