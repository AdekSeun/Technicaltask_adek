# Page Object Model with Playwright (Thomannautomatedtest)

This repository demonstrates the implementation of the Page Object Model (POM) design pattern using Playwright for automated testing based on the given task.

## Table of Contents:

- Introduction Prerequisites Getting Started Project.
- Structure Writing Tests Run Tests Reports

## Introduction:

The Page Object Model stands out as a widely embraced design pattern for building automated tests that are both maintainable and scalable. It advocates for encapsulating web pages into objects, enhancing code readability and modularity. Playwright, a robust browser automation library compatible with various programming languages, facilitates effective implementation of this pattern. This repository serves as a valuable template for integrating the Page Object Model with Playwright, offering a solid foundation for launching your automated testing initiatives..

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (https://nodejs.org/) npm (Node Package Manager) - Playwright (https://playwright.dev/)

## Getting Started

- Clone this repository:

bash
git clone https://github.com/AdekSeun/Technicaltask_adek.git


- Install dependencies

js
npm install


- Run tests

js
npx playwright test --headed


- Show result

js
npx playwright show-report


- with allurer report

js
npx playwright test --grep @selectProduct --reporter=line,allure-playwright


- To generate allure report

js
npx allure generate my-allure-results -o allure-report --clean


- To open allure report

js
npx allure open allure-report


### Project Structure:

pageobject contains Page Object classes, each representing a different page of the application. (Referer to Allpagemanager.js to see how other pages have been refrenced tests: Houses the actual test scripts using Playwright and the Page Object Model.(prouductapagetest.spec.js) Testutils: Includes test data for the automated test for data driven purpose package.json: Node.js package file containing project metadata and dependencies. playwright.config.js: Configuration file for Playwright.

Writing Tests: Create your test scripts inside the tests directory. Follow the Page Object Model pattern by interacting with the application through the methods provided in the pageobject classes.

Run Tests: Execute the following command to run the test from the terminal Run test: npx playwright test --headed Show result: npx playwright show -report

with allurer report npx Playwright test --grep @selectProduct --reporter=line,allure-playwright allure generate ./allure-results --clean allure open ./allure-results

/\*The assertions and methods created have been used for the sake of the task. Playwright provides additional methods that can be used for different scenarios, as well as more assertions. For more information, refer to https://playwright.dev/docs/intro.