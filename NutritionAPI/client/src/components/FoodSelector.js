import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import FoodRow from './FoodRow';
import {findNutrient} from '../helpers/findNutrient.js';


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
      const foodRows = this.state.searchedFoods.map((food) =>
          <FoodRow key={food["ndbno"]} searchedFood={food} searchOrDaily={true} day={this.props.day} />
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
    	<table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Serving Size</th>
            <th scope="col">Calories</th>
          </tr>
        </thead>
        <tbody>
          {foodRows }
          
        </tbody>
      </table>
      </div>
    );
    }
}
