

import * as React from "react";
import './App.css';
import logo from './logo.png';
import {addTodo} from './actions/actions'
import TextBox from "react-uwp/TextBox";
import Icon from "react-uwp/Icon";
import Button from "react-uwp/Button";
import { connect } from 'react-redux';
import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";

const baseStyle: React.CSSProperties = {
  margin: "10px 0",
  background: "white",
  height: "40px",
  width: "400px"
};

const buttonbaseStyle: React.CSSProperties = {
  margin: "10px 10px 10px 0",
  background: "white"
};

const buttonbaseStyler: React.CSSProperties = {
  margin: "10px 10px 10px 0",
  background: "white",
  float: "right"
};

class App extends React.Component<{}, {}> {
  constructor(props) {
      super(props);
      this.state = {
        VUsername: "",
        VPass:""
      }
      this.changeUser = this.changeUser.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.clickSignIn = this.clickSignIn.bind(this);
   };

  

   changeUser(val){
    this.setState({VUsername: val});
   }

   changePassword(val){
    this.setState({VPass: val});
   }

   clickSignIn(){
      this.props.signIn(this.state.VUsername,this.state.VPass);
   }

  render() {
    {!this.props.failureStatus &&  window.sessionStorage.clear();}
    const { dispatch } = this.props
    return (
      <div>
        <div  className="App-header">
        {this.props.failureStatus ? 
        <div class="alert-danger">
          The Username or Password is incorrect.
        </div>
         : ""}
        <TextBox
          style={baseStyle}
          placeholder="Username"
          defaultValue={this.state.VUsername}
          onChangeValue={this.changeUser}
          leftNode={<Icon style={{ margin: "0 8px" }}>ContactLegacy</Icon>}
        />
        <TextBox
          style={baseStyle}
          type="Password"
          placeholder="Password"
          defaultValue={this.state.VPass}
          onChangeValue={this.changePassword}
          leftNode={<Icon style={{ margin: "0 8px" }}>PermissionsLegacy</Icon>}
        />
        <div className="row">
        <Button style={buttonbaseStyle} onClick={this.clickSignIn}>
        <NavLink className="SigninLinkLogin" to="/stuff">
          SIGN IN
          </NavLink>
        </Button>
        </div>
        
        <img src={logo} alt="logo" className="logoPos" /> </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {postReducer} = state
  return {
      failureStatus: postReducer  ? postReducer.loginFaliure : false,
      loginData: postReducer  ? postReducer.loginData : []
  }
  
 
}

const mapDispatchToProps = dispatch => ({
  signIn: (name,pass) => dispatch(addTodo(name,pass))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
