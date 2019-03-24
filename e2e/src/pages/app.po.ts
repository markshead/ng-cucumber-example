import { protractor, browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  clickSnackbarButton() {
    element(by.buttonText('Display Snackbar')).click();
  }

  getSnackBarText() {

    var snackbar = element(by.className('mat-simple-snackbar'))
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(snackbar), 4000, 'Snackbar did not appear');
    return snackbar.getText();
    //return element(by.className('cdk-live-announcer-element cdk-visually-hidden')).getText();

    //return element(by.tagName("body")).getText();
  }
}
