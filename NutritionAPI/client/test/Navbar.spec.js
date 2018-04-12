import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Navbar from '../src/components/Navbar.js';
import {sampleDailyFoodPortion, sampleDailyFoodPortionSearch} from './data/FoodPortion.js';

describe('<Navbar />', function() {

});




