# Worker Management Frontend

This frontend application is designed for managing worker data. It is built using React, Ant Design for the user interface components, and appwrite for BAAS

## Features

- **Add Worker**: Allows users to input worker details through a form and submit them to a backend.
- **Manage Workers**: Displays a table of all workers, showcasing details added through the Add Worker form.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (at least v14.x)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up the frontend locally:

1. **Clone the frontend repository:**

   ```bash
   git clone https://github.com/vaden89/worker-management-frontend.git
   cd worker-management-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up an appwrite account:**

   ```
   https://cloud.appwrite.io/
   Create a database, a collection and the necessary fields to fit your needs
   ```

4. **Connect frontend to backend:**
   Add your projectId, databaseId, collectionId to the env variables and your set to go

## Usage

- **Add Worker**: Navigate to the Add Worker page through the application's menu. Fill out the form with the worker's information and submit it. The backend will handle the form submission, and the response will contain the worker's data, which will be rendered in the Manage Workers page.
-
- **Manage Workers**: After adding workers, go to the Manage Workers page to view all workers in a table format. This page pulls worker data from the backend and displays it, allowing for management actions such as edit and delete.

## Development

To start the application in development mode, run:

```bash
  npm start
```
