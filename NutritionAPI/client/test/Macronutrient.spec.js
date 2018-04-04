import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Macronutrient from '../src/components/Macronutrient.js';
import {dailyDietData} from './data/FoodPortion.js';
const foodPortions = JSON.parse(dailyDietData)["food_portions"]


describe('<Macronutrient />', function() {
  it('should have a calorie total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={foodPortions}/>);
      console.log(wrapper.find('#calorie_total'))
      expect(wrapper.find('#calorie_total').text()).to.include("576 kcal");
   });

  it('should have a carbohydrate total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#carbohydrate_total').text()).to.include("11.36 g");
   });

  it('should have a protein total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#protein_total').text()).to.include("59.98 g");
   });

  it('should have a fat total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#fat_total').text()).to.include("30.64 g");
   });


});




