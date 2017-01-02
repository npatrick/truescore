import { FETCH_USERS } from './actions/actionCreators';

const INITIAL_STATE = [];

export default funtion(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_USERS:
      return action.payload.data;

    default:
      return state;
  }
}