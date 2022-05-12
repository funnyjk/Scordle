export interface IEntry {
    game: string,
    number?: number,
    score: string | number
}

export interface IPlayerEntries {
    name: string;
    entries: Array<IEntry>;
}