import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector';
import DailyFoods from './DailyFoods';
import Macronutrient from './Macronutrient';
import Micronutrient from './Micronutrient';
import Navbar from './Navbar';
import axios from 'axios';

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
    this.state = {dailyDiet: this.props.dailyDiet.food_portions}
  }

  /*componentWillMount() {
    axios.get("/api/daily_diets/1")
    .then(result => this.setDailyDiet(result))
  }*/
  setDailyDiet = (result) => {
    console.log(result)
    this.setState({dailyDiet: result.data.food_portions})
    console.log(this.state)
    this.forceUpdate()
  }


  render() {
    //var LineChart = require("react-chartjs").Line;
    return (

      <div>
        <Navbar />
        <h3> {this.props.day} </h3>
      	<div className="row">
  				  <FoodSelector foods={this.props.searchedFoods} />
  		  </div>
        <div className="row">
            <DailyFoods food_portions={this.state.dailyDiet} />
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

