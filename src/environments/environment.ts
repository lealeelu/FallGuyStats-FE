// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://localhost:5001/api/Stats",
  pollingFrequency: 10000,//how often do we ask the api for new stats. Increase this number if your system is getting bogged down.
  showLastEpisode: false, //doesn't do anything yet
  showCheaterCount: false,
  showLosingStreak: true,
  showCredits: true, //if you turn this off, please give us credit in your stream's about section   
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
