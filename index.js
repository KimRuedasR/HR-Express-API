// Depencencies
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
// Routes
const employeeRoutes = require("./routes/employeeRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
// Middleware
const auth = require("./middleware/auth");
const notFound = require("./middleware/notFound");
const cors = require("./middleware/cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(express.static(path.join(__dirname, "interface"))); // Serve static files

// Serve static files
app.use(express.static(path.join(__dirname, "interface")));

// Public routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "interface", "login.html"));
});

app.use("/admins", adminRoutes);

// Apply authentication middleware only to protected routes
app.use("/employees", auth, employeeRoutes);

// Not found middleware
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
  console.log("--------------------------------------------------------------");
  console.log("|                                                            |");
  console.log("|               Taller de Node.js S.A. de C.V.               |");
  console.log("|                           v1.1.0                           |");
  console.log("|                                                            |");
  console.log("|                                                            |");
  console.log("|                  HHHH H   HHHH HH   RRRRRRR R              |");
  console.log("|                  HHHH H   HHHH HH   RRRRRRR RR             |");
  console.log("|                  HHHH H   HHHH HH   RRR   RR RR            |");
  console.log("|                  HHHH H   HHHH HH   RRR    RR RR           |");
  console.log("|                  HHHHHHHHHHHHH HH   RRR   RR RR            |");
  console.log("|                  HHHHHHHHHHHHH HH   RRRRRRR RR             |");
  console.log("|                  HHHH H   HHHH HH   RRRRR RR               |");
  console.log("|                  HHHH H   HHHH HH   RRR RR RR              |");
  console.log("|                  HHHH H   HHHH HH   RRR  RR RR             |");
  console.log("|                  HHHH H   HHHH HH   RRR   RR RR            |");
  console.log("|                                                            |");
  console.log("|               ----:: Servidor RH iniciado ::----           |");
  console.log("|                                                            |");
  console.log("--------------------------------------------------------------");
});
