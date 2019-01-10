/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import LitElement base class, html helper function, and decorators
import { LitElement, html, customElement } from '@polymer/lit-element';
let CheckboxElement = class CheckboxElement extends LitElement {
    /**
     * Define a template
     */
    render() {
        return html `
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <p>You like pie.</p>
    `;
    }
};
CheckboxElement = __decorate([
    customElement('checkbox-element')
], CheckboxElement);
export { CheckboxElement };
