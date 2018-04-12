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




export default class FoodTable extends React.Component {
    static propTypes = {
       food_portions: PropTypes.array,
       day: PropTypes.string,
       tableType: PropTypes.bool
    };

    /**
    * @param props - Comes from your rails view.
    */
    constructor(props) {
    super(props);
    //True:
    if (this.tableType) { 

      this.state = {food_portions: this.props.food_portions}
    }

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    }

    energyAndServingSizeLoop = () => {
      let rowsArray = []
      for (let i = 0; i < this.state.food_portions.length; i++)
      {
        this.energyAndServingSize(this.state.food_portions[i])
        console.log("^^^^^")
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
        if (i < food_portion.food.data.nutrients.length){
          //looking for energy units of kcal
          console.log(food_portion.food.data)
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
      return {name: food_portion.food.data.name, amount: food_portion.quantity, servingSizes: servingSizesTemp, calories: caloriesTemp,}
    };

    render() {
      const foodRows = this.state.food_portions.map((food_portion) => {
        const tableReadyFoodPortion = this.energyAndServingSize(food_portion)
        return(
          <TableRow>
            <TableHeaderColumn className="name_cell"scope="row">{tableReadyFoodPortion.name}</TableHeaderColumn>
            <TableRowColumn className="quantity_cell"><input id="quantity_input" type="text" value={tableReadyFoodPortion.quantity} onChange={this.quantityFieldUpdate} onKeyDown={this.quantityUpdate} /></TableRowColumn>
            <TableRowColumn className="serving_size_cell"><Dropdown options={tableReadyFoodPortion.servingSizes} onChange={this._onSelect} value={tableReadyFoodPortion.servingSizes[0]} placeholder="Select an option" /></TableRowColumn>
            <TableRowColumn className="calories_cell">{tableReadyFoodPortion.calories}</TableRowColumn>
          </TableRow>
          )
        });
        //console.log(foodRows)
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Search:
              <input className="food_search" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
      );
    }
}