
import * as actions from "./password.actions";



const INITIAL_STATE = {
  passObj: {},
};

const passwordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.STORE_WEAPON_PASS:
      return {...state, passObj: {...state.passObj, weapon: action.payload}};
    default:
      return state;
  }
};

export default passwordReducer;
