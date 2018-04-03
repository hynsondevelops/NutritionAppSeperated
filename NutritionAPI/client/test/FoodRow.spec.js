import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';
import {sampleDailyFoodPortion, sampleDailyFoodPortionSearch} from './data/FoodPortion.js';


describe('<FoodRow />', function() {
  it('should have a table row', function () {
      const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
      expect(wrapper.find('tr')).to.have.length(1);
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
  	expect(tableHeaderText).to.equal('Beef, chuck eye roast, boneless, America\'s Beef Roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted');
  }) 

  it('should have a table column with the quantity', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	expect(wrapper.state('quantity')).to.equal('1.0')
  }) 

  it('should have a table column with the serving size', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/> );
  	const tableHeaderText = wrapper.find('.serving_size_cell').text()
  	expect(tableHeaderText).to.equal('oz');
  }) 

  it('should have a table column with the calories', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	const tableHeaderText = wrapper.find('.calories_cell').text()
  	expect(tableHeaderText).to.equal('229');
  }) 

  it('should update the calories when quantity is changed', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleDailyFoodPortion} searchOrDaily={false}/>);
  	const quantityInput = wrapper.find('#quantity_input')
  	quantityInput.instance().value = "2"
  	quantityInput.simulate('change')
  	const tableHeaderText = wrapper.find('.calories_cell').text()
  	expect(tableHeaderText).to.equal('458');
  })


});




