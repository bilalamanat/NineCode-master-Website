const label = document.querySelector(".more-option span"),
  qr = document.querySelector(".boxIcon .bx-qr"),
  form = document.querySelector(".container .get-form"),
  container = document.querySelector(".container");
buttonIn.onclick = () => {
  buttonUp.classList.remove("active");
  buttonIn.classList.add("active");
  label.innerHTML = "Sign In";
  qr.style.display = "block";
  signin.classList.remove("hiden");
  signup.classList.add("hiden");
  form.classList.remove("selected");
  form.classList.add("dismiss");
  container.style.backgroundImage = "url('/img/SignIn.jpg')";
};
buttonUp.onclick = () => {
  buttonIn.classList.remove("active");
  buttonUp.classList.add("active");
  label.innerHTML = "Sign Up";
  qr.style.display = "none";
  signup.classList.remove("hiden");
  signin.classList.add("hiden");
  form.classList.add("selected");
  form.classList.remove("dismiss");
  container.style.backgroundImage = "url('/img/SignUp.jpg')";
};
