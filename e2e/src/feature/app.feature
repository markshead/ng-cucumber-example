Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see "Welcome to my-app!"

  Scenario: Snackbar
    Given I am on the home page
    When I click the Display Snackbar button
    Then the "Snackbar Message" is displayed

