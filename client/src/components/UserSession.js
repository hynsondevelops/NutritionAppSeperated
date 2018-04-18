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
  }

  UserLogIn = () => {
  	let user = {"admin_user": {"email": this.state.email, "password": this.state.password, "remember_me": "0"}}
    axios.post('/admin/login', user)
    .then(result => this.setUser(result))
  }

  setUserLogin = (result, user) => {
    console.log(result)
    console.log(user)
    axios.post('/admin/login', user)
    .then(result => this.setUser(result))
  }

  setUser = (result) => {
    console.log(result.data)
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

  registerUserLoginAdmin = () => {
    let adminUser = {"admin_user": {"email": "admin@example.com", "password": "password", "remember_me": "0"}}
    axios.post('/admin/login', adminUser)
    .then(result => this.registerUser(adminUser))
  }

  registerUser = (adminUser) => {
    let user = {"admin_user": {"email": this.state.email, "password": this.state.password}}
    axios.post('/admin/admin_users', user)
    .then(result => this.logOutAdmin())
  }

  logOutAdmin = () => {
    axios.get('/admin/logout')
    .then(result => this.UserLogIn())
  }

  handleAddFoodPortion = (event, food_portion) => {
    console.log("Event")
    console.log(event)
    console.log("Food Portion")
    console.log(food_portion)
    axios.post('/api/foods',{name: food_portion.food.name, data: food_portion.food})
    .then(result => this.handleUpdateDailyDiet(result, food_portion))
  }

  handleUpdateDailyDiet = (result, food_portion) => {
    axios.post('/api/food_portions', {food_id: result.data.id, daily_diet_id: this.state.dailyDiet.id, quantity: food_portion.quantity})
    .then(result => this.getDailyDiet(0))
  }

  render() {
    console.log("Rendering")
  	if (this.state.dailyDiet == undefined){
	    return (
	    	<MuiThemeProvider>
          <div id="login_container">
            <div id="login_header">Snacker Tracker</div>
              <TextField hintText="Email" floatingLabelText="Email" onChange={this.setEmail}/><br />
              <TextField hintText="Password" floatingLabelText="Password" type="password" onChange={this.setPassword}/><br />
              <FlatButton id="login_button" backgroundColor="#41CC92" hoverColor="#3DCCC2" labelStyle={{color: 'white'}} label="Log In" onClick={this.UserLogIn}/>
              <FlatButton id="register_button" backgroundColor="#41CC92" hoverColor="#3DCCC2" labelStyle={{color: 'white'}} label="Register" onClick={() => this.registerUserLoginAdmin()}/>
          </div>
	    	</MuiThemeProvider>
	    );
	}
	else {
		return (
			<MuiThemeProvider>
        <Toolbar style={{background: "linear-gradient(to bottom right, #41CC92, #048BA8"}}>
          <h3>Hello, {this.state.email}!</h3>
          <ToolbarGroup style={{ 
                    float       : 'none', 
                    width       : '400px',
                    marginLeft  : 'auto',
                    marginRight : '0'
                }}>
            <div id="daily_diet_navigator">
              <svg onClick={() => this.getDailyDiet(-1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>
              <FlatButton label={this.state.date} onClick={() => this.getDailyDiet(0)}/>
              <svg onClick={() => this.getDailyDiet(1)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>
            </div>
            <FlatButton label="Log out" onClick={this.logOut}/>

          </ToolbarGroup>
      
        </Toolbar>
        <br></br>
				<Tracker dailyDiet={this.state.dailyDiet} searchedFoods={[]} addFoodCallback={this.handleAddFoodPortion} />
			</MuiThemeProvider>
		)

	 }
  }
}

