<!-- instruction -->

Task Management App

Created with: Vite and Tailwind CSS
Core Functionalities:
Task Creation
Task Editing
Task Filtering
Task Sorting
User Flow:

Task Creation:

User clicks "Add New Task" button.
A "Create Task" modal appears.
User fills the form, specifying a task end date (start date defaults to current date).
Task is added to Redux store for immediate state management and persisted in localStorage for long-term storage.
Task Editing:

User can modify a task's priority and status in real-time.
Completing a task is irreversible.
Task Filtering and Sorting:

User can filter and sort tasks based on various criteria, adhering to provided instructions.
Key Techniques:

Vite: For rapid development and efficient bundling.
Tailwind CSS: For utility-first styling and adaptable design.
Redux: For centralized state management, enabling a seamless user experience.
localStorage: For persistent data storage, ensuring tasks remain even after browser closure.


<!-- instruction -->

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
