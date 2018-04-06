import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Micronutrient from '../src/components/Micronutrient.js';
import {dailyDietData} from './data/FoodPortion.js';
const foodPortions = JSON.parse(dailyDietData)["food_portions"]

const minerals = [
{ name: 'Calcium, Ca', nutrient_id: 301, total: 52},
{ name: 'Iron, Fe', nutrient_id: 303, total: 3.3},
{ name: 'Magnesium, Mg', nutrient_id: 304, total: 50},
{ name: 'Phosphorus, P', nutrient_id: 305, total: 352},
{ name: 'Potassium, K', nutrient_id: 306, total: 502},
{ name: 'Sodium, Na', nutrient_id: 307, total: 198},
{ name: 'Zinc, Zn', nutrient_id: 309, total: 5.6},
{ name: 'Copper, Cu', nutrient_id: 312, total: 0.19},
{ name: 'Manganese, Mn', nutrient_id: 315, total: 0.094},
{ name: 'Selenium, Se', nutrient_id: 317, total: 39.8}
]

describe('<Micronutrient />', function() {
  it('should have a minerals section', function () {
      const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#minerals_container')).to.have.length(1);
   });

  it('should have a vitamins section', function () {
      const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#vitamins_container')).to.have.length(1);

   });

  for (let i = 0; i < minerals.length; i++)
  {
  	it(`should have a ${minerals[i].name} section`, function () {
  	    const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
  	    expect(wrapper.find('#minerals_container').text()).to.include(minerals[i].name);
  	 });

  	it(`should have a ${minerals[i].name} total for daily diet`, function () {
  	    const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
  	    expect(wrapper.find(`#${minerals[i].name.split(',')[0]}_id`).text()).to.include(minerals[i].total);

  	 });

  }

});




