const input = document.querySelector(".input-url"),
  button = document.querySelector(".btn"),
  list = document.querySelector(".output"),
  alert = document.querySelector(".alert"),
  closeBtn = document.querySelector(".close-btn");

// function set localStorage
let listURL = {};
const STORAGE_URL = "STORAGE_URL";
function syncLocalStorage(item, status = true) {
  listURL[item] = status;
  localStorage.setItem(STORAGE_URL, JSON.stringify(listURL));
}
// Get localstorage
if (localStorage.getItem(STORAGE_URL)) {
  listURL = JSON.parse(localStorage.getItem(STORAGE_URL));
  for (let key in listURL) {
    createList(key, listURL[key]);
  }
}

// Function button on click
button.addEventListener("click", () => {
  // Generate Googel Drive Url
  let url = input.value,
    a = url.search("/d/"),
    b = url.search("google.com"),
    posisi = url.search("/d/") + 3,
    id = url.slice(posisi).split(/[/]+/);
  if ((b > 1) & (a > 1)) {
    let out = id[0];
    output(out, id[0]);
    showAlert();
  } else {
    console.log("Pastikan URL anda dari Google Drive");
  }
});

// Cek form input apakah sudah di isi?
input.addEventListener("input", () => {
  if (input.value.length < 5) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

// Add Url to list
function output(out, id) {
  createList(out);
  syncLocalStorage(id);
  input.value = "";
  button.disabled = true;
}
// function create list
function createList(url) {
  let mainTag = `<div class="form-output"><input id="listCopy" type="text" value="https://drive.google.com/uc?export=download&id=${url}" /><i onclick="copy(this)" class="fa-light fa-paste"></i></div>`;
  navigator.clipboard.writeText(`https://drive.google.com/uc?export=download&id=${url}`);
  list.insertAdjacentHTML("afterbegin", mainTag);
}

// function copy url
function copy(el) {
  let copy = el.parentElement.firstElementChild.value;
  navigator.clipboard.writeText(copy);
  showAlert();
}

// Button alert
closeBtn.addEventListener("click", () => {
  alert.classList.remove("show");
  alert.classList.add("hide");
});
function showAlert() {
  alert.classList.add("show");
  alert.classList.remove("hide");
  alert.classList.add("showAlert");
  setTimeout(function () {
    alert.classList.remove("show");
    alert.classList.add("hide");
  }, 2000);
}

setTimeout(() => {
  list.style.display = "none";
  localStorage.clear();
}, 30 * 60 * 1000);
