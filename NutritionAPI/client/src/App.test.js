import PropTypes from 'prop-types';
import React from 'react';
import FoodManager from './FoodManager';
import DailyFoods from './DailyFoods';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';
import DayNavigation from './DayNavigation';

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
      for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++)
      {
        let jsonReady = this.props.dailyDiet[i][0].data.replace(/=>/g, ":")
        let JSONfood = JSON.parse(jsonReady)
        JSONfood.food_id = this.props.dailyDiet[i][0].id
        JSONfood.food_portion_id = this.props.dailyDiet[i][2]
        JSONfoods.push([JSONfood, this.props.dailyDiet[i][1]])
      }
      this.state = {dailyDiet: JSONfoods};
      console.log(JSONfoods)
    }
    else
    {
      this.state = {dailyDiet: []}
    }
  }

  render() {
    var LineChart = require("react-chartjs").Line;

    return (
      <div>
        <div className="row">
          <DayNavigation day={this.props.day} />
        </div>
      	<div className="row">
  				  <FoodManager searchedFoods={this.props.searchedFoods} day={this.props.day} />
  		  </div>
        <div className="row">
            <DailyFoods dailyDiet={this.state.dailyDiet} day={this.props.day} />
        </div>
        <div className="row">
          <Macronutrients dailyDiet={this.state.dailyDiet} />
        </div>
        <div className="row">
          <Micronutrients dailyDiet={this.state.dailyDiet} />
        </div>
      </div>

    

    );
  }
  
}


