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