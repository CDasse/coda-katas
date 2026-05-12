export function cloneSequence(n: number): number[] {
    if (n <= 0) return [];

    const cloneSequence: number[] = [0, 1];

    if (n < 2) return cloneSequence.slice(0, n);

    for (let i = 2; i < n; ++i) {
        cloneSequence[i] = cloneSequence[i - 1] + cloneSequence[i - 2];
    }

    return cloneSequence;
}