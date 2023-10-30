window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
  console.log("Token is:", localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    headers = {
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    loadEmployees();
  } else {
    window.location.href = "index.html";
  }
}

function loadEmployees() {
  axios
    .get(url + "/employees", headers)
    .then(function (res) {
      console.log(res);
      displayEmployees(res.data.message);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayEmployees(employees) {
  var tbody = document.querySelector("tbody");
  var table = document.querySelector("table");
  var row = document.createElement("tr");

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    var row = document.createElement("tr");

    var id = document.createElement("td");
    id.textContent = employee.emp_id;
    var Nombre = document.createElement("td");
    Nombre.textContent = employee.emp_nombre;
    var Apellido = document.createElement("td");
    Apellido.textContent = employee.emp_apellidos;
    var Telefono = document.createElement("td");
    Telefono.textContent = employee.emp_telefono;
    var Correo = document.createElement("td");
    Correo.textContent = employee.emp_correo;
    var Direccion = document.createElement("td");
    Direccion.textContent = employee.emp_direccion;

    row.appendChild(id);
    row.appendChild(Nombre);
    row.appendChild(Apellido);
    row.appendChild(Telefono);
    row.appendChild(Correo);
    row.appendChild(Direccion);

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  var body = document.querySelector("body");
  body.appendChild(table);
}
