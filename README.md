# Angular Observable Examples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Firebase

This code requires a connection to Firebase to run. Connect it to an existing database or create a new one at <https://firebase.google.com> (it's free). Once connected, provide the Firebase credentials in the `environment.ts` and `environment.prod.ts` files. The credentials can be found by following [these steps](https://firebase.google.com/docs/web/setup). **DO NOT** commit these credentials.

## API

This app is also designed to work with a traditional API. There is one available [here](https://github.com/Karvel/angular-observables-api) that was designed to power this app, but any API following the schema should work. Provide the route to the api in the `environment.ts` and `environment.prod.ts` files.

## Initialization
There is a tab called `Seed databases` that will add some starter data to both Firebase and the connected API. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
