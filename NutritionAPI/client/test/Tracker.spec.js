import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';
import FoodSelector from '../src/components/FoodSelector.js';
import DailyFoods from '../src/components/DailyFoods.js';
import Tracker from '../src/components/Tracker.js';
import {sampleObject, dailyDietData} from './data/FoodPortion.js';
const sampleFoods = sampleObject[0]

describe('<Tracker />', function() {
  it('should have a table Selector', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData} />);
      expect(wrapper.find('tr')).to.have.length(4);
   });

  it('should have four columns', function() {
  	const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
  	expect(wrapper.find('th')).to.have.length(10);
  });

  //data checks
    it('should have a table header with the food name', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      const tableHeaders = wrapper.find('th')
      expect(tableHeaders.contains("Chicken, broilers or fryers, back, meat only, cooked, fried")).to.equal(true);
    }) 

    it('should have a table column with the quantity', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      wrapper.find("#quantity_input")
      expect(wrapper.find("#quantity_input")).to.have.length(2)
    }) 

    it('should have a table column with the serving size', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      const servingSizes = wrapper.find('.serving_size_cell')
      expect(servingSizes.contains("unit (yield from 1 lb ready-to-cook chicken)")).to.equal(true);
    }) 

    it('should have a table column with the calories', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      const calories = wrapper.find('.calories_cell')
      expect(calories.contains(229)).to.equal(true);
    }) 

    it('should update the calories when quantity is changed', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      const quantityInput = wrapper.find('#quantity_input').at(0)
      quantityInput.instance().value = "2"
      quantityInput.simulate('change')
      const calories = wrapper.find('.calories_cell')
      expect(calories.contains(458)).to.equal(true);
    })

    //child components
    it('should have one FoodSelector', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      wrapper.find(FoodSelector)
      expect(wrapper.find(FoodSelector)).to.have.length(1);
    }) 

    it('should have one DailyFoods', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      wrapper.find(DailyFoods)
      expect(wrapper.find(FoodSelector)).to.have.length(1);
    })






});




