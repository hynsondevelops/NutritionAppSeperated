import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';
import FoodTable from '../src/components/FoodTable.js';
import {sampleObject} from './data/FoodPortion.js';
const samplefood_portions = sampleObject[0]

describe('<FoodTable />', function() {
  it('should have a table Selector', function () {
      const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
      expect(wrapper.find('tr')).to.have.length(2);
   });

  it('should have four columns', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	expect(wrapper.find('th')).to.have.length(5);
  });

  //data checks
  it('should have a table header with the food name', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	const tableHeaderText = wrapper.find('.name_cell').at(0).text()
  	expect(tableHeaderText).to.equal('Beef, chuck eye roast, boneless, America\'s Beef Roast, separable lean and fat, trimmed to 0" fat, select, cooked, roasted');
  }) 

  it('should have a table column with the quantity', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	expect(wrapper.find('#quantity_input')).to.have.length(1)
  }) 

  it('should have a table column with the serving size', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	const tableHeaderText = wrapper.find('.serving_size_cell').at(0).text()
  	expect(tableHeaderText).to.equal('oz');
  }) 

  it('should have a table column with the calories', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('229');
  }) 

  it('should update the calories when quantity is changed', function() {
  	const wrapper = mount(<FoodTable food_portions={[samplefood_portions]}/>);
  	const quantityInput = wrapper.find('#quantity_input').at(0)
  	quantityInput.instance().value = "2"
  	quantityInput.simulate('change')
  	const tableHeaderText = wrapper.find('.calories_cell').at(0).text()
  	expect(tableHeaderText).to.equal('458');
  })




});



