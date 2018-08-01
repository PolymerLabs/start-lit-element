// Import actions
import { 
  SET_GREETING,
  ADD_THING,
  TOGGLE_THING
} from './actions.js';

// Create initial state to use as default when no state is supplied
export const initialState = {
  greeting: 'Hello World! ',
  listOfThings: [
    {thing:'sdf', bool:false},
    {thing:'fdfb', bool:false},
    {thing:'axcv', bool:false},
    {thing:'qwgfv', bool:false}
  ]
};
// Create default action
export const DEFAULT_ACTION = '';

/**
 * Main reducer. Calls listReducer for actions to do with THINGs. Could also
 * use Redux funcs to combine reducers, but this impl shows what's going on.
 */
export function simpleApp(state = initialState, action = DEFAULT_ACTION) {
  switch (action.type) {
    case SET_GREETING: {
      return Object.assign({}, state, {
        greeting: action.greeting
      });
    }
    // Delegate actions to do with THINGs to listReducer
    case ADD_THING: {
      return Object.assign({}, state, {
        listOfThings: listReducer(state.listOfThings, action)
      });
    }
    case TOGGLE_THING: {
      return Object.assign({}, state, {
        listOfThings: listReducer(state.listOfThings, action)
      });
    }
    // If we don't know what is going on, return the same state :S
    default: {
      return state;
    }
  }
}

/** 
 * Handle actions to do with THINGs. "state" in this function is an array
 * (the slice of state defined in listOfThings).
 */
export function listReducer(state, action) {
  switch (action.type) {
    case ADD_THING: {
      // Do not mutate state; clone it
      return [
        ...state, 
        { thing: action.thing, bool: action.bool }
      ];
    }
    case TOGGLE_THING: {
      // Do not mutate state; clone it
      return state.map((thing, index) => {
        if (index === action.index) {
          return Object.assign({}, thing, {
            bool: !thing.bool
          });
        }
        return thing;
      })
    }
    // If we don't know what is going on, return the same state :S
    default: {
      return state;
    }
  }
}
