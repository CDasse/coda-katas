export type Jedi = {
    name: string
    power: number
    children: Jedi[]
}

function skywalkerPowerFor(children: Jedi[]) {
    return children.reduce((res, current) =>
            res + skywalkerPower(current),
        0);
}


export function skywalkerPower(root: Jedi): number {
    return root.power + skywalkerPowerFor(root.children);
}
