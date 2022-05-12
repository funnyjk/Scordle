import { IEntry, IPlayerEntries } from "../types/Entries";
import {IGame, IScore, IScoreCard } from "../types/ScoreCard";

export const sumLikeProps = (entries: Array<IEntry>) => {
    let aggGames: Array<IGame> = [];
    // players.map(player => {
        // let entries = player.entries;
        entries.map(entry => {
            let aggGameIndex = aggGames.findIndex (e => e.name === entry.game)
            if (aggGameIndex >= 0) {
                let _game = aggGames[aggGameIndex];
                let aggIndex = aggGames[aggGameIndex].scores.findIndex(e => e.score === entry.score)
                if (aggIndex >= 0) {
                    _game.scores[aggIndex].amount += 1;
                } else {
                    _game.scores.push({
                        score: entry.score,
                        amount: 1
                    })
                }
            } else {
                aggGames.push({
                    name: entry.game, 
                    scores: [{score: entry.score,amount: 1}]
                })
            }
        });
    
    return aggGames;
}

export const createPlayerScoreCards = (player: IPlayerEntries) => {
    let scores = sumLikeProps(player.entries)

    return {
        name: player.name,
        games: scores
    }
}