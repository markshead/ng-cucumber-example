import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then('I should see {string}', async (title) => {
  expect(await page.getTitleText()).to.equal(title);
});

When('I click the Display Snackbar button', async() => {
  await page.clickSnackbarButton();
});

Then('the {string} is displayed', async (string) => {

  console.log(page.getSnackBarText);
  expect(await page.getSnackBarText()).to.contain(string);
 // expect(await page.getTitleText()).to.equal("X");
});

