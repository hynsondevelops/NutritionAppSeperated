import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector';
import DailyFoods from './DailyFoods';
import Macronutrient from './Macronutrient';
import Micronutrient from './Micronutrient';


export default class Tracker extends React.Component {
  static propTypes = {
  	searchedFoods: PropTypes.array,
    dailyDiet: PropTypes.array,
    day: PropTypes.string
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format



    if (Object.keys(this.props.dailyDiet).length > 0){
      let JSONfoods = []
      for (let i = 0; i < Object.keys(JSON.parse(this.props.dailyDiet)["food_portions"]).length; i++)
      {

        //console.log(this.props.dailyDiet[i])
      }
      this.state = {dailyDiet: JSON.parse(this.props.dailyDiet)["food_portions"]};
      
    }
    else
    {
      this.state = {dailyDiet: []}
    }
  }

  render() {
    //var LineChart = require("react-chartjs").Line;
    return (
      <div>
        <h3> {this.props.day} </h3>
      	<div className="row">
  				  <FoodSelector searchedFoods={this.props.searchedFoods} />
  		  </div>
        <div className="row">
            <DailyFoods dailyDiet={this.state.dailyDiet} />
        </div>
        <div className="row">
            <Macronutrient dailyDiet={this.state.dailyDiet} />
        </div>
        <div className="row">
            <Micronutrient dailyDiet={this.state.dailyDiet} />
        </div>
      </div>

    

    );
  }
}

