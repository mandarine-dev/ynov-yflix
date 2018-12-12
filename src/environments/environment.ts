// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCpec_zRWlaKBJRvBF0LIXmGjzeC27YWts',
    authDomain: 'ynov-yflix.firebaseapp.com',
    databaseURL: 'https://ynov-yflix.firebaseio.com',
    projectId: 'ynov-yflix',
    storageBucket: 'ynov-yflix.appspot.com',
    messagingSenderId: '56207161340'
  },
  stripeKey: 'pk_test_lQh1IFzTEIQiJuc7l1K0r21G'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
