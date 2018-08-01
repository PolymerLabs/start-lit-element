# lit-element-redux

Boilerplate and hello world for a lit-element app with Redux, deploying on Firebase.

https://lit-element-redux.firebaseapp.com/

At the time of writing (August 1 2018) it was scoring 100% on all Lighthouse audits when deployed and was working fine on most recent Chrome, Safari and Firefox. Others untested.

* [Clone](#clone-this-repo)
* [Serve](#serve-for-development)
* [Setup](#set-up-new-app)
* [Build](#build-for-prod-and-serve-locally)
* [Deploy](#deploy)

## Clone this repo

```
npm install -g polymer-cli
git clone https://github.com/katejeffreys/lit-element-redux.git
cd lit-element-redux
```

## Serve for development

```
npm install
polymer serve
```

## Set up new app

1. In index.html, update meta stuff:

```html
<!-- Change stuff here for your app -->
<script type="module" src="src/simple-app.js" defer></script>
<meta name="description" content="Hello World with lit-element and Redux">
<meta name="theme-color" content="#ffffff">
<title>Hello World with lit-element and Redux</title>
```

2. In index.html, uncomment the service worker rego code:

```html
<!-- Register service worker if supported. -->
<!--
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script> -->
```

3. In manifest.json, update description, etc:

```json
"description": "Hello World with lit-element and redux",
"start_url": "index.html",
"name": "lit-element-redux",
"short_name": "lit-el-redux",
"background_color": "#ffffff",
"theme_color":"#ffffff",
```

4. Update package.json

5. In polymer.json, update shell & entrypoint:

```
"shell": "src/simple-app.js",
"entrypoint": "index.html",
```

6. Remember firebase.json and .firebaserc for real deployment.

## Build for prod and serve locally

```
polymer build
polymer serve build/default
```

## Deploy

1. Create a new firebase project at https://firebase.corp.google.com/.
2. Update firebase.json & .firebaserc.
3. Run `firebase deploy`.
