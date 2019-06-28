import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";
import App from "./App";
import Stuff from "./Stuff";
import { connect } from 'react-redux';
import { withRouter } from "react-router";


export class StartApp extends Component {
  render() {
    return (
      <HashRouter>
          <div className="content">
            {!(this.props.loginData && this.props.loginData.sites && this.props.loginData.sites.length !== 0) && 
                <Route path="/" component={App}/>
            }
            {(this.props.loginData && this.props.loginData.sites && this.props.loginData.sites.length !== 0) && 
                <Route path="/stuff" component={Stuff}/>
            }
          </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  const {postReducer} = state
  return {
      failureStatus: postReducer  ? postReducer.loginFaliure : false,
      loginData: postReducer  ? postReducer.loginData : []
  }
  
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
}

/*const mapDispatchToProps = dispatch => ({
  signIn: (name,pass) => dispatch(addTodo(name,pass)),
  selectedFacility: (selFac) => dispatch(aselectedFacility(selFac))
})*/

export default withRouter(connect(
  mapStateToProps
)(StartApp))