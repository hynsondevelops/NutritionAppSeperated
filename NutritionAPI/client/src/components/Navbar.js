import PropTypes from 'prop-types';
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


export default class Navbar extends React.Component {
  static propTypes = {
  	
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

  homeButtonPressed = () => {

  }

  render() {
    return (
  	<MuiThemeProvider>
  	  <Toolbar>
  	    <ToolbarGroup firstChild={true}>
  	      <FlatButton label="Home" />
  	    </ToolbarGroup>
  	    <ToolbarGroup>
  	      <ToolbarTitle text="Options" onClick={this.homeButtonPressed}/>
  	      <FontIcon className="muidocs-icon-custom-sort" />
  	      <ToolbarSeparator />
  	      <RaisedButton label="Create Broadcast" primary={true} />
  	      <IconMenu
  	        iconButtonElement={
  	          <IconButton touch={true}>
  	            <NavigationExpandMoreIcon />
  	          </IconButton>
  	        }
  	      >
  	        <MenuItem primaryText="Log in" />
  	        <MenuItem primaryText="Register" />
  	      </IconMenu>
  	    </ToolbarGroup>
  	  </Toolbar>
	</MuiThemeProvider>
    );
  }
}

