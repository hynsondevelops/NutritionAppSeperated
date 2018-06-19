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
import FlatButton from 'material-ui/FlatButton';




export default class FoodSelector extends React.Component {
    static propTypes = {
       foods: PropTypes.array,
       searchString: PropTypes.string,
       dailyDiet: PropTypes.object,
       dailyDietId: PropTypes.integer
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
    this.state = {foods: this.props.foods, food_portions: food_portions, searchString: this.props.searchString}
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.searchString == "") {
        this.setState({food_portions: []})
      }
      else {
        this.setState({food_portions: [], searchString: nextProps.searchString}, () => {
          this.clearedFoodPortions();
        })
      }
    }

    clearedFoodPortions = () => {
      console.log(this.state.searchString)
      if (this.state.searchString != undefined) {
        let APIURL = ("https://api.nal.usda.gov/ndb/search/?format=json&q=" + this.state.searchString + "&sort=r&max=10&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
        console.log(APIURL)
        axios.get(APIURL)
        .then(result => this.successfulSearch(result))
      }
    }

    successfulSearch = (result) => {
      if (result.data.errors != undefined) {
        console.log(result.data.errors)
      }
      else {
        for (let i = 0; i < result.data.list.item.length; i++) {
          let APIURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + result.data.list.item[i].ndbno + "&type=f&format=json&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7"
          axios.get(APIURL)
          .then(result => this.successfulDetailedSearch(result))
        }
      }
    }

    successfulDetailedSearch = (result) => {
      this.setState({food_portions: this.state.food_portions.concat({food: result.data.report.food, quantity: 1})})
    }



    quantityFieldUpdate = (event, food_portion) => {
      // if 0 check if user wants to delete food_portion
      console.log(event.keyCode)
      if (event.target.value == 0)
      {

      }
      else
      {
        //get the name of the food to be updated
        const name = event.currentTarget.parentElement.parentElement.children[0].innerHTML
        //find the food_portion object to update
        let newPortions = this.state.food_portions
        console.log("DOWN")
        console.log(newPortions)
        let newPortion = ""
        for (let i = 0; i < newPortions.length; i++)
        {
          console.log("LOOp")
          console.log(newPortions[i].food.name)
          if (newPortions[i].food.name == name){
            console.log("NAME")
            console.log(event.target.value)
            newPortions[i].quantity = event.target.value
            newPortion = newPortions[i]
          }
        }
        this.setState({food_portions: newPortions})
        this.props.addFoodCallback(event, newPortion)
      }

    }

    searchUSDA = (event) => {
        //making call to USDA database 
        let APIURL = ("https://api.nal.usda.gov/ndb/search/?format=json&q=" + event.target.value + "&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
       /* $.getJSON({
            url:APIURL, 
            success: this.initialAjaxSuccess
        })*/
    }
    

    energyAndServingSize = (food_portion) => {
      let findingEnergy = true;
      let i = 0;
      let caloriesTemp;
      let servingSizesTemp = [];
      <input type="submit" onClick={this.handleAddFoodPortion} />
      let AddFoodButtonTemp = ""
      //search result
      if (this.props.tableType)
      {
        AddFoodButtonTemp = <input id="add_food_button" type="submit" value="Add" onClick={this.handleAddFoodPortion} />
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
              <TableHeaderColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="name_cell" scope="row">{tableReadyFoodPortion.name}</TableHeaderColumn>
              <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="quantity_cell"><input id="quantity_input" type="text" value={tableReadyFoodPortion.quantity} onChange={(event) => this.quantityFieldUpdate(event, food_portion)} /></TableRowColumn>
              <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="serving_size_cell"><Dropdown className="serving_size_dropdown" options={tableReadyFoodPortion.servingSizes} onChange={this._onSelect} value={tableReadyFoodPortion.servingSizes[0]} placeholder="Select an option" /></TableRowColumn>
              <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}} className="calories_cell">{tableReadyFoodPortion.calories}</TableRowColumn>
            </TableRow>
            )
          });
      return (
        <div id="food_selector_container">
          <MuiThemeProvider>
            <Paper zDepth={5}>
              <div id="food_selector_header">Food Selector</div>
              <Table id="food_selector_table" height={'300px'}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn id="name_header">Name</TableHeaderColumn>
                    <TableHeaderColumn id="quantity_header">Quantity</TableHeaderColumn>
                    <TableHeaderColumn id="serving_size_header">Serving Size</TableHeaderColumn>
                    <TableHeaderColumn id="calories_header">Calories</TableHeaderColumn>
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