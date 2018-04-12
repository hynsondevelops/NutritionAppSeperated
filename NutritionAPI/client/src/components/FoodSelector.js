import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
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




export default class FoodSelector extends React.Component {
    static propTypes = {
       foods: PropTypes.array,
    };

    /**
    * @param props - Comes from your rails view.
    */
    constructor(props) {
    super(props);
    //True:
    let food_portions = []
    for (let i = 0; i < this.props.foods.length; i++) {
      food_portions.push({food: this.props.foods[i], quantity: 1})
    }
    this.state = {foods: this.props.foods, food_portions: food_portions}
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
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
        let newPortions = this.state.food_portions
        for (let i = 0; i < newPortions.length; i++)
        {
          if (newPortions[i].food.name == name){
            newPortions[i].quantity = event.target.value
          }
        }
        this.setState({food_portions: newPortions})

      }

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
        if (i < Object.keys(food_portion.food.nutrients).length){
          //looking for energy units of kcal

          if (food_portion.food.nutrients[i].unit == "kcal")
          {
            caloriesTemp = parseFloat(food_portion.food.nutrients[i].value);
            for (let j = 0; j < Object.keys(food_portion.food.nutrients[i].measures).length; j++)
            { 
              servingSizesTemp.push(food_portion.food["nutrients"][i]["measures"][j]["label"]);
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
      return {name: food_portion.food.name, quantity: food_portion.quantity, servingSizes: servingSizesTemp, calories: food_portion.quantity * caloriesTemp}
    };


    render() {
      const foodRows = this.state.food_portions.map((food_portion) => {
        const tableReadyFoodPortion = this.energyAndServingSize(food_portion)
          return(
            <TableRow key={food_portion.food.id}>
              <TableHeaderColumn className="name_cell"scope="row">{tableReadyFoodPortion.name}</TableHeaderColumn>
              <TableRowColumn className="quantity_cell"><input id="quantity_input" type="text" value={tableReadyFoodPortion.quantity} onChange={this.quantityFieldUpdate} onKeyDown={this.quantityUpdate} /></TableRowColumn>
              <TableRowColumn className="serving_size_cell"><Dropdown options={tableReadyFoodPortion.servingSizes} onChange={this._onSelect} value={tableReadyFoodPortion.servingSizes[0]} placeholder="Select an option" /></TableRowColumn>
              <TableRowColumn className="calories_cell">{tableReadyFoodPortion.calories}</TableRowColumn>
              <input id="add_food_button" type="submit" value="Add" onClick={this.handleAddFood} />
            </TableRow>
            )
          });
      return (
        <div>
          <MuiThemeProvider>
            <Paper>
              <Table>
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