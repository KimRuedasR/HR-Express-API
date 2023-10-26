// Depencencies
const express = require("express");
const morgan = require("morgan");
const app = express();
// Routes
const employeeRoutes = require("./routes/employeeRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
// Middleware
const auth = require("./middleware/auth");
const notFound = require("./middleware/notFound");
const index = require("./middleware/index");
const cors = require("./middleware/cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

app.get("/", index);

app.use("/admins", adminRoutes);

app.use(auth);

app.use("/employees", employeeRoutes);

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
  console.log("--------------------------------");
  console.log("----::Servidor RH iniciado::----");
  console.log("--------------------------------");
});
