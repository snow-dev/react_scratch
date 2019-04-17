
import axios from 'axios';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

/**
 * Set access token on store.
 * @param accessToken
 * @returns {{type: string, accessToken: *}}
 */
export function setAccessToken(accessToken) {
  return {
    type    : SET_ACCESS_TOKEN,
    accessToken : accessToken
  }
}


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