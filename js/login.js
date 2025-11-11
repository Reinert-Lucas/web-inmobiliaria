const form = document.getElementById("login-form");
const messageBox = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (user === "admin" && pass === "admin") {
    messageBox.innerText = "Login Exitoso";
    messageBox.classList.remove("msg-error");
    messageBox.classList.add("msg-success");
  } else {
    messageBox.innerText = "Credenciales Invalidas";
    messageBox.classList.remove("msg-success");
    messageBox.classList.add("msg-error");
  }
});
