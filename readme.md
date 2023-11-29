```
--------------------------------------------------------------
|                                                            |
|               Taller de Node.js S.A. de C.V.               |
|                           v1.2.3                           |
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

# 🌐 HR Management API (API de RH) 🌐

## 📝 Description (Descripción)

🇬🇧 An HR management REST API using node.js and express.js. Manages administrators and employees.

🇪🇸 Una API REST de gestión de recursos humanos que utiliza node.js y express.js. Gestiona administradores y empleados.

## 🛠 Requirements (Requisitos)

- 🟢 Node.js
- 🛢 MySQL

## 🚀 Setup (Configuración)

### 1️⃣ Clone Repo

```bash
git clone https://github.com/KimRuedasR/HR-Express-API.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ MySQL Setup

Use the included test database.

- **New User**: Create a new user "hrmanagement".

  ```sql
  CREATE USER 'hrmanagement'@'localhost';
  ```

- **Import Database**: Import `./hrmanagement.sql` for a test database.

- **Grant Privileges**:

  ```sql
  GRANT ALL PRIVILEGES ON hrmanagement.\* TO 'hrmanagement'@'localhost';
  ```

- **Flush Privileges**:

  ```sql
  FLUSH PRIVILEGES;
  ```

### 4️⃣ DB Config

- By default configured for `hrmanagement.sql` test database.
- Update `./config/database.js`.

### 5️⃣ Start the Server

```bash
npm start
```

### 6️⃣ Test

- Import `./hrManagement.postman_collection.json` with Postman to test the CRUD operations for "Administradores" and "Empleados" entities.
- POST operations and database autoincrement, create a new entity or modify routes for testing.

## 🔐 Default Credentials

**Admin User**:

- **Correo electrónico**: `admin`
- **Contraseña**: `admin`

## 🛣 Endpoints

### Admin Routes

- 🔐 (POST)`/admins/login`: Admin login
- ➕ (POST)`/admins/signin`: New admin.
- 📋 (GET)`/admins/`: All admins.
- 🔄 (PUT)`/admins/:id:`: Update Admin.
- 📝 (PATCH)`/admins/:id:`: Update Admin.
- ❌ (DELETE)`/admins/:id:`: Delete Admin.

### Employee Routes

- ➕ (POST)`/employees`: Create new employee.
- 📋 (GET)`/employees`: All employees.
- 🔍 (GET)`/employees/:id:`: Employee by ID.
- 🔄 (PUT)`/employees/:id:`: Update employee.
- 📝 (PATCH)`/employees/:id:`: Update employee.
- ❌ (DELETE)`/employees/:id:`: Delete employee.

### Testing and new features

- 🐋🚢 Docker container.
- 🖥️🎨 Interface redesign.
