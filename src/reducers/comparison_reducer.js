import { FETCH_COMPARISON } from '../actions/actions';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    
    case FETCH_CHOICES:
      console.log("choices response", action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
}