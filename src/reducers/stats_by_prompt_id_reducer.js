import { FETCH_STATS_BY_PROMPT_ID } from '../actions/actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_STATS_BY_PROMPT_ID:
      const newState = {...state};
      console.log("payload data", action.payload);
      newState[2] = action.payload.data;
      return newState;

    default:
      return state;
  }
}
