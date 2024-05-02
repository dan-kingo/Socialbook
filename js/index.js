var settingMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

document.getElementById("user").onclick = function () {
  settingMenu.classList.toggle("settings-menu-height");
};

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
