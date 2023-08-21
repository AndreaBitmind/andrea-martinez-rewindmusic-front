# REWIND MUSIC APP

This is a React application project that implements a CRUD (Create, Read, Update, Delete) functionality for managing a list of songs. Registered users can view the list of songs, add new songs, update existing ones, and delete songs. Below are the project features and the packages used:

## Features:

- Display a list of songs.
- User registration to access CRUD functionalities.
- Add new songs to the list.
- Modify details of existing songs.
- Delete songs from the list.
- Utilize Redux for efficient state management.
- Use React Router for navigation between different views.
- Style components using Styled Components.
- Manage notifications with React Toastify.
- Integration of unit tests with Jest and Testing Library.

## Used Packages

- **@fontsource/overpass**: Font used for the interface.
- **@reduxjs/toolkit**: Used for efficient state management.
- **axios**: Library for making HTTP requests.
- **jwt-decode**: Decodes JWT tokens to obtain user information.
- **react**: Core React library.
- **react-dom**: React renderer for the browser.
- **react-icons**: Popular icons for visual components.
- **react-redux**: Integration of Redux with React.
- **react-router-dom**: React routing for view navigation.
- **react-scripts**: Set of preconfigured scripts for React projects.
- **react-toastify**: Displays attractive notifications in the interface.
- **styled-components**: Library for styling components using CSS in JS.
- **typescript**: Typed programming language.
- **web-vitals**: Library for measuring web performance metrics.
- **@testing-library/jest-dom**, **@testing-library/react**, **@testing-library/user-event**: Used for writing unit tests.
- **@types/jest**, **@types/node**, **@types/react**, **@types/react-dom**, **@types/react-router-dom**: Type definitions for development environments.
- **husky**: Integrates Git hooks to automate tasks before commits.
- **@types/styled-components**: Type definitions for Styled Components.
- **msw**: Library for mocking API calls in tests.

## Management Scripts

- `start`: Launches the application in development mode.
- `build`: Generates a production version of the project.
- `test`: Runs unit tests.
- `test-coverage`: Runs unit tests and generates a coverage report.

## Folder Structure

The folder structure follows a component-based organization, separating pages, Redux logic, API services, styles, and utilities.

├── .github
├── .husky
├── coverage
├── README.md
├── .gitignore
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
    ├── assets
    │   └── images
    ├── components
    |   └── Button
    │       ├── Button.test.tsx
    │       ├── Button.tsx
    │       └── ButtonStyled.ts
    ├── hooks
        └── useAPI
        └── useUser
    ├── interfaces
    ├── mocks
    ├── pages
    |   └── LoginPage
    │       ├── LoginPage.test.tsx
    │       └── LoginPage.tsx
    ├── store
    ├── utils
    └── App.tsx


## Metrics

📈 [Back SonarCloud metrics](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Andrea-Martinez_Back-Final-Project-202207-BCN) - 100% coverage

📈 [Front SonarCloud metrics](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Andrea-Martinez_Front-Final-Project-202207-BCN) - 100% coverage
