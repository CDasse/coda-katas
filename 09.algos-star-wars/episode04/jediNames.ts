export function uniqueJediNames(names: string[]): string[] {
    return names.length <= 0
        ? []
        : Array.from(new Set<string>(names).values());
}