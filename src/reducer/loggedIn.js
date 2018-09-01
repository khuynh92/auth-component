let initialState = false;

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case 'LOG_IN': return payload;
    case 'LOG_OUT': return payload;
    default: return state;
  }

};