const form = document.getElementsByClassName("data")[0];
console.log(form);
const firstName = document.getElementById("firstName");
console.log(firstName);
const email = document.getElementById("email");
console.log(email);
const password = document.getElementById("password");
console.log(password);
const repeat = document.getElementById("repeatPassword");
console.log(repeat);
const signupBtn = document.querySelector("button");
console.log(signupBtn);
var error = document.getElementsByClassName("error");
console.log(error);
//form.addEventListener("submit", function (e) {
signupBtn.addEventListener("click", function (e) {
  //3alashan a3mel test lel errors b3mel call lel functions bet3ty el awel w b3d kda a3mel check if any error exists
  NameValidation(e);
  EmailValidation(e);
  PassValidation(e);
  repeatValidation(e);
  //check if any error exists
  let hasError = false;
  for (let i = 0; i < error.length; i++) {
    if (error[i].innerText !== "") {
      hasError = true;
      break;
    }
  }
  if (!hasError) {
    // No errors, redirect to another page
    window.location.href = "welcome.html";
  }

  console.log("hello");
});

function NameValidation(e) {
  if (firstName.value === "") {
    e.preventDefault();
    error[0].innerText = "Firstname is required";
  } else if (isFinite(firstName.value)) {
    e.preventDefault();
    error[0].innerText = "Please enter characters only";
  } else {
    error[0].innerText = "";
  }
}

function EmailValidation(e) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value.trim() === "") {
    e.preventDefault();
    error[1].innerText = "Email is required";
  } else if (!emailRegex.test(email.value.trim())) {
    e.preventDefault();
    error[1].innerText = "Please enter a valid email address";
  } else {
    error[1].innerText = "";
  }
}

function PassValidation(e) {
  if (password.value === "") {
    e.preventDefault();
    error[2].innerText = "Password is required";
  } else if (password.value.length < 6) {
    e.preventDefault();
    error[2].innerText = "password must be at least 6 characters";
  } else if (!isFinite(password.value)) {
    e.preventDefault();
    error[2].innerText = "please enter numbers only";
  } else {
    error[2].innerText = "";
  }
}

function repeatValidation(e) {
  if (repeat.value === "") {
    e.preventDefault();
    error[3].innerText = " Password is required";
  } else if (repeat.value != password.value) {
    e.preventDefault();
    error[3].innerText = "Must match password field";
  } else {
    error[3].innerText = "";
  }
}
