import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Macronutrient from '../src/components/Macronutrient.js';
import {sampleDailyFoodPortion, sampleDailyFoodPortionSearch} from './data/FoodPortion.js';

describe('<Macronutrient />', function() {
  it('should have a calorie total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleDailyFoodPortion}/>);
      expect(wrapper.find('.calorie_total')).to.have.text("blank kcal");
   });

  it('should have a carbohydrate total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleDailyFoodPortion}/>);
      expect(wrapper.find('.carbohydrate_total')).to.have.text("blank g");
   });

  it('should have a protein total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleDailyFoodPortion}/>);
      expect(wrapper.find('.protein_total')).to.have.text("blank g");
   });

  it('should have a fat total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleDailyFoodPortion}/>);
      expect(wrapper.find('.fat_total')).to.have.text("blank g");
   });


});




