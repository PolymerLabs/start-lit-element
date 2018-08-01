// Import lit-element base class and html helper function
import { LitElement, html} from '@polymer/lit-element';

// Access shared state by importing the same store object as main app
import { store } from './store.js';

// Import action creator so we can dispatch actions that change state
import { toggleThing } from './actions.js';

/**
 * Display the contents of an array as an unordered list.
 * 
 * The array contents are part of the app state. This element gains access
 * to the shared app state by loading the same Redux store from store.js.
 */
export class StateyElement extends LitElement{
  static get properties(){
    return {
      things: Array
    };
  }

  /**  
   * Give props default values to avoid errors on "undefined". Must call 
   * superconstructor as the first statement in an element constructor.
   */
  constructor(){
    super();
    this.things=[];
  }

  /**
   * Render whenever the array changes. 
   */
  _render({things}){
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
        :host, button { font-size: 16px; }
      </style>
      <h3>here is a list of things</h3>
      <ul>
        ${things.map((thing, index) => {
          return html`
            <li>thing ${index}: ${thing.thing}, ${thing.bool}</li>
          `}
        )}
      </ul>
      <button on-click="${() => this.toggleRandomThing()}">
        toggle a random thing
      </button>
    `;
  }
  
  /**
   * Initialize data from shared state in the Redux store, and define a 
   * callback that will run whenever the state changes.
   */
  _firstRendered(){
    this.things=store.getState().listOfThings;
    store.subscribe(() => {
      this.things=store.getState().listOfThings;
    });
  }

  /**
   * Toggle the bool associated with a random thing. Dispatch an action to
   * update the state with it.
   */
  toggleRandomThing() {
    var index=Math.floor(Math.random() * this.things.length);
    store.dispatch(toggleThing(index));
  }

  /**
   * 
   * Uncomment _shouldRender to show that state is shared between simple-app
   * and statey-element.
   */
  /*
  _shouldRender(props, changedProps, oldProps){
    console.log('this is statey-element\'s _shouldRender');
    console.log(store.getState());

    // Render on all changes 
    return true;
  }
  */
}

// Register the element with the browser
customElements.define('statey-element', StateyElement);
