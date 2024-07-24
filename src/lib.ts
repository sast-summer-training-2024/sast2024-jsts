import { Agari, Hand, YAKUHAI, Mentsu, Tile, YAOCYU } from "./types";

/**
 * @note 减轻处理压力，保证数字有序，花色有序，省去错误处理（绝对不是偷懒了）
 */
const parseHand = (hand: string): Hand => {
    const result: Hand = [];

    let base: Tile = Tile.Z1;
    hand.split("").reverse().forEach((ch) => {
        if (ch === "z") base = Tile.Z1;
        else if (ch === "m") base = Tile.M1;
        else if (ch === "s") base = Tile.S1;
        else if (ch === "p") base = Tile.P1;
        else {
            const num = Number(ch);
            const interval = base === Tile.Z1 ? 2 : 1;
            const tile: Tile = base - interval + interval * num;

            if (result.length > 0 && result[result.length - 1].base === tile) {
                result[result.length - 1].count += 1;
            } else {
                result.push({ base: tile, count: 1 });
            }
        }
    });

    return result.reverse();
};

const splitHand = (hand: Hand): Agari[] => {
    // TODO start

    // TODO end

    return [];
};

const getAgariFu = (agari: Agari): number => {
    let result = 20;

    agari.slice(0, 4).forEach((mentsu: Mentsu) => {
        if (mentsu.type === "Shuntsu") return;

        if (YAOCYU.includes(mentsu.base)) result += 8;
        else result += 4;
    });

    if (YAKUHAI.includes(agari[4])) result += 2;

    return result;
};

export const getFuCount = (hand: string): number => {
    const arr = splitHand(parseHand(hand)).map(getAgariFu);

    if (arr.length) return Math.max(...arr);
    else return -1;
};
