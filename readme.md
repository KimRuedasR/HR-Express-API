```
--------------------------------------------------------------
|                                                            |
|               Taller de Node.js S.A. de C.V.               |
|                           v1.2.1                           |
|                                                            |
|                  HHHH H   HHHH HH   RRRRRRR R              |
|                  HHHH H   HHHH HH   RRRRRRR RR             |
|                  HHHH H   HHHH HH   RRR   RR RR            |
|                  HHHH H   HHHH HH   RRR    RR RR           |
|                  HHHHHHHHHHHHH HH   RRR   RR RR            |
|                  HHHHHHHHHHHHH HH   RRRRRRR RR             |
|                  HHHH H   HHHH HH   RRRRR RR               |
|                  HHHH H   HHHH HH   RRR RR RR              |
|                  HHHH H   HHHH HH   RRR  RR RR             |
|                  HHHH H   HHHH HH   RRR   RR RR            |
|                                                            |
--------------------------------------------------------------
```

# HR Management API (API de RH)

## Description (Descripción)

An HR management REST API using node.js and express.js. Manages administrators and employees.

Una API REST de gestión de recursos humanos que utiliza node.js y express.js. Gestiona administradores y empleados.

## Requirements (Requisitos)

- Node.js
- MySQL

## Setup (Configuración)

1. **Clone Repo**:
   git clone https://github.com/KimRuedasR/HR-Express-API.git
2. **Install**:
   npm install
3. **MySQL Setup**:
   Use the included test database.

   - New User:
     Create a new user "hrmanagement".

   SQl Query:

   ```bash
   CREATE USER 'hrmanagement'@'localhost';
   ```

   - Import Database
     Import "./hrmanagement.sql" for a test database

   - Grant:
     Grant all privileges to the "hrmanagement" user and the "hrmanagement.sql" datadase.

   SQl Query:

   ```bash
   GRANT ALL PRIVILEGES ON hrmanagement.* TO 'hrmanagement'@'localhost';
   ```

   - Flush:
     Flush privileges.

   SQl Query:

   ```bash
   FLUSH PRIVILEGES;
   ```

4. **DB Config**:

   - By default configured for "hrmanagement.sql" test database.

   - Update ./config/database.js.

5. **Start**:
   npm start

6. **Test**:

   - Import ./hrManagement.postman_collection.json with Postman to test the CRUD operations for "Administradores" and "Empleados" entities.

   - POST operations and database autoincrement, create a new entity or modify routes for testing.

## Endpoints

### Admin Routes

- /signin: New admin.
- /login: Admin login.
- /login/:id: Update Admin (PUT).
- /login/:id: Update Admin (PATCH).
- /: All admins.

### Employee Routes

- /employees: All employees.
- /employees/:id: Employee by ID.
- /employees: Create new employee (POST).
- /employees/:id: Update employee (PUT).
- /employees/:id: Update employee (PATCH).
- /employees/:id: Delete employee (DELETE).
