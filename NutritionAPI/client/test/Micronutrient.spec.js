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


describe('<Micronutrient />', function() {
  it('should have a minerals section', function () {
      const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#minerals_container')).to.have.length(1);
   });

  it('should have a vitamins section', function () {
      const wrapper = mount(<Micronutrient dailyDiet={foodPortions}/>);
      expect(wrapper.find('#vitamins_container')).to.have.length(1);

   });

});




