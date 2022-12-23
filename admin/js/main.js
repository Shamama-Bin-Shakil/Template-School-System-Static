// Alert Function Error
function alertError(name = "") {
  const alert_error = document.getElementById("alert-error");
  const error = document.getElementById("error");
  alert_error.classList.add("active");
  error.innerHTML = name;
}

// Alert Function Success
function alertSuccess(name = "") {
  const alert_success = document.getElementById("alert-success");
  const success = document.getElementById("success");
  alert_success.classList.add("active");
  success.innerHTML = name;
}


const alertBtn = document.getElementsByClassName("alert-btn");
Array.from(alertBtn).forEach((element) => {
  element.addEventListener("click", () => {
    // let w = element.parentElement.parentElement.parentElement;
    let alertRemove = element.closest(".alert");
    alertRemove.classList.remove("active");
  });
});