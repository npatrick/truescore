import { UPDATE_KILL_SWITCH } from '../actions/actions.js';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case UPDATE_KILL_SWITCH:
      return {id: action.payload };

    default:
      return state;
  }
}