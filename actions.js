import axios from 'axios';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const GET_SITES_SUCCESSFUL = 'GET_SITES_SUCCESSFUL';
export const SELECTED_SITE = 'SELECTED_SITE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SITE_DETAILS_SUCCESSFUL = 'GET_SITE_DETAILS_SUCCESSFUL';
export const GET_APP_ACTION_SUCCESSFUL = 'GET_APP_ACTION_SUCCESSFUL';
export const GET_PERMISSION_SUCCESS = 'GET_PERMISSION_SUCCESS';
export const GET_PERMISSION_FAILURE = 'GET_PERMISSION_FAILURE';

const apiUrl = 'https://video.qa.plexusis.com/TouchBuilderService/api/Auth';
export const addTodo = (Uname,Upass) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/Login`, {
          "username" : Uname,
        "Password" : Upass
        })
      .then(response => {
        // const AuthStr = 'Bearer '.concat(response.data.token); 
        // return axios.get(`${apiUrl}/GetSites`, { headers: { "Authorization": AuthStr } })
        // console.log(response.data.loginStatus);
        if (response.data.loginStatus === "OK") {
            dispatch(loginSuccess(response.data))
            sessionStorage.setItem("token", response.data.token);
            dispatch(getSitesSuccess(response.data))
            // const AuthStr = 'Bearer '.concat(response.data.token); 
            /* return axios.get(`${apiUrl}/GetSites`, { headers: { "Authorization": AuthStr } })
            .then(response => {
              dispatch(getSitesSuccess(response.data))
            })*/
        } else {
            dispatch(loginFailure());
        }
      })
      .catch(error => {
        dispatch(loginFailure());
      });
  };
};

export function aselectedFacility(selectedFacilityValue) {
  return {
    type: 'SELECTED_SITE',
    payload: selectedFacilityValue
  }
};

export function getSiteOverviewDetails(selectedSite) {
  return (dispatch) => {
    let token = sessionStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token);
    return axios.get(`${apiUrl}/GetSiteOverview?id=${selectedSite}`, { headers: { "Authorization": AuthStr } })
      .then(response => {
        dispatch(getSiteDetailsSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getAppActionListDetails() {
  return (dispatch) => {
    let token = sessionStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token);
    return axios.get(`${apiUrl}/GetAppActions`, { headers: { "Authorization": AuthStr } })
      .then(response => {
        dispatch(getAppActionsSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

function getAppActionsSuccess(appActionDetails) {
  return {
    type: 'GET_APP_ACTION_SUCCESSFUL',
    payload: appActionDetails
  }
}

function getSiteDetailsSuccess(selectedSiteDetails) {
  return {
    type: 'GET_SITE_DETAILS_SUCCESSFUL',
    payload: selectedSiteDetails
  }
}

function getSitesSuccess(sitesList) {
  return {
    type: 'GET_SITES_SUCCESSFUL',
    payload: sitesList
  }
}

function loginFailure() {
  return {
              type: 'LOGIN_FAILURE'
            }
}

function loginSuccess(response) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: response
  }
}

export const saveAppActions = (val) => {
  let finalObj = val
  return (dispatch) => {
    let token = sessionStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token);
    return axios.post(`${apiUrl}/SaveAppActions`, { finalObj } , { headers: { "Authorization": AuthStr } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const savePermissionTypes = (val) => {
  let finalObj = val
  return (dispatch) => {
    let token = sessionStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token);
    return axios.post(`${apiUrl}/SavePermissionType`, { finalObj } , { headers: { "Authorization": AuthStr } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getPermissionTypes = () => {
  return (dispatch) => {
    let token = sessionStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token);
    return axios.get(`${apiUrl}/GetPermissionTypes`, { headers: { "Authorization": AuthStr } })
      .then(response => {
        dispatch(getPermissionSuccess(response.data));
      })
      .catch(error => {
        dispatch(getPermissionFailure());
      });
  };
};

function getPermissionFailure() {
  return {
              type: 'GET_PERMISSION_FAILURE'
            }
}

function getPermissionSuccess(response) {
  return {
    type: 'GET_PERMISSION_SUCCESS',
    payload: response
  }
}

export const VisibilityFilters = {
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  GET_SITES_SUCCESSFUL: 'GET_SITES_SUCCESSFUL',
  SELECTED_SITE: 'SELECTED_SITE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  GET_SITE_DETAILS_SUCCESSFUL: 'GET_SITE_DETAILS_SUCCESSFUL',
  GET_APP_ACTION_SUCCESSFUL: 'GET_APP_ACTION_SUCCESSFUL',
  GET_PERMISSION_FAILURE: 'GET_PERMISSION_FAILURE',
  GET_PERMISSION_SUCCESS: 'GET_PERMISSION_SUCCESS'
}