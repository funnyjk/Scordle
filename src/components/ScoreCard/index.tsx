import * as React from 'react';
import ScoreChart from "../ScoreChart";
import { IScoreCard } from '../../types/ScoreCard';

import './index.scss';

export interface IScoreCardProps {
    scoreCard: IScoreCard;
}


const ScoreCard = ({scoreCard: {games, name}}: IScoreCardProps)  => {
    return (
        <div className='scoreCard'>
            <h3>{name}</h3>
            <div className='gamesList'>
                {games.map((game, ind) =>
                    <React.Fragment key={name+'_scoreChart_'+ind}>
                        <ScoreChart  game={game}/>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default ScoreCard;