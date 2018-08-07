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
    let micros = [];
    //0-3 are calories and macros so skip them
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++){
    	for (let j = 4; j < Object.keys(this.props.dailyDiet[i][0].nutrients).length; j++){
      		micros.push(<h3> {this.props.dailyDiet[i][0].nutrients[j].name}: {parseFloat(this.props.dailyDiet[i][0].nutrients[j].value) * parseFloat(this.props.dailyDiet[i][1])} {this.props.dailyDiet[i][0].nutrients[j].unit} </h3>)
      	}
    }
   	const micro = micros
   	console.log(micros)
    return (
      <div>
        {micro}
      </div>
    

    );
  }
}