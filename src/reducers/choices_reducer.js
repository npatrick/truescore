import { FETCH_CHOICES } from '../actions/actionCreators';

const INITIAL_STATE = {choices: [], stats: {}};

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    
    case 'FakeTest':
      console.log("faketest Fired!");
      return state;

    case 

    default:
      return state;
  }
}