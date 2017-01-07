import { FETCH_COMPARISON } from '../actions/actions';

const INITIAL_STATE = {prompt: '', choices: []};

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    
    case FETCH_COMPARISON:
    
      // console.log("res.prompt", action.payload.data.prompt);
      console.log("WHAT IS THIS IN ACTION??? ", action.payload.data);


      return {prompt: action.payload.data.prompt, choices: action.payload.data};

    default:
      return state;
  }
}