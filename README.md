# start-lit-element

A simple Hello World LitElement.

## Consume start-lit-element

1.  Install start-lit-element

    ```bash
    mkdir test-lit
    npm init --yes
    npm install @PolymerLabs/start-lit-element
    npm install @webcomponents/webcomponentsjs
    ```

2.  Create index.html

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head> 
      <!-- Load polyfills -->
      <script 
        src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"
        defer>
      </script> 
      <script type="module" src="index.js"></script>
    </head>
    <body>
      <start-lit-element></start-lit-element>
    </body>
    ```


3.  Create index.js

    ```js
    // Load components via WebComponents.waitFor
    window.WebComponents = window.WebComponents || { 
      waitFor(cb){ addEventListener('WebComponentsReady', cb) }
    } 
    WebComponents.waitFor(async () => { 
      import('./start-lit-element.js');
    });
    ```

4.  Build

    ```js
    

    ```