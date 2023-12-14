# Page Object Model with Playwright (Thomannautomatedtest)

This repository demonstrates the implementation of the Page Object Model (POM) design pattern using Playwright for automated testing based on the given task.

## Table of Contents:

- Introduction Prerequisites Getting Started Project.
- Structure Writing Tests Run Tests Reports

## Introduction:

The Page Object Model stands out as a widely embraced design pattern for building automated tests that are both maintainable and scalable. It advocates for encapsulating web pages into objects, enhancing code readability and modularity. Playwright, a robust browser automation library compatible with various programming languages, facilitates effective implementation of this pattern. This repository serves as a valuable template for integrating the Page Object Model with Playwright, offering a solid foundation for launching your automated testing initiatives..

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (https://nodejs.org/) npm (Node Package Manager) 
- Playwright (https://playwright.dev/)

## Getting Started

- Clone this repository:

```
git clone https://github.com/AdekSeun/Technicaltask_adek.git
```

- Install dependencies

```
npm install
```

- Run tests

```
npm run test
```

- Show result

```
npm run show-report
```

- with allurer report

```
npm run test-with-report
```

- To generate allure report

```
npm run generate-allure-report
```

- To open allure report

```
npm run open-allure-report
```

### Project Structure:

`pageobject` 
- PageObject folder: contains all the different pages created for the application, with AllManager.js serving as the main page that manages all other pages in this project.

- MainPage.js: contains the method used to perform actions on the OurCategory page, such as accepting cookies, clicking, and verifying the landing page title. It follows the sequence for Category.js, Subcategory.js, and Product Page. AllPageManager.js serves as the main page and is imported into the productpagetest.spec.js to reduce the task of creating objects for each page.

- Tests folder: consists of the test for the task (productpagetest.spec.js), which serves as the entry point. It contains the description of the task and utilizes the data-driven approach to call data from the TestUtils folder and methods created in different pages of the project. Different actions are separated by comments (//) to indicate actions for each page. The test script verifies each landing page and product text while capturing the product page for final verification, attached to the test protocol page.

- Testutils: This contains the test data and being called from the test scrip page

- Writing Tests: 
Create your test scripts inside the tests directory. Follow the Page Object Model pattern by interacting with the application through the methods provided in the pageobject classes.



/\*The assertions and methods created have been used for the sake of the task. Playwright provides additional methods that can be used for different scenarios, as well as more assertions. For more information, refer to https://playwright.dev/docs/intro.
