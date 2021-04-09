import {clearUserData} from '../../utils/utils';
import actionTypes from '../types';

const initialState = {
  userData: {},
  isLoggedin: false,
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.login:
      const {userData} = {...action.payload};
      return {...state, userData, isLoggedin: true};

    case actionTypes.logout:
      clearUserData();
      return {...state, isLoggedin: false, userData: {}};
    default: {
      return {...state};
    }
  }
}
