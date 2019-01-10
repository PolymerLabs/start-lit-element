/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import LitElement base class, html helper function, and decorators
import { LitElement, html, customElement, property } from '@polymer/lit-element';
import 'checkbox-element';

@customElement ('start-lit-element') 
export class StartLitElement extends LitElement {
  /**
   * Define observed properties
   */
  @property( { type : String } ) message = 'Hello World from LitElement';
  @property( { type : Boolean } ) pie = false;

  /**
   * Define a template by implementing LitElement's `render` function.
   * `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>

      <h1>Start LitElement!</h1>
      <p>${this.message}</p>

      <input name="myinput" id="myinput" 
        type="checkbox"
        ?checked="${this.pie}"
        @change="${this.handleChange}">

      <label for="myinput">I like pie.</label>
      
      ${this.pie ? html`<checkbox-element></checkbox-element>` : html``}
    `;
  }

  /**
   * Called whenever the checkbox fires a `change` event.
   * Toggle whether to display <checkbox-element>.
   */
  handleChange() {
    this.pie = !this.pie;
  }
}

declare global { 
  interface HTMLElementTagNameMap { 'start-lit-element': StartLitElement; } 
}
