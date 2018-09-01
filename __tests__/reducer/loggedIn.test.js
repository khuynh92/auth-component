import reducer from '../../src/reducer/loggedIn.js';

import * as actions from '../../src/action/logIn-action.js';

describe('reducer', () => {
  it('should turn login state to true', () => {
    let loggedIn = reducer(false, actions.logIn());
    expect(loggedIn).toBe(true);
  });

  it('should turn login state to false', () => {
    let loggedIn = reducer(true, actions.logOut());
    expect(loggedIn).toBe(false);
  });
});