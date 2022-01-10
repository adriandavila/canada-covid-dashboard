import { formControlLabelClasses } from '@mui/material';
import $ from 'jquery';

import React from 'react';
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';


var final_dates = []
var final_cases = []

export function getCaseData(province) {
    $.ajax({
      type: "GET",
      url: "https://api.opencovid.ca/timeseries?loc="+province+"&after=2021-08-01",

      success: function(response){
        console.log("got response!")
        var dates = []
        var caseData = []
        
        response.cases.forEach(element => {
            dates.push(element.date_report)
            caseData.push(element.cases)
        });

        

        final_dates=dates
        final_cases=caseData

        console.log(final_dates)
        console.log(final_cases)
        // return {
        //     dates: dates,
        //     cases: caseData
        // }
      },
      error: function() {
          return "Error"
      }
    })
}

function callBackFunc(response) {
    console.log(response)
    // console.log(response)
    return response;
}





export default function CasesGraph(props) {
    console.log("Prov: "+props.province)
    getCaseData(props.province)
    const dataObj = {
        dates: final_dates,
        cases: final_cases
    }
    console.log("dataObj:")
    console.log(dataObj)
    const state = {
      labels: dataObj.dates,
      datasets: [
        {
          label: 'COVID-19 Cases',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: dataObj.cases
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
              fontSize:20
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
