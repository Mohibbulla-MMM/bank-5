// login btn ---------------
document.getElementById("log-btn").addEventListener("click", function () {
  // user name ----------
  const userName = document.getElementById("user-name");
  const userNameValue = userName.value;
  // console.log(userNameValue.length);
  // user passwod ----------
  const userPassword = document.getElementById("user-password");
  const userPasswordValue = userPassword.value;

  if (userNameValue === "mohibbulla" && userPasswordValue === "1010") {
    location.href = "../user-account-page/user.html";
  } else if (userPasswordValue !== "1010" || userNameValue !== "mohibbulla") {
    // user name
    if (userNameValue.length > 0 && userNameValue !== "mohibbulla") {
      userName.value = "";
      userName.setAttribute("placeholder", "invalid name");
    }

    // user Password
    if (userPasswordValue.length > 0 && userPasswordValue !== "1010") {
      userPassword.value = "";
      userPassword.setAttribute("type", "text");
      userPassword.setAttribute("placeholder", "invalid password");
    }
  }
});
// name input fild ------
document.getElementById("user-name").addEventListener("keyup", function () {
  // name
  const userName = document.getElementById("user-name");
  userName.removeAttribute("placeholder", "invalid name");
  // password
  const userPassword = document.getElementById("user-password");
  userPassword.setAttribute("placeholder", "Your password");
  userPassword.setAttribute("type", "password");
});
// password input fild --------------

document.getElementById("user-password").addEventListener("keyup", function () {
  // name
  const userName = document.getElementById("user-name");
  userName.setAttribute("placeholder", "Your name");
  // password
  const userPassword = document.getElementById("user-password");
  userPassword.removeAttribute("placeholder", "Wrong password");
  userPassword.setAttribute("type", "password");
});

// password icon click -------------
let counter = 0;
document.getElementById("icon-password").addEventListener("click", function () {
  counter += 1;
  // show password icon
  const icon = document.getElementById("icon-password");
  // user input password fild
  const userPassword = document.getElementById("user-password");
  if (counter % 2 !== 0) {
    userPassword.setAttribute("type", "text");
    icon.classList.add("fa-eye");
  } else {
    userPassword.setAttribute("type", "password");
    icon.classList.remove("fa-eye");
  }
});
