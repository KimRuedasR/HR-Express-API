const express = require("express");
const jwt = require("jsonwebtoken");
const user = express.Router();
const db = require("../config/database");

user.post("/signin", async (req, res, next) => {
  const { admin_nombre, admin_correo, admin_contrasena } = req.body;
  let query =
    "INSERT INTO administradores (admin_nombre, admin_correo, admin_contrasena) ";
  query += `VALUES('${admin_nombre}', '${admin_correo}', '${admin_contrasena}');`;

  const rows = await db.query(query);
  if (admin_nombre && admin_correo && admin_contrasena) {
    if (rows.affectedRows == 1) {
      return res
        .status(201)
        .json({ code: 201, message: "Administrador registrado correctamente" });
    }
    return res.status(500).json({ code: 500, message: "Ocurrió un error" });
  }
  return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

user.post("/login", async (req, res, next) => {
  const { admin_correo, admin_contrasena } = req.body;
  const query = `SELECT * FROM administradores WHERE admin_correo='${admin_correo}' AND admin_contrasena='${admin_contrasena}';`;
  const rows = await db.query(query);
  if (admin_correo && admin_contrasena) {
    if (rows.length == 1) {
      const token = jwt.sign(
        {
          admin_id: rows[0].admin_id,
          admin_correo: rows[0].admin_correo,
        },
        "debugkey"
      );
      return res.status(200).json({ code: 200, message: token });
    } else {
      return res
        .status(200)
        .json({ code: 401, message: "Usuario y/o contraseña incorrectos" });
    }
  }
  return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

user.get("/", async (req, res, next) => {
  const query = "SELECT * FROM administradores";
  const rows = await db.query(query);

  return res.status(200).json({ code: 200, message: rows });
});

module.exports = user;
