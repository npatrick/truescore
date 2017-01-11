import { FETCH_STATS_BY_PROMPT_ID } from '../actions/actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_STATS_BY_PROMPT_ID:
      return action.payload.data;

    default:
      return state;
  }
}
