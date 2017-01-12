import { FETCH_STATS_BY_PROMPT } from '../actions/actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_STATS_BY_PROMPT:
      const newState = {...state};
      const {promptId, stats} = action.payload.data;

      // const promptId = action.payload.data.promptId
      // const stats = action.payload.data.stats

      newState[promptId] = stats;
      return newState;

    default:
      return state;
  }
}
