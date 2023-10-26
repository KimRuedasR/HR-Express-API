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

# HR Management API (API de RH)

## Description (Descripción)

API for HR Management. Manages administrators and employees.s

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
