import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';
import FoodSelector from '../src/components/FoodSelector.js';
import {sampleFoodSearchResults} from './data/FoodPortion.js';


describe('<FoodSelector />', function() {
  it('should have a table Selector', function () {
      const wrapper = mount(<FoodSelector searchedFoods={sampleFoodSearchResults}/>);
      expect(wrapper.find('tr')).to.have.length(1);
   });

  it('should have four columns', function() {
  	const wrapper = mount(<FoodSelector searchedFoods={sampleFoodSearchResults}/>);
  	expect(wrapper.find('th')).to.have.length(4);
  });




});




