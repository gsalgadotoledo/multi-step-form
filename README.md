# 👋 Awesome Multi Step Form

This project implements a set of useful tools to build a high-quality and ready-for-production frontend project that showcases a multi-step form. The form allows users to fill in and submit information in an intuitive and user-friendly way, adapting to different device sizes.

## Features

- 🌐 Built with React on TypeScript using Vite
- 🧪 Jest + React Testing Library for unit tests
- 🚨 ESLint and Prettier for code quality
- 🌲 Cypress for end-to-end testing
- 📚 Storybook for component documentation and development

## Important Tools

### 1. React + TypeScript + Vite

This project is built with React and TypeScript, using Vite for a fast and modern development experience.

### 2. Jest + React Testing Library

Jest and React Testing Library are used for unit testing to ensure that each component works as expected.

### 3. ESLint + Prettier

ESLint and Prettier are used to enforce code quality and consistency throughout the project.

### 4. Cypress

Cypress is included for end-to-end testing, ensuring that the application works as expected from the user's perspective.

### 5. Storybook

Storybook is used to develop and document components in an isolated environment, making it easy to visualize and test each component's functionality.

### 5. Huksy

Before each commit intent a hook that runs the linters and tests will be called

![Kapture 2023-04-20 at 18 36 35](https://user-images.githubusercontent.com/1288502/233508854-dd456699-4fd3-46c6-af8a-887cb57e8db8.gif)

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the repository**

   ```
   git clone https://github.com/gsalgadotoledo/multi-step-form.git
   ```

2. **Navigate to the project directory**

   ```
   cd multi-step-form
   ```

3. **Install dependencies**

   ```
   npm install
   ```

4. **Start the development server**

   ```
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173/` to see the project in action.

## 📚 Running Tests and Linting

1. **Run unit tests with Jest and React Testing Library**

   ```
   npm test
   ```

2. **Run end-to-end tests with Cypress**

   ```
   npm run e2e
   ```

   This will open the Cypress Test Runner, where you can select and run the test suites.

3. **Run Storybook**

   ```
   npm run storybook
   ```

   This will start the Storybook server at `http://localhost:6006`. You can view and interact with the components in isolation.

4. **Run ESLint**

   ```
   npm run lint
   ```

   This command will check your code for issues and display the results in the console.

5. **Run Prettier**

   ```
   npm run prettier:fix
   ```

   This command will automatically fix any code formatting issues found in your project files.
