import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_CHOICES = 'FETCH_CHOICES';
export const FETCH_USERS = 'FETCH_USERS';

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
