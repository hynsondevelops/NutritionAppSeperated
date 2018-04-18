import PropTypes from 'prop-types';
import React from 'react';
import {findNutrient} from '../helpers/findNutrient.js';
//import {Doughnut} from "react-chartjs";
import CircularProgress from 'material-ui/CircularProgress';


export default class Macronutrients extends React.Component {
  static propTypes = {
  	//array of food portions
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

  componentWillReceiveProps(nextProps) {
    this.setState({ dailyDiet: nextProps.dailyDiet });  
  }

  render() {
    //all in grams
    let calorieTotal = 0;
    let carbTotal = 0;
    let proteinTotal = 0;
    let fatTotal = 0;
    let arrayStr = []
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++){
    	let nutrientArray = (this.props.dailyDiet[i].food.data).nutrients
    	let portionQuantity = this.props.dailyDiet[i].quantity
    	for (let j = 0; j < nutrientArray.length; j++)
    	{
    		arrayStr.push([nutrientArray[j].name, nutrientArray[j].nutrient_id])

    	}
    	let calorieObject = findNutrient(nutrientArray, 208)
    	let proteinObject = findNutrient(nutrientArray, 203)
    	let fatObject = findNutrient(nutrientArray, 204)
    	let carbohydrateObject = findNutrient(nutrientArray, 205)

      calorieTotal += parseFloat(calorieObject.value) * parseFloat(portionQuantity)
      proteinTotal += parseFloat(proteinObject.value) * parseFloat(portionQuantity)
      fatTotal += parseFloat(fatObject.value) * parseFloat(portionQuantity)
      carbTotal += parseFloat(carbohydrateObject.value) * parseFloat(portionQuantity)
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
    const calorie = calorieTotal.toFixed(2);
    const carb = carbTotal.toFixed(2);
    const protein = proteinTotal.toFixed(2);
    const fat = fatTotal.toFixed(2);
    return (
      <div>
        <div id="macronutrient_container">
          <div id="macronutrient_header">Macronutrients</div>
          <h3 id="calorie_total"> Calories: {calorie} kcal/3000 kcal <CircularProgress
                    className="calorie_circular"
                    mode="determinate"
                    value={30000}
                    max={3000}
                    size={60}
                    style={{top: "20px"}}

                  /><div className="circular_percent">{(3000/3000 * 100).toFixed(0)}%</div></h3>

          <h3 id="protein_total"> Protein: {protein} g</h3>
          <h3 id="fat_total"> Fat: {fat} g</h3>
          <h3 id="carbohydrate_total"> Carbohydrates: {carb} g</h3>
        </div>
      </div>

    );
  }
}

        //<Doughnut data={chartData} options={chartOptions} width="600" height="250"/>
