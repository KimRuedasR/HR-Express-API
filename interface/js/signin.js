window.onload = init;

function init() {
  if (!localStorage.getItem("token")) {
    document
      .querySelector(".btn-secondary")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });

    document.querySelector(".btn-primary").addEventListener("click", signin);
  } else {
    window.location.href = "empleados.html";
  }
}

function signin() {
  var name = document.getElementById("input-name").value;
  var mail = document.getElementById("input-mail").value;
  var pass = document.getElementById("input-password").value;

  axios({
    method: "post",
    url: "http://localhost:3000/admin/signin",
    data: {
      admin_nombre: name,
      admin_correo: mail,
      admin_contrasena: pass,
    },
  })
    .then(function (res) {
      sconsole.log(res);
      alert("Registro exitoso");
      window.location.href = "login.html";
    })
    .catch(function (err) {
      console.log(err);
    });
}
