type Planet = string;
type ListOfPlanets = Planet[];

export function countPlanets(planets: ListOfPlanets): Record<Planet, number> {
    if (planets.length === 0) return {};

    const result: Record<string, number> = {};

    for (const planet of planets) {
        result[planet]
            ? result[planet]++
            : result[planet] = 1;
    }

    return result;
}