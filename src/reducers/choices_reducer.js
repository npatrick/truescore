import { FETCH_CHOICES } from '../actions/actionCreators';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    
    case FETCH_CHOICES:
     return action.payload.data;

    default:
      return state;
  }
}