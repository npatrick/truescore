import { UPDATE_PROMPT } from '../actions/actions.js';

const INITIAL_STATE = {id: 1, text: "Who works harder?"};

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case UPDATE_PROMPT:
      return action.payload

    default:
      return state;
  }
}