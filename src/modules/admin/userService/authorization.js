export const authorization = () => {
  let rezCookieObj = {};

  const getData = (file) => {
    return fetch(file).then((response) => response.json());
  };

  const auth = (user) => {
    if (window.location.href == "http://localhost:8080/admin/") {
      getCookie("user");
      try {
        if (Object.entries(rezCookieObj).length == 0) {
          addNewUser(user);
          throw new Error(`Вы на странице впервые. Авторизуйтесь!`);
        } else {
          console.log(rezCookieObj);
          console.log(user);
          if (
            rezCookieObj.login == user.login &&
            rezCookieObj.password == user.password
          ) {
            window.location.href = "http://localhost:8080/admin/table.html";
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (window.location.href == "http://localhost:8080/admin/table.html") {
      // console.log("я на странице с таблицей");
      getCookie("user");

      if (
        rezCookieObj.login !== user.login ||
        rezCookieObj.password !== user.password
      ) {
        // console.log("не авторизован");
        window.location.href = "http://localhost:8080/admin/";
      }
    }
  };

  // записывает
  const setCookie = (user) => {
    //2дня = 2*1день=2*24ч=2*24*1ч=2*24*60мин=2*24*60*1мин=2*24*60*60сек=172800сек
    document.cookie =
      "user=" + encodeURIComponent(JSON.stringify(user)) + "; max-age=172800";
  };

  //считывает
  const getCookie = (name) => {
    // console.log(document.cookie);
    const array = document.cookie.split("; ");
    array.forEach((item) => {
      if (item.indexOf(`${name}=%`, 0) != -1) {
        let itemValue = decodeURIComponent(item.slice(5));
        rezCookieObj = JSON.parse(itemValue);
      }
    });
  };

  const addNewUser = (user) => {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("#name");
    const spanInput = form.querySelector("#spanName");
    const passwordInput = form.querySelector("#type");
    const spanPassword = form.querySelector("#spanPassword");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.dataset.user) {
          const newUser = {
            login: nameInput.value,
            password: passwordInput.value,
          };

          if (newUser.login == user.login) {
            spanInput.style.display = "none";
            if (newUser.password == user.password) {
              form.reset();
              setCookie(user);
              window.location.href = "http://localhost:8080/admin/table.html";
            } else {
              spanPassword.style.display = "block";
            }
          } else {
            spanInput.style.display = "block";
          }
        }
      });
    }
  };

  getData("http://localhost:3535/users")
    .then((arrUsers) => {
      auth(arrUsers[0]);
    })
    .catch((error) => console.log(error));
};
