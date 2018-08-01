// Import lit-element base class and html helper function
import { LitElement, html} from '@polymer/lit-element';

/**
 * Display a simple greeting supplied by the main app.
 */
export class UnstateyElement extends LitElement{
  static get properties(){
    return {
      helloWorld: String
    };
  }

  /** 
   * Notes:
   * 
   * - Must call superconstructor first 
   * - Give prop a default value to avoid errors on "undefined"
   */
  constructor(){
    super();
    this.helloWorld='Hello World! ';
  }
  
  /**
   * Render when Hello World greeting changes.
   */
  _render({helloWorld}){
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
        :host, button { font-size: 16px; }
      </style>
      <p>greeting: ${helloWorld}</p>
    `;
  }
}

// Register the element with the browser
customElements.define('unstatey-element', UnstateyElement);
