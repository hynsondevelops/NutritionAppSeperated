import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import FoodRow from './FoodRow';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Dropdown from 'react-dropdown';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



export default class FoodSelector extends React.Component {
    static propTypes = {
    	 searchedFoods: PropTypes.array,
       day: PropTypes.string
    };

    /**
    * @param props - Comes from your rails view.
    */
    constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {searchedFoods: this.props.searchedFoods, searchString: null};
    }

    

    


    initialAjaxSuccess = (data) => {
        this.setState({searchedFoods: []})
        //no result found
        if (data.list == null){
            let placeholderFood = {
              "ndbno": "0",
              "name": "Sorry, no results for that search.",
              "nutrients": [
                {
                  "nutrient_id": "208",
                  "name": "Energy",
                  "derivation": "LCCS",
                  "group": "Proximates",
                  "unit": "kcal",
                  "value": "N/A",
                  "measures": [
                    {
                      "label": "ONZ",
                      "eqv": 0,
                      "eunit": "g",
                      "qty": 0,
                      "value": "0"
                    }
                  ]
                }
                ]
            }
            this.setState({searchedFoods: [placeholderFood]})
        }
        //makes AJAX calls for detailed info on all foods found in results
        for (let i = 0; i < data.list.item.length; i++){
            let APIURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + data.list.item[i].ndbno + "&type=f&format=json&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7"
            axios(APIURL).then(result => this.detailedAjaxSuccess(result.data))
        }
    }

    detailedAjaxSuccess = (data) => {
        this.setState({searchedFoods: this.state.searchedFoods.concat([data.report.food])})
    }




    handleChange = (event) => {
        this.setState({searchString: event.target.value});
        //making call to USDA database 
        let APIURL = ("https://api.nal.usda.gov/ndb/search/?format=json&q=" + event.target.value + "&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
        axios(APIURL, {
          responseType: 'json'}).then(result => this.initialAjaxSuccess(result.data))
    }

    render() {
      
      const foodRows = this.state.searchedFoods.map((food) => {
        let findingEnergy = true;
        let i = 0;
        let caloriesTemp;
        let servingSizesTemp = [];
        <input type="submit" onClick={this.handleAddFood} />

        let AddFoodButtonTemp = ""
        //search result
        if (this.props.searchOrDaily){
          AddFoodButtonTemp = <input id="add_food_button" type="submit" value="Add" onClick={this.handleAddFood} />
        }
        while (findingEnergy)
        {
          if (i < Object.keys(this.state.searchedFood["nutrients"]).length){
            //looking for energy units of kcal
            if (this.state.searchedFood["nutrients"][i]["unit"] == "kcal")
            {
              caloriesTemp = parseFloat(this.state.searchedFood["nutrients"][i]["value"]);
              for (let j = 0; j < Object.keys(this.state.searchedFood["nutrients"][i]["measures"]).length; j++)
              { 
                servingSizesTemp.push(this.state.searchedFood["nutrients"][i]["measures"][j]["label"]);
              }
              findingEnergy = false;
            }
            i+=1;
          }
          //food didn't have data on kcals
          else {
            caloriesTemp = 0
            servingSizesTemp.push()
            findingEnergy = false;
          }
        }
        //variables to be used in view
        const calories = caloriesTemp * this.state.quantity;
        const options = servingSizesTemp;
        const defaultOption = options[0];
        const AddFoodButton = AddFoodButtonTemp;
        return(
          <TableRow>
            <TableHeaderColumn className="name_cell"scope="row">{this.state.searchedFood["name"]}</TableHeaderColumn>
            <TableRowColumn className="quantity_cell"><input id="quantity_input" type="text" value={this.state.quantity} onChange={this.quantityFieldUpdate} onKeyDown={this.quantityUpdate} /></TableRowColumn>
            <TableRowColumn className="serving_size_cell"><Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></TableRowColumn>
            <TableRowColumn className="calories_cell">{calories}</TableRowColumn>
          </TableRow>
          )
        }
        );
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
            <TableBody>
              {foodRows}
            </TableBody>
          </Table>
        </Paper>
      </MuiThemeProvider>

      </div>
    );
    }
}

