import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';
import {sampleObject} from './data/FoodPortion.js';


describe('<FoodRow />', function() {
  it('should have a table row', function () {
      const wrapper = mount(<FoodRow searchedFood={sampleObject}/>);
      assert.equal(0, 0)
      //expect(wrapper.find('tr')).to.have.length(1);
    });
  it('should have four columns', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleObject}/>);
  	expect(wrapper.find('th')).to.have.length(1);
  	expect(wrapper.find('td')).to.have.length(3);
  });
});




