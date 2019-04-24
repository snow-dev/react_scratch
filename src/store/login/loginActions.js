
// -> Impor section.
import axios from 'axios';

// -> Action types section definition.
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const START_LOGIN      = 'START_LOGIN';

export function unsplashAction(term) {
  axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
      query: term
    }
  }).then(response => {
    console.debug("loginActions: unsplashAction() :-: Response: ", response.data.results);
    return response.data.results;
  }).catch(error => {
    console.error("Error requesting: ", error);
  });
}

/*********************************************************************************
 **------------------------ ACCESS TOKEN PROFILE SECTION ------------------------*
 *********************************************************************************/

/**
 * Star login process action creator.
 * @returns {{type: string}}
 */
function startLogin() {
  return {
    type: START_LOGIN,
  }
}

/**
 * Set access token on store.
 * @param accessToken
 * @returns {{type: string, accessToken: *}}
 */
export function setAccessToken(accessToken) {
  return {
    type         : SET_ACCESS_TOKEN,
    accessToken  : accessToken
  }
}

/**
 * E
 */
export function executeLogin(userData) {
  return function(dispatch) {
    // -> Start execution login.
    dispatch(startLogin());
    let url = `https://localhost:9001/auth/login`;

    let headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };


    axios.post(url, userData, headers).then(response => {
      console.debug("loginActions: executeLogin() :-: Login response:", response);
    }).catch(error => {
      console.error("Error requesting: ", error);
    });

  }
}

