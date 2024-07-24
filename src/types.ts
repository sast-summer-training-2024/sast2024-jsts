export enum Tile {
    M1 = 1, M2, M3, M4, M5, M6, M7, M8, M9,
    P1 = 11, P2, P3, P4, P5, P6, P7, P8, P9,
    S1 = 21, S2, S3, S4, S5, S6, S7, S8, S9,
    Z1 = 31, Z2 = 33, Z3 = 35, Z4 = 37,
    Z5 = 39, Z6 = 41, Z7 = 43,
}

export const YAOCYU: Tile[] = [
    Tile.M1, Tile.M9,
    Tile.P1, Tile.P9,
    Tile.S1, Tile.S9,
    Tile.Z1, Tile.Z2, Tile.Z3, Tile.Z4,
    Tile.Z5, Tile.Z6, Tile.Z7,
];

export const YAKUHAI: Tile[] = [
    Tile.Z1, Tile.Z2,
    Tile.Z5, Tile.Z6, Tile.Z7,
];

export interface Block {
    base: Tile;
    count: 1 | 2 | 3 | 4;
};
export type Hand = Block[];

export interface Mentsu {
    base: Tile,
    type: "Shuntsu" | "Kotsu",
};

export type Atama = Tile;

export type Agari = [Mentsu, Mentsu, Mentsu, Mentsu, Atama];
