# Boolfolio - API & Frontend

![Boolfolio](https://img.shields.io/badge/Boolfolio-API%20%26%20Frontend-blue)

## Overview

Welcome to Boolfolio, a project demonstrating the integration of a Laravel backend API with a Vue.js frontend using Vite. This project is split into two repositories:

- **Backend**: A Laravel API that serves project data.
- **Frontend**: A Vue.js application that fetches and displays project data from the backend API.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Milestones](#milestones)

## Features

- **Laravel Backend API**
  - RESTful endpoints
  - JSON responses
  - Secure and efficient data handling
- **Vue.js Frontend**
  - Dynamic data fetching with Axios
  - Responsive design with Vite
  - Pagination and search functionality

## Setup

### Backend

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/laravel-api.git
    cd laravel-api
    ```

2. Install dependencies:

    ```sh
    composer install
    ```

3. Set up the environment:

    ```sh
    cp .env.example .env
    php artisan key:generate
    ```

4. Run the migrations:

    ```sh
    php artisan migrate --seed
    ```

5. Start the server:

    ```sh
    php artisan serve
    ```

### Frontend

1. Clone the repository:

    ```sh
    git clone https://github.com/gianlivio/vite-boolfolio.git
    cd vite-boolfolio
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

## Usage

Once both servers are running, you can access the frontend application at `http://localhost:3000` and the backend API at `http://127.0.0.1:8000/api/projects`.

## Milestones

### Milestone 1: Laravel API

- Add `Api/ProjectController` to handle API requests and return project data in JSON format.

### Milestone 2: Test API with Postman

- Verify API response to ensure data is fetched correctly.

![Postman Call](/public/postman-call.png)

### Milestone 3: Vue.js Frontend Setup

- Set up a new Vue 3 project with Vite and install Axios for HTTP requests.

### Milestone 4: Fetch Data in Vue.js

- Make an API call from the Vue app to fetch and display project data.
- Print results in the console to verify data reception.

### Milestone 5: Project Cards

- Create a `ProjectCard` component to display individual projects.
- Add styling to make the cards visually appealing.

![Projects Page](/public/projects.png)

### Bonus: Pagination

- Implement pagination to manage large datasets on the frontend.

### Backend Dashboard
![Backend Dashboard](/public/backend-dashboard.png)

### Contact Page
![Contact Page](/public/getintouch.jpg.png)

---