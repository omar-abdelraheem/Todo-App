# React Todo App

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite)
![Material UI](https://img.shields.io/badge/Material_UI-UI_Library-007FFF?logo=mui)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

A responsive Todo app built with **React**, **Vite**, and **Material UI**.  
Users can add, edit, delete, complete, and filter tasks, with data saved automatically in `localStorage`.

## Live Demo

[View Demo](https://omartodoapp.netlify.app/)

## Screenshot

![React Todo App Screenshot](./assets/React-todo-App-Screenshot.jpg)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Mark tasks as complete or incomplete
- Filter tasks by All, Completed, or Incomplete
- Persist data using `localStorage`
- Responsive dark-themed interface
- Snackbar feedback for user actions

## Tech Stack

- React
- Vite
- Material UI
- React Context API
- `useReducer`
- UUID

## React Hooks Used

- `useState`
- `useEffect`
- `useReducer`
- `useContext`
- `useMemo`
- `forwardRef`

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## Project Structure

```bash
src/
├── components/
├── contexts/
├── reducers/
├── App.jsx
└── main.jsx
```

## Learning Goals

This project was built to practice:

- React hooks
- State management with Context API and `useReducer`
- Building reusable UI components
- Persisting application data with `localStorage`

## Future Improvements

- Move persistence logic outside the reducer
- Add unit tests
- Add categories, priorities, and due dates
- Improve naming consistency and project structure

## License

This project is licensed under the MIT License.

## Author

Created by Omar Abdelraheem as a React learning project.
