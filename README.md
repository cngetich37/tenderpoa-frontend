# TenderPoa Frontend

Welcome to the React Tenderpoa Frontend project! This application allows users to track tenders with different statuses such as Open, Bidded, Closed, and Due. It utilizes various libraries and technologies to provide a seamless and user-friendly experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Libraries and Technologies](#libraries-and-technologies)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Features](#features)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cngetich37/tenderpoa-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tenderpoa-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project follows a standard React project structure. Here are some key directories:

- `src`: Contains the source code of the tenderpoa frontend application.
  - `components`: Reusable UI components.
  - `validationSchemas`: yup validation schemas.
  - `assets`: holds the static files such as images.
  - `pages`: Top-level components for different pages.

## Libraries and Technologies

This project makes use of several libraries and technologies to enhance functionality and maintainability:

- **Yup**: For form validation.
- **Formik**: For handling forms efficiently.
- **React Material UI**: A popular React UI framework for building form components.
- **Axios**: For making HTTP requests to consume the Express API.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Typescript**: For adding static typing to the project.

## Usage

### Configuration

Before running the application, you may need to configure certain settings, such as API endpoints. Check the configuration files in the `src/` directory.

### Running the Application

To start the development server:

```bash
npm start
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## Features

- Track tenders with different statuses.
- Form validation using Yup.
- Seamless form handling with Formik.
- Material UI components for a consistent and modern UI.
- Axios for efficient communication with the Express API.
- Tailwind CSS for easy and customizable styling.
- Typescript for enhanced code quality and maintainability.

## License

This project is licensed under the [MIT License](LICENSE).

---
