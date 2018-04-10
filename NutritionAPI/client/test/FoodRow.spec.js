import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';
import {sampleDailyFoodPortion, sampleDailyFoodPortionSearch} from './data/FoodPortion.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



describe('<FoodRow />', function() {
  it('should have a table row', function () {
      const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
      expect(wrapper.find(FoodRow)).to.have.length(1);
   });

  it('should have four columns', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	expect(wrapper.find('th')).to.have.length(1);
  	expect(wrapper.find('td')).to.have.length(3);
  });

  //data checks
  it('should have a table header with the food name', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	const tableHeaderText = wrapper.find('th').text()
  	expect(tableHeaderText).to.equal("Chicken, broilers or fryers, back, meat only, cooked, fried");
  }) 

  it('should have a table column with the quantity', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	expect(wrapper.state('quantity')).to.equal('2.0')
  }) 

  it('should have a table column with the serving size', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/> );
  	const tableHeaderText = wrapper.find('.serving_size_cell').at(0).text()
  	expect(tableHeaderText).to.equal('unit (yield from 1 lb ready-to-cook chicken)');
  }) 

  it('should have a table column with the calories', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('576');
  }) 

  it('should update the calories when quantity is changed', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	const quantityInput = wrapper.find('#quantity_input').at(0)
  	quantityInput.instance().value = "1"
  	quantityInput.simulate('change')
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('288');
  })


});




