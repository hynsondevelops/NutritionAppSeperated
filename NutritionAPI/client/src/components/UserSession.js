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
import axios from 'axios'
import Tracker from './Tracker'

export default class UserSession extends React.Component {
  static propTypes = {
  	user: PropTypes.object
  	
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    this.state = {user: undefined, dailyDiet: undefined}
  }

  UserLogIn = () => {
  	let user = {"admin_user": {"email": "admin@example.com", "password": "password", "remember_me": "0"}}
  	axios.post('/admin/login', user)
  	.then(result => this.setUser(result))
  }
  setUser = (result) => {
  	this.setState({user: result.data})
  }

  getDailyDiet = () => {
  	console.log(this.state)
  	axios.get('api/daily_diets/1')
  	.then(result => this.setDailyDiet(result))

  }

  setDailyDiet = (result) => {
  	result.data.food_portions[0].food.data = JSON.parse(result.data.food_portions[0].food.data.replace(/=>/g, ":"))
  	this.setState({dailyDiet: result.data})
  	console.log(this.state.dailyDiet)
  }

  logOut = () => {
  	axios.get('/admin/logout')
  	.then(result => this.setState({user: undefined, dailyDiet: undefined}))
  }


  render() {
  	if (this.state.dailyDiet == undefined){
	    return (
	    	<MuiThemeProvider>
	    		<FlatButton label="Log In" onClick={this.UserLogIn}/>
	    		<FlatButton label="Daily Diet" onClick={this.getDailyDiet}/>
	    		<FlatButton label="Log out" onClick={this.logOut}/>
	    		<FlatButton label="State" onClick={console.log(this.state)}/>

	    	</MuiThemeProvider>
	    );
	}
	else {
		return (
			<MuiThemeProvider>
				<FlatButton label="Log In" onClick={this.UserLogIn}/>
				<FlatButton label="Daily Diet" onClick={this.getDailyDiet}/>
				<FlatButton label="Log out" onClick={this.logOut}/>
				<FlatButton label="State" onClick={console.log(this.state)}/>
				<Tracker dailyDiet={this.state.dailyDiet} searchedFoods={[]} />
			</MuiThemeProvider>
		)

	}
  }
}

