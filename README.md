# Project Title

Brief description of what the project does.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

This project is a [brief description of the project]. It helps [explain what it solves or does]. The purpose of the project is to [explain why it was created].

## Installation

### Prerequisites

- **Backend**: Java 23, Spring Boot 3.4.2
- **Frontend**: Node.js
- **Database**: MySQL

### Backend (Spring Boot)

1. **Database Setup**:
   - The backend connects to a MySQL database named `student-management`.
   - The database credentials are:
     - **Username**: rathan
     - **Password**: Jaffna123@

2. **Running the Backend**:
   - Ensure that Java 23 and Maven are installed.
   - In the root directory of the project, run the backend with the following command:

     ```bash
     ./mvnw spring-boot:run
     ```

   - Alternatively, you can use the run button in your IDE (e.g., IntelliJ, VS Code) to run the application.

### Frontend (React with Vite)

1. **Prerequisites**:
   - Ensure that you have Node.js installed.

2. **Running the Frontend**:
   - Navigate to the frontend project directory.
   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Once the installation is complete, run the frontend using the following command:

     ```bash
     npm run dev
     ```

   - The React app will now be running and accessible at `http://localhost:3000`.

## Usage

### Example

Here is an example of how to use this project:

```bash
# Run the backend
./mvnw spring-boot:run

# Run the frontend
npm run dev
