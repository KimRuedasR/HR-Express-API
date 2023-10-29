const express = require("express");
const jwt = require("jsonwebtoken");
const admin = express.Router();
const db = require("../config/database");

admin.post("/signin", async (req, res, next) => {
  console.log(req.body);
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

admin.post("/login", async (req, res, next) => {
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

admin.get("/", async (req, res, next) => {
  const query = "SELECT * FROM administradores";
  const rows = await db.query(query);

  return res.status(200).json({ code: 200, message: rows });
});

admin.delete("/:id([0-9]{1,3})", async (req, res, next) => {
  const query = `DELETE FROM administradores WHERE admin_id=${req.params.id};`;
  const rows = await db.query(query);

  if (rows.affectedRows === 1) {
    return res
      .status(200)
      .json({ code: 200, message: "Administrador eliminado correctamente" });
  }
  return res
    .status(404)
    .json({ code: 404, message: "Administrador no encontrado" });
});

module.exports = admin;
