# Ecosystem API Layer

This project is a simple Node.js and Express API that serves as a universal onboarding engine. It provides an endpoint to receive new user enrollments and syncs them across other partner platforms based on a configurable rule map.

---

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/RohitSP187054/assessment-ecosystemapi.git>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd ecosystem-api
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## Configuration

Before running the application, you need to create a `.env` file in the root of the project to store your secret API key for the admin endpoints.

1.  **Create a `.env` file:**
    ```bash
    touch .env
    ```

2.  **Add your API key to the `.env` file:**
    ```
    API_KEY="my-super-secret-key-123"
    ```

---

## Running the Application

To start the server, run the following command. The server will run on `http://localhost:3000`.

```bash
npm start
