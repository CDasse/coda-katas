export type Planet = {
    name: string
    satellites: Planet[]
}

export function findPlanet(root: Planet, target: string): boolean {
    if (root.name == target) {
        return true;
    }

    for (let satellite of root.satellites) {
        if (findPlanet(satellite, target)) return true;
    }

    return false;
}