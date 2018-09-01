import superagent from 'superagent';


//action creators

export const logIn = () => ({
  type: 'LOG_OUT',
  payload: true,
});

export const logOut = () => ({
  type: 'LOG_IN',
  payload: false,
});

export const handleError = (err) => ({
  type: 'HANDLE_ERROR',
  payload: err,
});


//thunkers

export const logInThunk = (user) => {
  return dispatch => {
    superagent.get(`${process.env.API_URL}/signin`)
      .auth(user.username, user.password)
      .then(response => {
        localStorage.token = JSON.stringify(response.text);
        dispatch(logIn());
      })
      .catch((err) => {
        dispatch(handleError(err));
      });
  };
};

export const logOutThunk = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(logOut());
  };
};

export const signUpThunk = (newUser) => {
  return dispatch => {
    superagent.post(`${process.env.API_URL}/signup`)
      .send(newUser)
      .then(response => {
        localStorage.token = JSON.stringify(response.text);
        dispatch(logIn());
      })
      .catch(err => {
        dispatch(handleError(err));
      });
  };
};