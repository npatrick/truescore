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
  const request = axios.get(`${ROOT_URL}users`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}