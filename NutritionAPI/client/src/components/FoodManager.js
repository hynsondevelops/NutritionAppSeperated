import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector.js';

export default class FoodManager extends React.Component {
  static propTypes = {
  	 searchedFoods: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {  };
  }

  getInitialState(){
      return {searchedFoods: this.props.searchedFoods};
  }

  render() {
    return (
		  <FoodSelector searchedFoods={this.props.searchedFoods} />
    );
  }
}
