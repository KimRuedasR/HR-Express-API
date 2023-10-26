# HR Management API (API de RH)
```
--------------------------------------------------------------
|                                                            |
|               Taller de Node.js S.A. de C.V.               |
|                           v1.1.0                           |
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
   - New User: CREATE USER 'hrmanagement'@'localhost' IDENTIFIED BY 'hrmanagement';
   - Grant: GRANT ALL PRIVILEGES ON hrmanagement.\* TO 'hrmanagement'@'localhost';
   - Flush: FLUSH PRIVILEGES;
4. **DB Config**:
   - Update config/database.js.
5. **Start**:
   npm start

## Endpoints

### Admin Routes

- /signin: New admin.
- /login: Admin login.
- /: All admins.

### Employee Routes

- /employees: All employees.
- /employees/:id: Employee by ID.
- /employees: Create new employee (POST).
- /employees/:id: Update employee (PUT).
- /employees/:id: Delete employee (DELETE).
