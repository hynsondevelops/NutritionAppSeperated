import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';


describe('<FoodRow />', () => {
  it('should have a table row', function () {
      const wrapper = mount(<FoodRow/>);
      expect(wrapper.find('tr')).to.have.length(1);
    });
});