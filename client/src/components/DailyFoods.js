import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
//import FoodRow from './FoodRow';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropdown from 'react-dropdown';




export default class DailyFoods extends React.Component {
    static propTypes = {
       food_portions: PropTypes.array,
    };

    /**
    * @param props - Comes from your rails view.
    */
    constructor(props) {
    super(props);
    //True:

    this.state = {food_portions: this.props.food_portions}
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    }

    componentWillReceiveProps(nextProps) {
      this.setState({food_portions: nextProps.food_portions})
    }

    quantityFieldUpdate = (event) => {
      // if 0 check if user wants to delete food_portion
      if (event.target.value == 0)
      {

      }
      else 
      {
        //get the name of the food to be updated
        const name = event.currentTarget.parentElement.parentElement.children[0].innerHTML
        //find the food_portion object to update
        console.log(this.state.food_portions)
        const food_portion = this.state.food_portions.find(function(portion) {
          return portion.food.data.name == name;
        });    
        let food_portion_temp = {...food_portion}
        //update Rails database
        const updateURL = '/api/food_portions/' + food_portion_temp.id.toString(); 
        food_portion_temp.created_at = undefined;
        food_portion_temp.updated_at = undefined;
        food_portion_temp.id = undefined;
        food_portion_temp.quantity = event.target.value
        food_portion.quantity = event.target.value
        let newPortions = this.state.food_portions
        for (let i = 0; i < newPortions.length; i++)
        {
          if (newPortions[i].food.data.name == name){
            newPortions.quantity = event.target.value
          }
        }
        this.setState({food_portions: newPortions})

      }

    }

    quantityUpdate = (event) => {
      const name = event.currentTarget.parentElement.parentElement.children[0].innerHTML
      //find the food_portion object to update
      console.log(this.state.food_portions)
      const food_portion = this.state.food_portions.find(function(portion) {
        return portion.food.data.name == name;
      });    
      let food_portion_temp = {...food_portion}
      //update Rails database
      const updateURL = '/api/food_portions/' + food_portion_temp.id.toString(); 
      food_portion_temp.created_at = undefined;
      food_portion_temp.updated_at = undefined;
      food_portion_temp.id = undefined;
      food_portion_temp.quantity = event.target.value
      if (event.keyCode == 13) {
        this.props.updateFoodCallback(updateURL, food_portion)
      }

      //this.setState({food_portions: newPortions})
    }

    energyAndServingSize = (food_portion) => {
      let findingEnergy = true;
      let i = 0;
      let caloriesTemp;
      let servingSizesTemp = [];
      <input type="submit" onClick={this.handleAddFood} />
      let AddFoodButtonTemp = ""
      //search result
      if (this.props.tableType)
      {
        AddFoodButtonTemp = <input id="add_food_button" type="submit" value="Add" onClick={this.handleAddFood} />
      }
      while (findingEnergy)
      {
        if (i < food_portion.food.data.nutrients.length){
          //looking for energy units of kcal
          if (food_portion.food.data.nutrients[i].unit == "kcal")
          {
            caloriesTemp = parseFloat(food_portion.food.data.nutrients[i].value);
            for (let j = 0; j < food_portion.food.data.nutrients[i].measures.length; j++)
            { 
              servingSizesTemp.push(food_portion.food.data["nutrients"][i]["measures"][j]["label"]);
            }
            findingEnergy = false;
          }
          i+=1;
        }
        //food_portion didn't have data on kcals
        else {
          caloriesTemp = 0
          servingSizesTemp.push()
          findingEnergy = false;
        }
      }
      return {name: food_portion.food.data.name, quantity: food_portion.quantity, servingSizes: servingSizesTemp, calories: food_portion.quantity * caloriesTemp}
    };

    render() {
      const foodRows = this.props.food_portions.map((food_portion) => {
        const tableReadyFoodPortion = this.energyAndServingSize(food_portion)
          return(
            <TableRow key={food_portion.id}>
              <TableHeaderColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="name_cell"scope="row">{tableReadyFoodPortion.name}</TableHeaderColumn>
              <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="quantity_cell"><input id="quantity_input" type="text" value={tableReadyFoodPortion.quantity} onChange={this.quantityFieldUpdate} onKeyDown={this.quantityUpdate} /></TableRowColumn>
              <TableRowColumn className="serving_size_cell"><Dropdown options={tableReadyFoodPortion.servingSizes} onChange={this._onSelect} value={tableReadyFoodPortion.servingSizes[0]} style={{wordWrap: 'break-word', whiteSpace: 'normal'}} placeholder="Select an option" /></TableRowColumn>
              <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="calories_cell">{tableReadyFoodPortion.calories}</TableRowColumn>
            </TableRow>
            )
          });
      return (
        <div id="daily_foods_container">
          <MuiThemeProvider>
            <Paper zDepth={5}>
              <div id="daily_diet_header">Daily Diet</div>
              <Table height={'300px'}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Amount</TableHeaderColumn>
                    <TableHeaderColumn>Serving Size</TableHeaderColumn>
                    <TableHeaderColumn>Calories</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {foodRows}
                </TableBody>
              </Table>
            </Paper>
          </MuiThemeProvider>

        </div>
        )
    ;}
}