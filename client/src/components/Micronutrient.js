import PropTypes from 'prop-types';
import React from 'react';
import {findNutrient} from '../helpers/findNutrient.js';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const nutrientsNameId = [ [ 'Water', 255 ],
  [ 'Energy', 208 ],
  [ 'Energy', 268 ],
  [ 'Protein', 203 ],
  [ 'Total lipid (fat)', 204 ],
  [ 'Ash', 207 ],
  [ 'Carbohydrate, by difference', 205 ],
  [ 'Fiber, total dietary', 291 ],
  [ 'Calcium, Ca', 301 ],
  [ 'Iron, Fe', 303 ],
  [ 'Magnesium, Mg', 304 ],
  [ 'Phosphorus, P', 305 ],
  [ 'Potassium, K', 306 ],
  [ 'Sodium, Na', 307 ],
  [ 'Zinc, Zn', 309 ],
  [ 'Copper, Cu', 312 ],
  [ 'Manganese, Mn', 315 ],
  [ 'Selenium, Se', 317 ],
  [ 'Vitamin C, total ascorbic acid', 401 ],
  [ 'Thiamin', 404 ],
  [ 'Riboflavin', 405 ],
  [ 'Niacin', 406 ],
  [ 'Pantothenic acid', 410 ],
  [ 'Vitamin B-6', 415 ],
  [ 'Folate, total', 417 ],
  [ 'Folic acid', 431 ],
  [ 'Folate, food', 432 ],
  [ 'Folate, DFE', 435 ],
  [ 'Vitamin B-12', 418 ],
  [ 'Vitamin A, RAE', 320 ],
  [ 'Retinol', 319 ],
  [ 'Vitamin A, IU', 318 ],
  [ 'Fatty acids, total saturated', 606 ],
  [ '10:0', 610 ],
  [ '12:0', 611 ],
  [ '14:0', 612 ],
  [ '16:0', 613 ],
  [ '18:0', 614 ],
  [ 'Fatty acids, total monounsaturated', 645 ],
  [ '16:1 undifferentiated', 626 ],
  [ '18:1 undifferentiated', 617 ],
  [ '20:1', 628 ],
  [ '22:1 undifferentiated', 630 ],
  [ 'Fatty acids, total polyunsaturated', 646 ],
  [ '18:2 undifferentiated', 618 ],
  [ '18:3 undifferentiated', 619 ],
  [ '20:4 undifferentiated', 620 ],
  [ '20:5 n-3 (EPA)', 629 ],
  [ '22:5 n-3 (DPA)', 631 ],
  [ '22:6 n-3 (DHA)', 621 ],
  [ 'Cholesterol', 601 ],
  [ 'Tryptophan', 501 ],
  [ 'Threonine', 502 ],
  [ 'Isoleucine', 503 ],
  [ 'Leucine', 504 ],
  [ 'Lysine', 505 ],
  [ 'Methionine', 506 ],
  [ 'Cystine', 507 ],
  [ 'Phenylalanine', 508 ],
  [ 'Tyrosine', 509 ],
  [ 'Valine', 510 ],
  [ 'Arginine', 511 ],
  [ 'Histidine', 512 ],
  [ 'Alanine', 513 ],
  [ 'Aspartic acid', 514 ],
  [ 'Glutamic acid', 515 ],
  [ 'Glycine', 516 ],
  [ 'Proline', 517 ],
  [ 'Serine', 518 ] ]




export default class Micronutrients extends React.Component {
  static propTypes = {
    dailyDiet: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    
    this.state = { };
  }

  render() {
    //all in grams
    //0-3 are calories and macros so skip them
    //Minerals
    let minerals = [
    { name: 'Calcium, Ca', nutrient_id: 301, total: 0, daily_value: 1300, unit: "mg"},
    { name: 'Iron, Fe', nutrient_id: 303, total: 0, daily_value: 18, unit: "mg"},
    { name: 'Magnesium, Mg', nutrient_id: 304, total: 0, daily_value: 420, unit: "mg"},
    { name: 'Phosphorus, P', nutrient_id: 305, total: 0, daily_value: 1250, unit: "mg"},
    { name: 'Potassium, K', nutrient_id: 306, total: 0, daily_value: 4700, unit: "mg"},
    { name: 'Sodium, Na', nutrient_id: 307, total: 0, daily_value: 2400, unit: "mg"},
    { name: 'Zinc, Zn', nutrient_id: 309, total: 0, daily_value: 11, unit: "mg"},
    { name: 'Copper, Cu', nutrient_id: 312, total: 0, daily_value: 0.9, unit: "mg"},
    { name: 'Manganese, Mn', nutrient_id: 315, total: 0, daily_value: 2.3, unit: "mg"},
    { name: 'Selenium, Se', nutrient_id: 317, total: 0, daily_value: 55, unit: "mcg"}
    ]

    

    //Vitamins
    let vitamins = [  
      { name: 'A', nutrient_id: 320, total: 0, daily_value: 900, unit: "mcg"},
      { name: 'B1 (Thiamine)', nutrient_id: 404, total: 0, daily_value: 1.2, unit: "mg"},
      { name: 'B2 (Riboflavin)', nutrient_id: 405, total: 0, daily_value: 1.3, unit: "mg"},
      { name: 'B3 (Niacin)', nutrient_id: 406, total: 0, daily_value: 16, unit: "mg"},
      { name: 'B5 (Pantothenic Acid)', nutrient_id: 410, total: 0, daily_value: 5, unit: "mg"},
      { name: 'B6 (Pyridoxine)', nutrient_id: 415, total: 0, daily_value: 1.7, unit: "mg"},
      { name: 'B12 (Cobalamin)', nutrient_id: 418, total: 0, daily_value: 2.4, unit: "mcg"},
      { name: 'C', nutrient_id: 401, total: 0, daily_value: 90, unit: "mg"},
      { name: 'D', nutrient_id: 328, total: 0, daily_value: 20, unit: "mcg"}, 
      { name: 'E', nutrient_id: 323, total: 0, daily_value: 15, unit: "mg"}, 
      { name: 'Folate', nutrient_id: 417, total: 0, daily_value: 400, unit: "mcg"},
      { name: 'K', nutrient_id: 430, total: 0, daily_value: 120, unit: "mcg"}  
    ]

    let arrayStr = []

    for (let i = 0; i < this.props.dailyDiet.length; i++){
    	let nutrientArray = this.props.dailyDiet[i].food.data.nutrients
    	let portionQuantity = this.props.dailyDiet[i].quantity
    	//Minerals
      console.log(nutrientArray)
    	for (let j = 0; j < minerals.length; j++)
    	{
    		minerals[j].total += parseFloat(findNutrient(nutrientArray, minerals[j].nutrient_id).value) * parseFloat(portionQuantity)
    	}
      for (let j = 0; j < vitamins.length; j++)
      {
        vitamins[j].total += parseFloat(findNutrient(nutrientArray, vitamins[j].nutrient_id).value) * parseFloat(portionQuantity)
      }
    }

    const mineralsToRender = minerals.map(function(mineral){
    	let nutrientId = `${mineral.name.split(',')[0]}_id`
	    return <h3 id={nutrientId}>{mineral.name}: {mineral.total.toFixed(2)}{mineral.unit}/{mineral.daily_value}{mineral.unit} <CircularProgress
                    mode="determinate"
                    value={mineral.total.toFixed(2)}
                    max={mineral.daily_value}
                    size={60}
                    style={{top: "20px"}}

                  /><div className="circular_percent">{(mineral.total.toFixed(2)/mineral.daily_value * 100).toFixed(0)}%</div></h3>;
    })

    const vitaminsToRender = vitamins.map(function(vitamin){
      let nutrientId = `${vitamin.name.split(',')[0]}_id`
      return <h3 id={nutrientId}>{vitamin.name}: {vitamin.total.toFixed(2)}{vitamin.unit}/{vitamin.daily_value}{vitamin.unit} <CircularProgress
                    mode="determinate"
                    value={vitamin.total.toFixed(2)}
                    max={vitamin.daily_value}
                    size={60}
                    style={{top: "20px"}}

                  /><div className="circular_percent">{(vitamin.total.toFixed(2)/vitamin.daily_value * 100).toFixed(0)}%</div></h3>;
    })


    return (
    	<div id="micronutrient_container"> 
        <div id="micronutrient_header">Micronutrients</div>
	      <div id="minerals_container">
          <h3> Minerals </h3>
	      	{mineralsToRender}
	      </div>
	      <div id="vitamins_container">
          <h3> Vitamins </h3>
          {vitaminsToRender}
	      </div>
      </div>
    

    );
  }
}