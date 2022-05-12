import { IEntry } from "../src/types/Entries"
import { IScore, IScoreCard } from "../src/types/ScoreCard"



// const sampleScores1:Array<IScore> = [
//     {
//         score: "1/6",
//         amount: 1
//     },
//     {
//         score: "2/6",
//         amount: 5
//     },
//     {
//         score: "3/6",
//         amount: 25
//     },
//     {
//         score: "4/6",
//         amount: 52
//     },
//     {
//         score: "5/6",
//         amount: 24
//     },
//     {
//         score: "6/6",
//         amount: 10
//     },
//     {
//         score: "X/6",
//         amount: 3
//     }
// ]

// const sampleScores2 = [
    
//     {
//         score: "2/6",
//         amount: 2
//     },
//     {
//         score: "1/6",
//         amount: 0
//     },
//     {
//         score: "3/6",
//         amount: 20
//     },
//     {
//         score: "4/6",
//         amount: 26
//     },
//     {
//         score: "5/6",
//         amount: 35
//     },
//     {
//         score: "6/6",
//         amount: 25
//     },
//     {
//         score: "X/6",
//         amount: 7
//     }
// ]

// const framedScores:Array<IScore> = [
//     {
//         score: "🟥🟥🟥🟥🟥🟥",
//         amount: 3
//     },
//     {
//         score: "🟥🟥🟩⬛⬛⬛",
//         amount: 2
//     },
//     {
//         score: "🟥🟥🟥🟥🟥🟩",
//         amount: 2
//     },
// ]

// const scoreCard1: IScoreCard = {
//     name: "Scott",
//     games: [
//         {
//             name: "Wordle",
//             scores: sampleScores1
//         }, {
//             name: "Framed",
//             scores: framedScores
//         }
//     ]
// }

// const scoreCard2: IScoreCard = {
//     name: "Tati",
//     games: [{
//         name: "Wordle",
//         scores: sampleScores2
//     }]
// }

// export const sampleMultiplePeople:Array<IScoreCard> = [
//     scoreCard1,
//     scoreCard2,
// ] 

const entries1: Array<IEntry> = [
    {
        game: 'Wordle',
        number: 254,
        score: '2/6'
    },
    {
        game: 'Wordle',
        number: 255,
        score: '4/6'
    },
    {
        game: 'Wordle',
        number: 256,
        score: '3/6'
    },
    {
        game: 'Wordle',
        number: 257,
        score: '4/6'
    }
]

const entries2: Array<IEntry> = [
    {
        game: 'Wordle',
        number: 254,
        score: '3/6'
    },
    {
        game: 'Wordle',
        number: 255,
        score: '5/6'
    },  {
        game: 'Framed',
        number: 255,
        score: '🟥🟥🟥🟥🟥🟥'
    },  {
        game: 'Framed',
        number: 256,
        score: '🟥🟥🟩⬛⬛⬛'
    },  {
        game: 'Framed',
        number: 257,
        score: '🟥🟥🟩⬛⬛⬛'
    },
    {
        game: 'Wordle',
        number: 256,
        score: '3/6'
    },
    {
        game: 'Wordle',
        number: 257,
        score: '2/6'
    },
    {
        game: 'Framed',
        number: 62,
        score: '🟥🟥🟥🟥🟩⬛'
    }
]

 const player1Entries = {
    name: "Scott",
    entries: entries1
}

 const player2Entries = {
    name: "Tati",
    entries: entries2
}

export const players = [
    player1Entries,
    player2Entries
]