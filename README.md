# start-lit-element

A simple Hello World for LitElement.

https://start-lit-element.firebaseapp.com/

* [Quick start](#quick-start)
* [Detailed setup info](#detailed-setup-info)
* [Browser compatibility and performance](#browser-compatibility-and-performance)

## Quick start

```
npm install -g polymer-cli
git clone https://github.com/PolymerLabs/start-lit-element
cd start-lit-element
npm install
polymer serve
```

## Detailed setup info

* [Clone](#clone-this-repo)
* [Serve](#start-a-dev-server)
* [Setup](#set-up-new-app)
* [Build](#build-for-production-and-serve-locally)
* [Deploy](#deploy)

### Clone this repo

```
git clone https://github.com/PolymerLabs/start-lit-element
```

### Start a dev server

```
npm install -g polymer-cli
cd start-lit-element
npm install
polymer serve
```

### Set up new app

1. In index.html, update metadata stuff:

```html
<!-- Change stuff here for your app -->
<meta name="description" content="start-lit-element">
<meta name="theme-color" content="#ffffff">
<title>start-lit-element</title>
```

2. In index.html, uncomment the service worker registration code:

```html
<!-- Register service worker if supported. -->
<!--
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script> -->
```

3. In manifest.json, update the app description, etc:

```json
"description": "start-lit-element",
"start_url": "index.html",
"name": "start-lit-element",
"short_name": "start-lit-el",
"background_color": "#ffffff",
"theme_color":"#ffffff",
```

4. Update your package.json if required

5. In polymer.json, update your shell & entrypoint if required

```
"shell": "src/start-lit-element.js",
"entrypoint": "index.html",
```

6. Remember to update firebase.json and .firebaserc for a real deployment!

### Build for production and serve locally

Build your project and serve the build locally:

```
polymer build
polymer serve build/default
```

If you changed significant stuff (e.g. filenames, folder structure, installed other modules, etc), edit your polymer.json file to configure your build correctly. See the [Polymer CLI documentation](https://www.polymer-project.org/3.0/docs/tools/polymer-json) for more info.

### Deploy

1.  [Set up Firebase CLI tools](https://firebase.google.com/docs/cli/).
2.  [Create a new Firebase project](https://firebase.google.com/console).
3.  Update firebase.json and .firebaserc with your own app details.   
4.  Deploy.

    ```
    firebase deploy
    ```

See the [Firebase CLI Reference](https://firebase.google.com/docs/cli) for more info.

## Browser compatibility and performance

At the time of writing (Dec 11 2018) this app was scoring 100% on all Lighthouse audits when deployed, and was working fine on the most recent versions of Chrome, Safari, Firefox, and Edge.

Let me know of any [issues](https://github.com/PolymerLabs/start-lit-element/issues).

## Known issues

(All browsers) Dynamic `import` warning:

```
Could not resolve module specifier "require" in file "..src/start-lit-element.js".
```

See https://github.com/Polymer/tools/issues/131.

(IE11 and Edge) Warning due to `<!--!` in built HTML:

```
Unexpected character: U+0021 EXCLAMATION MARK (!)
Unexpected character in comment end. Expected "-->"
```

See https://github.com/Polymer/polymer-cli/issues/779.
