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
import Macronutrient from '../src/components/FoodSelector.js';
import Micronutrient from '../src/components/FoodSelector.js';

import Tracker from '../src/components/Tracker.js';
import {sampleObject, dailyDietData} from './data/FoodPortion.js';
const sampleFoods = sampleObject[0]

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
      expect(wrapper.find(FoodSelector)).to.have.length(1);
    }) 

    it('should have one DailyFoods', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      expect(wrapper.find(DailyFoods)).to.have.length(1);
    })

    it('should have one Micronutrient', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      expect(wrapper.find(Micronutrient)).to.have.length(1);
    })

    it('should have one Macronutrient', function() {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
      wrapper.find(Macronutrient)
      expect(wrapper.find(Macronutrient)).to.have.length(1);
    })

    //Micronutrients
    it('should have a minerals section', function () {
        const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#minerals_container')).to.have.length(1);
     });

    it('should have a vitamins section', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#vitamins_container')).to.have.length(1);

     });

    for (let i = 0; i < minerals.length; i++)
    {
      it(`should have a ${minerals[i].name} section`, function () {
        const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
          expect(wrapper.find('#minerals_container').text()).to.include(minerals[i].name);

       });

      it(`should have a ${minerals[i].name} total for daily diet`, function () {
        const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
          expect(wrapper.find(`#${minerals[i].name.split(',')[0]}_id`).text()).to.include(minerals[i].total);

       });

    }


    //Macronutrients
    it('should have a calorie total for daily diet', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#calorie_total').text()).to.include("576 kcal");
     });

    it('should have a carbohydrate total for daily diet', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#carbohydrate_total').text()).to.include("11.36 g");
     });

    it('should have a protein total for daily diet', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#protein_total').text()).to.include("59.98 g");
     });

    it('should have a fat total for daily diet', function () {
      const wrapper = mount(<Tracker searchedFoods={[sampleFoods]} dailyDiet={dailyDietData}/>);
        expect(wrapper.find('#fat_total').text()).to.include("30.64 g");
     });






});




