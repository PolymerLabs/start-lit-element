// Import lit-element base class and html helper function
import { LitElement, html} from '@polymer/lit-element';

// Access shared state by importing the same Redux store as other elements
import { store } from './store.js';

// Import action creator so we can dispatch actions that change state
import { setGreeting, SET_GREETING } from './actions.js';

// Import child elements
import './statey-element.js';
import './unstatey-element.js';

/**
 * A simple app shell. 
 * 
 * Import a Redux store to manage and share a very simple state.
 * 
 * - Instead of creating store in the app shell, I import the store from 
 *   another file. This means that any element that needs to change state
 *   can import the same store and share state with the whole app.
 *   There is probably a better way to do this - let me know here:
 *   https://github.com/katejeffreys/lit-element-redux/issues
 * 
 * - statey-element needs to change state, so it imports the same store.
 * - unstatey-element does not need to change state, just display part of it,
 *   so it gets props via one-way binding from the app shell & doesn't 
 *   import the store.
 */
class SimpleApp extends LitElement {
  static get properties(){
    return {
      greeting: String
    };
  }

  /**  
   * Give props default values to avoid errors on "undefined". Must call 
   * superconstructor as the first statement in an element constructor.
   */
  constructor(){
    super();
    this.greeting='';
  }

  /**
   * Implement LitElement _render(), returning a TemplateResult for a new 
   * custom element.
   */
  _render({greeting}){
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
        :host, button { font-size: 16px; }
      </style>
      <unstatey-element helloWorld="${greeting}"></unstatey-element>
      <button on-click="${() => this.makeNewGreeting()}">
        make new greeting
      </button>
      <statey-element></statey-element>
    `;
  }

  /**
   * Initialize data from shared state in the Redux store, and define a 
   * callback that will run whenever the state changes.
   *
   * From playing with Lighthouse audits it seems to improve performance ~very~
   * slightly to wait to do this work until _firstRendered (which is actually
   * fired from the "ready" callback, not from first actual render) rather than
   * doing it in the constructor. I could be mistaken, let me know here:
   * https://github.com/katejeffreys/lit-element-redux/issues
   */
  _firstRendered(){
    this.greeting = store.getState().greeting;
    store.subscribe(() => {
      this.greeting = store.getState().greeting;
    });    
  }
  
  /**
   * Generate a new greeting. Dispatch an action to update the state with it.
   */
  makeNewGreeting(){
    var newGreeting = 'Hello World! ' + Math.floor(Math.random()*100);
    store.dispatch(setGreeting(newGreeting));
  }

  /**
   * 
   * Uncomment _shouldRender to show that state is shared between simple-app
   * and statey-element
   */
  /*
  _shouldRender(props, changedProps, oldProps){
    console.log('this is simple-app\'s _shouldRender');
    console.log(store.getState());

    // Render on all changes 
    return true;
  }
  */
}

// Register the element with the browser
customElements.define('simple-app', SimpleApp);
