import PropTypes from 'prop-types';
import React from 'react';
import FoodRow from './FoodRow.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class DailyFoods extends React.Component {
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
    this.state = {};
  }

  getInitialState(){
      return {dailyDiet: this.props.dailyDiet};
  }


  render() {
    const foodRows = this.props.dailyDiet.map((food) =>
        <FoodRow key={food["ndbno"]} searchedFood={food} searchOrDaily={false}/>
      );
    return (
      <MuiThemeProvider>
      	<Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Serving Size</TableHeaderColumn>
              <TableHeaderColumn>Calories</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {foodRows}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}