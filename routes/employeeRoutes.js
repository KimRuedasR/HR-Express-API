const express = require("express");
const employees = express.Router();
const db = require("../config/database");

employees.post("/", async (req, res, next) => {
  const { emp_nombre, emp_apellidos, emp_telefono, emp_correo, emp_direccion } =
    req.body;

  if (
    emp_nombre &&
    emp_apellidos &&
    emp_telefono &&
    emp_correo &&
    emp_direccion
  ) {
    let query =
      "INSERT INTO empleados (emp_nombre, emp_apellidos, emp_telefono, emp_correo, emp_direccion)";
    query += ` VALUES('${emp_nombre}', '${emp_apellidos}', '${emp_telefono}', '${emp_correo}', '${emp_direccion}');`;
    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
      return res
        .status(201)
        .json({ code: 201, message: "Empleado insertado correctamente" });
    }

    return res.status(500).json({ code: 500, message: "Ocurrió un error" });
  }
  return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

employees.delete("/:id([0-9]{1,11})", async (req, res, next) => {
  const query = `DELETE FROM empleados WHERE emp_id=${req.params.id};`;
  const rows = await db.query(query);
  if (rows.affectedRows == 1) {
    return res
      .status(200)
      .json({ code: 200, message: "Empleado borrado correctamente" });
  }
  return res.status(404).json({ code: 404, message: "Empleado no encontrado" });
});

employees.put("/:id([0-9]{1,11})", async (req, res, next) => {
  const { emp_nombre, emp_apellidos, emp_telefono, emp_correo, emp_direccion } =
    req.body;

  if (
    emp_nombre &&
    emp_apellidos &&
    emp_telefono &&
    emp_correo &&
    emp_direccion
  ) {
    let query = `UPDATE empleados SET emp_nombre='${emp_nombre}', emp_apellidos='${emp_apellidos}', `;
    query += `emp_telefono='${emp_telefono}', emp_correo='${emp_correo}', emp_direccion='${emp_direccion}' WHERE emp_id=${req.params.id};`;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
      return res
        .status(200)
        .json({ code: 200, message: "Empleado actualizado correctamente" });
    }

    return res.status(500).json({ code: 500, message: "Ocurrió un error" });
  }
  return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

employees.patch("/:id([0-9]{1,11})", async (req, res, next) => {
  const { emp_nombre, emp_apellidos, emp_telefono, emp_correo, emp_direccion } =
    req.body;
  let query = "UPDATE empleados SET ";
  let fieldsToUpdate = [];

  if (emp_nombre) fieldsToUpdate.push(`emp_nombre='${emp_nombre}'`);
  if (emp_apellidos) fieldsToUpdate.push(`emp_apellidos='${emp_apellidos}'`);
  if (emp_telefono) fieldsToUpdate.push(`emp_telefono='${emp_telefono}'`);
  if (emp_correo) fieldsToUpdate.push(`emp_correo='${emp_correo}'`);
  if (emp_direccion) fieldsToUpdate.push(`emp_direccion='${emp_direccion}'`);

  if (fieldsToUpdate.length === 0) {
    return res.status(400).json({ code: 400, message: "No fields to update" });
  }

  query += fieldsToUpdate.join(", ");
  query += ` WHERE emp_id=${req.params.id};`;

  const rows = await db.query(query);

  if (rows.affectedRows === 1) {
    return res
      .status(200)
      .json({ code: 200, message: "Empleado actualizado correctamente" });
  }

  return res.status(500).json({ code: 500, message: "Ocurrió un error" });
});

employees.get("/", async (req, res, next) => {
  const emp = await db.query("SELECT * FROM empleados");
  return res.status(200).json({ code: 200, message: emp });
});

employees.get("/:id([0-9]{1,11})", async (req, res, next) => {
  const id = req.params.id;
  const emp = await db.query(`SELECT * FROM empleados WHERE emp_id=${id};`);
  if (emp.length > 0) {
    return res.status(200).json({ code: 200, message: emp });
  }
  return res.status(404).send({ code: 404, message: "Empleado no encontrado" });
});

module.exports = employees;
