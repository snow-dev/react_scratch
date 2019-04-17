

import * as loginActions from '../loginActions';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();
const store = mockStore();


describe('Login actions', () => {
  it('should has correct type', () => {
    const action = loginActions.setAccessToken();
    expect(action.type).toEqual(loginActions.SET_ACCESS_TOKEN);
  });

  it('should have correct payload', () => {
    const action = loginActions.setAccessToken('some.safe.token');
    expect(action.accessToken).toEqual('some.safe.token');
  });
});


describe('Async login function execution', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should get user access token from API', () => {
    const expectedAction =  [
      {
        'type'        : 'SET_ACCESS_TOKEN',
        'accessToken' : 'some.safe.token'
      }
    ];

    store.dispatch(loginActions.setAccessToken('some.safe.token'));
    expect(store.getActions()).toEqual(expectedAction);
  });
});