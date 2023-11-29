window.onload = init;

function init() {
  console.log("Token is:", localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    headers = {
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    document
      .querySelector(".btn-primary")
      .addEventListener("click", addEmployees);
  } else {
    window.location.href = "empleados.html";
  }
}

function addEmployees() {
  var headers = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  var name = document.getElementById("input-name").value;
  var apellidos = document.getElementById("input-secondname").value;
  var mail = document.getElementById("input-mail").value;
  var phone = document.getElementById("input-phone").value;
  var address = document.getElementById("input-address").value;

  axios
    .post(
      "http://localhost:3000/employees/",
      {
        emp_nombre: name,
        emp_apellidos: apellidos,
        emp_telefono: phone,
        emp_correo: mail,
        emp_direccion: address,
      },
      headers
    )
    .then(function (res) {
      console.log(res);
      alert("Registro exitoso");
      window.location.href = "empleados.html";
    })
    .catch(function (err) {
      console.log(err);
    });
}
