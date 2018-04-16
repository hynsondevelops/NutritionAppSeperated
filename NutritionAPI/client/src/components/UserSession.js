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
import TextField from 'material-ui/TextField';


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
    this.state = {user: undefined, dailyDiet: undefined, date: "03/29/2018", email: undefined, password: undefined}
  }

  componentDidMount = () => {
    let user = {"admin_user": {"email": "admin@example.com", "password": "password", "remember_me": "0"}}
    axios.post('/admin/login', user)
    .then(result => console.log(result))
  }

  UserLogIn = () => {
  	let user = {"admin_user": {"email": this.state.email, "password": this.state.password, "remember_me": "0"}}
  	axios.post('/admin/login', user)
  	.then(result => this.setUser(result))
  }

  setUser = (result) => {
  	this.setState({user: result.data})
    this.getDailyDiet(0)
  }

  setEmail = (event) => {
    this.setState({email: event.target.value})
  }

  setPassword = (event) => {
    this.setState({password: event.target.value})
  }

  getDailyDiet = (dayIncrement) => {
  	console.log(this.state)
    let dateDesired = ""
    //dailyDiet state set
    if (this.state.dailyDiet != undefined) {
      dateDesired = this.state.dailyDiet.date
    }
    //no dailyDiet state yet
    else {
      dateDesired = this.state.date
    }
    const dailyDietURL = ""
  	axios.get('api/daily_diets/1', {params: {date: dateDesired, day_increment: dayIncrement}})
  	.then(result => this.setDailyDiet(result))

  }

  setDailyDiet = (result) => {
    console.log(result)
    console.log(result.data)
    for (let i = 0; i < result.data.food_portions.length; i++) {
      result.data.food_portions[i].food.data = JSON.parse(result.data.food_portions[i].food.data.replace(/=>/g, ":"))
    }
  	this.setState({dailyDiet: result.data, date: result.data.date})
    console.log("Below")
  	console.log(this.state.date)
  }

  logOut = () => {
  	axios.get('/admin/logout')
  	.then(result => this.setState({user: undefined, dailyDiet: undefined}))
  }

  registerUser = () => {
    let user = {"admin_user": {"email": this.state.email, "password": this.state.password}}
    axios.post('/admin/admin_users', user)
    .then(result => this.logOutAdmin())
  }

  logOutAdmin = () => {
    axios.get('/admin/logout')
    .then(result => this.UserLogIn())
  }


  render() {
    console.log("Rendering")
  	if (this.state.dailyDiet == undefined){
	    return (
	    	<MuiThemeProvider>
	    		<Toolbar>
	    		  <ToolbarGroup firstChild={true}>
		    		  <FlatButton label="Log In" onClick={this.UserLogIn}/>
              <FlatButton label="Register" onClick={() => this.registerUser()}/>
              <svg onClick={() => this.getDailyDiet(-1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>
		    		  <FlatButton label={this.state.date} onClick={() => this.getDailyDiet(0)}/>
              <svg onClick={() => this.getDailyDiet(1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>
		    		  <FlatButton label="Log out" onClick={this.logOut}/>
		    		</ToolbarGroup>
	    		</Toolbar>
          <TextField hintText="Username" onChange={this.setEmail}/><br />
          <TextField hintText="Password" onChange={this.setPassword}/><br />

	    	</MuiThemeProvider>
	    );
	}
	else {
		return (
			<MuiThemeProvider>
        <FlatButton label="Log In" onClick={this.UserLogIn}/>
        <svg onClick={() => this.getDailyDiet(-1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>
        <FlatButton label={this.state.date} onClick={() => this.getDailyDiet(0)}/>
        <svg onClick={() => this.getDailyDiet(1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>
        <FlatButton label="Log out" onClick={this.logOut}/>
				<Tracker dailyDiet={this.state.dailyDiet} searchedFoods={[]} />
			</MuiThemeProvider>
		)

	}
  }
}

