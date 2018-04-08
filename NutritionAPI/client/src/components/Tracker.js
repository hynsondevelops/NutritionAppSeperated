import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector';
import DailyFoods from './DailyFoods';
import Macronutrient from './Macronutrient';
import Micronutrient from './Micronutrient';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="All Text" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
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

