# RewindMusic APP Frontend

Welcome to the RewindMusic App, a comprehensive project that showcases a robust CRUD (Create, Read, Update, Delete) functionality for efficiently managing and organizing a diverse collection of songs. This application empowers registered users to seamlessly interact with their music library, granting them the ability to explore, personalize, and maintain their songs effortlessly.

Visit https://amrtinz-final-project-2022-bcn.netlify.app/ to run this project online.
<br>
<br>

## Table of contents
- [Screenshots](#screenshots)
- [Features](#features)
- [Used packages](#used-packages)
- [Management Scripts](#management-scripts)
- [Folder Structure](#folder-structure)
- [Metrics](#metrics)
- [How can you run this project](#how-can-you-run-this-project)
<br>

## Screenshots

<img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/login.png?raw=true" alt="sign in view from mobile breakpoint" width="300"/> <img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/register.png?raw=true" alt="create an account view from mobile breakpoint" width="300"/>
<br>
View of account creation and sign in page.
<br>
<br>
<img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/listado.png?raw=true" alt="list of songs view from mobile breakpoint" width="300"/> <img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/subir.png?raw=true" alt="upload songs view from mobile breakpoint" width="300"/>
<br>
View of song list and upload a song page
<br>
<br>
<img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/detalle.png?raw=true" alt="song details view from mobile breakpoint" width="300"/> <img src="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front/blob/871ee800872eb646e454774be8291cbe79b2293a/modificar.png?raw=true" alt="modify your song view from mobile breakpoint" width="300"/>
<br>
View of song details and modify the song page
<br>
<br>



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
  
  <br>

  
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
<br>


## Management Scripts

- `start`: Launches the application in development mode.
- `build`: Generates a production version of the project.
- `test`: Runs unit tests.
- `test-coverage`: Runs unit tests and generates a coverage report.
<br>


## Folder Structure

The folder structure follows a component-based organization, separating pages, Redux logic, API services, styles, and utilities.
```bash
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
```
<br>

## Metrics

📈 [Back SonarCloud metrics](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Andrea-Martinez_Back-Final-Project-202207-BCN) - 100% coverage

📈 [Front SonarCloud metrics](https://sonarcloud.io/summary/new_code?id=isdi-coders-2022_Andrea-Martinez_Front-Final-Project-202207-BCN) - 100% coverage

<br>

## How can you run this project

- Once you've download or cloned the project, install it with:

  ```bash
  npm install
  ```

- After that, if you want to run it in local execute this command:
  ```bash
  npm start
  ```

<br>
