import { FETCH_CHOICES } from '../actions/actions';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    
    case FETCH_CHOICES:
      console.log("choices response", action.payload.data);
     return action.payload.data;
    case FETCH_CURRENT_STAT:
       console.log("current reducer response", action.payload.data);

    default:
      return state;
  }
}