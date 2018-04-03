import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector';
import DailyFoods from './DailyFoods';


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
        <h3> {this.props.day} </h3>
      	<div className="row">
  				  <FoodSelector searchedFoods={this.props.searchedFoods} />
  		  </div>
        <div className="row">
            <DailyFoods dailyDiet={this.state.dailyDiet} />
        </div>
      </div>

    

    );
  }
}

