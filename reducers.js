import { combineReducers } from 'redux'
import { LOGIN_FAILURE, GET_SITES_SUCCESSFUL, GET_PERMISSION_SUCCESS, GET_PERMISSION_FAILURE,SELECTED_SITE, LOGIN_SUCCESS, GET_SITE_DETAILS_SUCCESSFUL, GET_APP_ACTION_SUCCESSFUL} from '../actions/actions'


function postReducer(state = [], action) {
  switch (action.type) {
     case LOGIN_FAILURE:
      return {...state, loginFaliure: true}
      case GET_SITES_SUCCESSFUL:
      return {...state, sitesList: action.payload}
      case SELECTED_SITE:
      return {...state, selected_site: action.payload}
      case LOGIN_SUCCESS:
      return {...state, loginData: action.payload, loginFaliure: false}
      case GET_SITE_DETAILS_SUCCESSFUL:
      return {...state, siteDetails: action.payload, appIdDetails: action.payload.appDetails}
      case GET_APP_ACTION_SUCCESSFUL:
      return {...state, appActionDetails: action.payload}
      case GET_PERMISSION_SUCCESS:
      return {...state, permissionList: action.payload}
      case GET_PERMISSION_FAILURE:
      return {...state}
    /*case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
      case FETCH_POST:
      return action.posts;*/
    default:
      return state;
  }
}

/*function todo(state, action) {
   switch (action.type) {
      case LOGIN_FAILURE:
         return [...state, action.payload];
      default:
         return state
   }
}
function todos(state = [], action) {
   switch (action.type) {
      case LOGIN_FAILURE:
         return [
            ...state,
            todo(undefined, action)
         ]
      default:
         return state
   }
}*/
const todoApp = combineReducers({
   postReducer
})
export default todoApp