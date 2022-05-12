import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { addPlayerScoreCard } from "./features/playerScoreCards/playerScoreCardsSlice";


import { players } from "../tmp/scores";

import Battery from "./components/Battery";
import { createPlayerScoreCards, sumLikeProps } from "./functions/entryManipulation";
import ScoreCard from "./components/ScoreCard";

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

const App = () => {
    const playerScoreCards = useAppSelector((state)  => state.players.playerScoreCards)
    const dispatch = useAppDispatch();

    useEffect(() => {
        players.map((player) => {
            dispatch(addPlayerScoreCard( player ))
        })
    },[]);

    // let playerScoreCards: Array<PlayerScoreCard> = []


    // console.log(playerScoreCards);
    
    return (
        <div key="App">
            {/* <Battery/> */}
            { playerScoreCards.map((scoreCard, indx) =>
                <React.Fragment key={'scoreCard_'+indx}>
                    <ScoreCard scoreCard={scoreCard}/>
                </React.Fragment>
            )}
        </div>
    );
};

export default App;