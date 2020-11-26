# Angular Login UI

This project has four fields in a reactive form (Email, First Name, Last Name, Birth Year).
The sign up button navigates to a success component. The button is disabled if the year that is entered in the year field is after the year 2000, or if any of the fields are empty.

![1](https://user-images.githubusercontent.com/62124046/100305343-c6dc8b00-2f55-11eb-845d-c009131d0964.png)

After the user submits the form (with valid form inputs), they are taken to a success component. Form data is passed to this component using query parameters. A custom pipe is also implemented in order to turn the values to uppercase.

![2](https://user-images.githubusercontent.com/62124046/100305345-c80db800-2f55-11eb-9b95-84ae14306712.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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
