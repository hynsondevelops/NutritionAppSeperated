import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector';
import DailyFoods from './DailyFoods';
import Macronutrient from './Macronutrient';
import Micronutrient from './Micronutrient';
import Navbar from './Navbar';
import UserSession from './UserSession';
import TextField from 'material-ui/TextField';

import axios from 'axios';

export default class Tracker extends React.Component {
  static propTypes = {
  	searchedFoods: PropTypes.array,
    dailyDiet: PropTypes.array,
  };

  componentWillReceiveProps(nextProps) {
    console.log("Here it is")
    console.log(nextProps)
    this.setState({ dailyDiet: nextProps.dailyDiet.food_portions, dailyDietId: nextProps.dailyDiet.id });  
  }

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    this.state = {dailyDiet: this.props.dailyDiet.food_portions, dailyDietId: this.props.dailyDiet.id, searchString: undefined}
  }

  /*componentWillMount() {
    axios.get("/api/daily_diets/1")
    .then(result => this.setDailyDiet(result))
  }*/
  setDailyDiet = (result) => {
    this.setState({dailyDiet: result.data.food_portions})
  }


  foodSearch = (event) => {
    this.setState({searchString: event.target.value});
  }

  render() {
    return (
      <div>
        <TextField hintText="Food Search" onChange={this.foodSearch}/><br />
      	<div className="row">
  				  <FoodSelector searchString={this.state.searchString} foods={this.props.searchedFoods} dailyDiet={this.state.dailyDiet} dailyDietId={this.state.dailyDietId} addFoodCallback={this.props.addFoodCallback} />
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

