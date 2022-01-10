import React from 'react';
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

import getCaseData from './data/covid-data';


export default function CasesGraph(props) {
    console.log("Prov: "+props.province)
    const dataObj = getCaseData(props.province)
    console.log("dataObj:")
    console.log(dataObj)
    const state = {
      labels: ["one", "two", "three"],
      datasets: [
        {
          label: 'COVID-19 Cases',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [1,2,3]
        }
      ]
    }

    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'COVID-19 Cases',
              fontSize:50
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
}
