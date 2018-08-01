/* Define action types */
export const SET_GREETING = 'SET_GREETING';
export const ADD_THING = 'ADD_THING';
export const TOGGLE_THING = 'TOGGLE_THING';

/* Define action creators */
export function setGreeting(greeting){
  return { type: SET_GREETING, greeting };
};
export function addThing(thing, bool=false) {
  return { type: ADD_THING, thing, bool }
}
export function toggleThing(index) {
  return { type: TOGGLE_THING, index }
}
