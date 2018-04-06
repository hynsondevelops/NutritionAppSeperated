import PropTypes from 'prop-types';
import React from 'react';
import {findNutrient} from '../helpers/findNutrient.js';

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
    { name: 'Calcium, Ca', nutrient_id: 301, total: 0},
    { name: 'Iron, Fe', nutrient_id: 303, total: 0},
    { name: 'Magnesium, Mg', nutrient_id: 304, total: 0},
    { name: 'Phosphorus, P', nutrient_id: 305, total: 0},
    { name: 'Potassium, K', nutrient_id: 306, total: 0},
    { name: 'Sodium, Na', nutrient_id: 307, total: 0},
    { name: 'Zinc, Zn', nutrient_id: 309, total: 0},
    { name: 'Copper, Cu', nutrient_id: 312, total: 0},
    { name: 'Manganese, Mn', nutrient_id: 315, total: 0},
    { name: 'Selenium, Se', nutrient_id: 317, total: 0}
    ]
    let arrayStr = []
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++){
    	let nutrientArray = JSON.parse(this.props.dailyDiet[i].food.data).nutrients
    	let portionQuantity = this.props.dailyDiet[i].quantity
    	//Minerals
    	for (let j = 0; j < minerals.length; j++)
    	{
    		minerals[j].total += parseFloat(findNutrient(nutrientArray, minerals[j].nutrient_id).value) * parseFloat(portionQuantity)
    	}
    }

    const mineralsToRender = minerals.map(function(mineral){
    	let nutrientId = `${mineral.name.split(',')[0]}_id`
	    return <h3 id={nutrientId}>{mineral.name}: {mineral.total}</h3>;
    })


    return (
    	<div id="micronutrients_container"> 
	      <div id="minerals_container">
	      	{mineralsToRender}
	      </div>
	      <div id="vitamins_container">
	      </div>
      	</div>
    

    );
  }
}