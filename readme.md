# HR Management API

## Description

This project is an API for Human Resources Management. It allows administrators to manage employees and access their details.

## Requirements

- Node.js
- MySQL

## Setup

1. **Clone this repository**:
   ```
   git clone https://github.com/KimRuedasR/HR-Express-API.git
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Setup MySQL Database**:

   - Create a new MySQL user: `CREATE USER 'hrmanagement'@'localhost' IDENTIFIED BY 'hrmanagement';`
   - Grant privileges: `GRANT ALL PRIVILEGES ON hrmanagement.* TO 'newuser'@'localhost';`
   - Flush privileges: `FLUSH PRIVILEGES;`

4. **Update Database Configuration**:

   - Open `config/database.js` and update the MySQL username and password.

5. **Start the Server**:
   ```
   npm start
   ```

## Endpoints

- `/signin`: Register a new administrator.
- `/login`: Login as an administrator.
- `/`: Get all administrators.

## License

MIT
