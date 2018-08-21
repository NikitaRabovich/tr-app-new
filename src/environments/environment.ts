// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//const FB_PROJECT_ID = '"tr-app-lb"';
export const environment = {
  production: false,
  /*auth: {
    clientId: "114180010990631725959",
    clientDomain: "tr-app.eu.auth0.com", // e.g., you.auth0.com
    audience: 'https://tr-app-minsk.com', // e.g., http://localhost:1337/
    redirect: 'http://localhost:4200/allroutes',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: "AIzaSyDByzsrwvQcu9fPFX9evpO3POmh10i71V0",
    authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
    projectId: FB_PROJECT_ID,
    storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    messagingSenderId: "435329684479"
  },
  apiRoot: "http://localhost:1337/" // e.g., http://localhost:1337/ (DO include trailing slash)*/
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
