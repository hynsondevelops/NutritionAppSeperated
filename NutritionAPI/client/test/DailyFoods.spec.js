import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import DailyFoods from '../src/components/DailyFoods.js';
import {sampleFoodPortions} from './data/FoodPortion.js';
const sample_food_portions = sampleFoodPortions.dailyDiet.food_portions

describe('<DailyFoods />', function() {
  it('should have a table Selector', function () {
      const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
      expect(wrapper.find('tr')).to.have.length(2);
   });

  it('should have four columns', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	expect(wrapper.find('th')).to.have.length(5);
  });

  //data checks
  it('should have a table header with the food name', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	const tableHeaders = wrapper.find('th')
  	expect(tableHeaders.contains("Chicken, broilers or fryers, back, meat only, cooked, fried")).to.equal(true);
  }) 

  it('should have a table column with the quantity', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	wrapper.find("#quantity_input")
  	expect(wrapper.find("#quantity_input")).to.have.length(1)
  }) 

  it('should have a table column with the serving size', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	const tableHeaderText = wrapper.find('.serving_size_cell').at(0).text()
  	expect(tableHeaderText).to.equal('unit (yield from 1 lb ready-to-cook chicken)');
  }) 

  it('should have a table column with the calories', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('576');
  }) 

  it('should update the calories when quantity is changed', function() {
  	const wrapper = mount(<DailyFoods food_portions={sample_food_portions}/>);
  	const quantityInput = wrapper.find('#quantity_input').at(0)
  	quantityInput.instance().value = "1"
  	quantityInput.simulate('change')
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('288');
  })



});




