import PropTypes from 'prop-types';
import React from 'react';
import Tracker from './Tracker';


export default class Container extends React.Component {
  static propTypes = {
  	searchedFoods: PropTypes.array,
    dailyDiet: PropTypes.array,
    day: PropTypes.string
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
  }

  render() {
  	let content = ""
  	if (this.props.dailyDiet != null)
  	{
  		content = <Tracker searchedFoods={this.props.searchedFoods} dailyDiet={this.props.dailyDiet} day={this.props.day} />
  	}
  	else
  	{
  		content = <h3> Please Log in </h3>
  	}
  	const renderContent = content;
    return (
      <div>
      	{renderContent}
      </div>

    

    );
  }
}

