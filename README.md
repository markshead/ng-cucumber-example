# MyApp


## Basic Steps

`npm install` -- pulldown all the dependencies

`webdriver-manager update` -- Pulls down selenium and the browser drivers. There appears to be some situations where the global and local version of webdriver-manager may conflict. So it downloads gecko to global and then acts like it can't find it locally. If this happens, run this command from node_module/protraactor/node_module/webdriver to force it to apply it locally.

`ng e2e` -- runs the e2e tests with cucumber

## Where stuff is...

`e2e/protractor.conf.js` -- File controls which browser is going to be used.

`e2e/src/features` -- Cucumber features files

`e2e/src/pages` -- Page Objects

`e2e/src/steps` -- Cucumber steps files

# Auto generated README:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

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
