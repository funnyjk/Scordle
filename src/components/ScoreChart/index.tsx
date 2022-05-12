// @refresh reset
import * as React from 'react';
import './index.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarControllerChartOptions,
    BarControllerDatasetOptions
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IGame } from '../../types/ScoreCard';

export interface IScoreChart {
  game: IGame
}


export const chartOptions = (chartData: Array<number>, name?: string):BarControllerChartOptions & BarControllerDatasetOptions & any => {
    let maxX = Math.max(...chartData);
    return {
    indexAxis: 'y' as const,
    layout: {
        padding: 10,
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    backgroundColor: 'rgba(100, 0, 0, 1)',
    barPercentage: 1,
    categoryPercentage: 1,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxis: {
            display: false,
            max: maxX
        },
        yAxis: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        datalabels: {
            display: "auto",
            clipping: true,
            color: "white",
            formatter: Math.round,
            anchor: "start",
            offset: 5,
            align: "end"
        },
      legend: {
          display: false,
        position: 'right' as const,
      },
      title: {
        display: (name? true : false),
        text: name,
      },
    },
  };
}
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const formatData = (data: number[], labels: string[])=> ({
    labels: labels,
    datasets: [
        { 
            label: "Test",
            data,
            backgroundColor: 'green'
            // backgroundColor: ['blue', 'green', 'green', 'green', 'green', 'green','red']
        }
    ]
});



// @refresh reset

  
const ScoreChart = ({game: {scores, name}}:IScoreChart)  => {
    let sorted = [...scores].sort((a, b) => ('' + a.score).localeCompare('' + b.score))
    let chartLabels = sorted.map((score)=> ''+score.score);
    let chartData = sorted.map((score)=> score.amount);

    return (
      <div className='barChart'>
        <Bar plugins={[ChartDataLabels]} options={chartOptions(chartData, name)} data={formatData(chartData, chartLabels)} />
      </div>
    );
};

export default ScoreChart;