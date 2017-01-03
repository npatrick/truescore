import axios from 'axios';
import { store } from '../index';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_CHOICES = 'FETCH_CHOICES';
export const FETCH_USERS = 'FETCH_USERS';
export const SUBMIT_DECISION = 'SUBMIT_DECISION';

export function fetchChoices () {
  const request = axios.get(`${ROOT_URL}nextBattlePairs`);

  return {
    type: FETCH_CHOICES,
    payload: request
  }
}

export function fetchUsers () {

  /// WARNING CHECK ROUTE WITH BARTEK!!
  const request = axios.get(`${ROOT_URL}users`); // === localhos3000/users. returns promise with .then property. returns object and must have a type

  return {
    type: FETCH_USERS,
    payload: request
  }
}





export function submitDecision(winnerName) {

  const [left, right] = store.getState().choices;
  const loserName = left.name === winnerName ? right.name  : left.name;

  console.log("winner is: ", winnerName, "      loser is: ", loserName);


  return {
    type: SUBMIT_DECISION
  }

}







