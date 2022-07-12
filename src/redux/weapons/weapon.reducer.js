import getPassword from '../data'
import * as actions from './weapon.actions';

const {passObj} = getPassword;


const INITIAL_STATE = {
    passObj : passObj,
}

const weaponReducer = (state = INITIAL_STATE, action) => {
    const {passObj} = state;
        switch(action.type) {
            case actions.GET_PASS:
                return action.payload;
            default:
                return state;
          }
        };

export default weaponReducer;