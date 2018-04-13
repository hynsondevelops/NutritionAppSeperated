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

  getDailyDiet = (dayIncrement) => {
  	console.log(this.state)
    let dateDesired = ""
    if (this.state.dailyDiet != undefined) {
      let dateObject = Date.parse(this.state.dailyDiet.date);
      console.log(dateObject + 1)
      this.state.dailyDiet
    }
    const dailyDietURL = ""
  	axios.get('api/daily_diets/1', {params: {date: "03/29/2018", day_increment: dayIncrement}})
  	.then(result => this.setDailyDiet(result))

  }

  setDailyDiet = (result) => {
    console.log(result.data)
    for (let i = 0; i < result.data.food_portions.length; i++) {
      result.data.food_portions[i].food.data = JSON.parse(result.data.food_portions[i].food.data.replace(/=>/g, ":"))

    }
  	this.setState({dailyDiet: result.data})
    console.log("Below")
  	console.log(this.state.dailyDiet)
    this.forceUpdate()
  }

  logOut = () => {
  	axios.get('/admin/logout')
  	.then(result => this.setState({user: undefined, dailyDiet: undefined}))
  }


  render() {
    console.log("Rendering")
  	if (this.state.dailyDiet == undefined){
	    return (
	    	<MuiThemeProvider>
	    		<Toolbar>
	    		  <ToolbarGroup firstChild={true}>
		    		  <FlatButton label="Log In" onClick={this.UserLogIn}/>
              <FlatButton label="Daily Diet" onClick={() => this.getDailyDiet(0)}/>
		    		  <FlatButton label="Yesterday" onClick={() => this.getDailyDiet(-1)}/>
              <FlatButton label="Tommorrow" onClick={() => this.getDailyDiet(1)}/>
		    		  <FlatButton label="Log out" onClick={this.logOut}/>
		    		  <FlatButton label="State" onClick={console.log(this.state)}/>	    		  
		    		</ToolbarGroup>
	    		</Toolbar>
	    	</MuiThemeProvider>
	    );
	}
	else {
		return (
			<MuiThemeProvider>
        <FlatButton label="Log In" onClick={this.UserLogIn}/>
        <FlatButton label="Daily Diet" onClick={() => this.getDailyDiet(0)}/>
        <FlatButton label="Yesterday" onClick={() => this.getDailyDiet(-1)}/>
        <FlatButton label="Tommorrow" onClick={() => this.getDailyDiet(1)}/>
        <FlatButton label="Log out" onClick={this.logOut}/>
        <FlatButton label="State" onClick={console.log(this.state)}/>  
				<Tracker dailyDiet={this.state.dailyDiet} searchedFoods={[]} />
			</MuiThemeProvider>
		)

	}
  }
}

