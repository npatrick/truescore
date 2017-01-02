import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_CHOICES = 'FETCH_CHOICES';

export function fetchChoices () {
  const request = axios.get(`${ROOT_URL}nextBattlePairs`);

  return {
    type: FETCH_CHOICES,
    payload: request
  }
}