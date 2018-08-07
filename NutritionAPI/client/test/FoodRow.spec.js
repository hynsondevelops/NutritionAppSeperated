import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from './src/components/FoodRow';

spy(Foo.prototype, 'componentDidMount');

describe('<FoodRow />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});