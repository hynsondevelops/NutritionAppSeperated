import PropTypes from 'prop-types';
import React from 'react';
import {Doughnut} from "react-chartjs";

export default class Macronutrients extends React.Component {
  static propTypes = {
    dailyDiet: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);


    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    
    this.state = { };
  }

  render() {
    //all in grams
    let calorieTotal = 0;
    let carbTotal = 0;
    let proteinTotal = 0;
    let fatTotal = 0;
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++){
      calorieTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[0].value) * parseFloat(this.props.dailyDiet[i][1])
      proteinTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[1].value) * parseFloat(this.props.dailyDiet[i][1])
      fatTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[2].value) * parseFloat(this.props.dailyDiet[i][1])
      carbTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[3].value) * parseFloat(this.props.dailyDiet[i][1])
    }
    let chartData = [
      {
        value: proteinTotal,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Protein"
      },
      {
        value: fatTotal,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Fat"
      },
      {
        value: carbTotal,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Carbohydrates"
      }
    ]
    let chartOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : "easeOutBounce",

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    }
    const calorie = calorieTotal;
    const carb = carbTotal;
    const protein = proteinTotal;
    const fat = fatTotal;
    return (
      <div>
        <h3> Calories: {calorie} kcal</h3>
        <h3> Protein: {protein} g</h3>
        <h3> Fat: {fat} g</h3>
        <h3> Carbohydrates: {carb} g</h3>
        <Doughnut data={chartData} options={chartOptions} width="600" height="250"/>
      </div>

    );
  }
}

