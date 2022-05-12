export interface IScoreCard {
    name: string;
    games: Array<IGame>;
}

export interface IGame {
    name: string;
    scores: Array<IScore>;
}

export interface IScore {
    score: string | number,
    amount: number
}

// export class Game implements IGame {
//     name: string;
//     scores: Array<IScore>;

//     constructor({name, scores}: IGame) {
//         this.name = name;
//         this.scores = scores;
//     }

// }

// export class PlayerScoreCard implements IScoreCard{
//     name: string;
//     games: Array<IGame>;

//     constructor({name, games}: IScoreCard) {
//         this.name = name;
//         this.games = games;
//     }
// }