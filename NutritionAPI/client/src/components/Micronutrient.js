import PropTypes from 'prop-types';
import React from 'react';


export default class Micronutrients extends React.Component {
  static propTypes = {
    dailyDiet: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    
    this.state = { };
  }

  render() {
    //all in grams
    //0-3 are calories and macros so skip them

    return (
    	<div id="micronutrients_container"> 
	      <div id="minerals_container">
	      </div>
	      <div id="vitamins_container">
	      </div>
      	</div>
    

    );
  }
}