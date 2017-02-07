import axios from 'axios';
import { store } from '../index';
import _ from 'underscore';

const protocol = window.location.protocol;
const host = window.location.host;
const pathname = window.location.pathname;

export const ROOT_URL = `${protocol}//${host}/api/`; //http or https, host could be localhost or deployment
export const FETCH_COMPARISON = 'FETCH_COMPARISON';
export const FETCH_USERS = 'FETCH_USERS';
export const SUBMIT_DECISION = 'SUBMIT_DECISION';
export const FETCH_PROMPT = 'FETCH_PROMPT';
export const FETCH_PROMPTS = 'FETCH_PROMPTS';
export const UPDATE_PROMPT = 'UPDATE_PROMPT';
export const FETCH_STATS_BY_PROMPT = 'FETCH_STATS_BY_PROMPT';
export const FETCH_USER_DATA = 'FETCH_USER_DATA'; // unique id's for actions for reducers to listen to
export const FETCH_STATS_BY_PROMPT_ID = 'FETCH_STATS_BY_PROMPT_ID';
export const UPDATE_KILL_SWITCH = 'UPDATE_KILL_SWITCH';
export const CHANGE_STATE = 'CHANGE_STATE';

//Fetches the random comparison to vote 
export function fetchComparison () {

  // store.dispatch(changeState());

  const promptId = store.getState().prompt.id;
  const request = axios.get(`${ROOT_URL}comparison/${promptId}`)

  return {
    type: FETCH_COMPARISON,
    payload: request
  }
}

export const throttledFetchComparison = _.throttle(fetchComparison, 1000);

//Fetches allchoices required for comparison 
export function fetchUsers () {

  const request = axios.get(`${ROOT_URL}allChoices`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}

//On submitting or voting send the (win/loss) results to db 
export function submitDecision(winnerId) {

  const currentComparison = store.getState().comparison;

  const [left, right] = currentComparison.choices;
  const loserId = left.id === winnerId ? right.id  : left.id;
  const promptId = store.getState().prompt.id;

  const result = {winnerId, loserId, promptId};

  const request = axios.post(`${ROOT_URL}comparison`, result);
  return {
    type: SUBMIT_DECISION,
    payload: request
  }
}

export const throttledSubmitDecision = _.throttle(submitDecision, 1000);

//Fetches All prompts required to choose for voting
export function fetchPrompts() {

  const request = axios.get(`${ROOT_URL}prompts`);

  return{
    type: FETCH_PROMPTS,
    payload: request
  }
}

//This returns the prompt to the comparison state
export function updatePrompt(prompt) {

  return{
    type: UPDATE_PROMPT,
    payload: prompt
  }
}

//On submitting the vote calculates the stats 
export function fetchStatsByPrompt(promptId) {

  promptId = promptId || store.getState().prompt.id;

  const request = axios.get(`${ROOT_URL}stats/prompt/${promptId}`);

  return{
    type: FETCH_STATS_BY_PROMPT,
    payload: request
  }
}

export const throttledFetchStatsByPrompt = _.throttle(fetchStatsByPrompt, 1000);

export function fetchStatsByPromptById(promptId) {

  const request = axios.get(`${ROOT_URL}stats/prompt/${promptId}`);

  return{
    type: FETCH_STATS_BY_PROMPT_ID, //this requires specific id
    payload: request
  }
}

export function fetchUserData() { // actions return objects
  const request = axios.get(`${ROOT_URL}currentUserData`);

  return{
    type: FETCH_USER_DATA,
    payload: request
  }
}

export function updateKillSwitch(id){
  return {
    type: UPDATE_KILL_SWITCH,
    payload: id
  }
}
