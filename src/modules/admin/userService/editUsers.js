import { render } from "./render";

export const editUsers = () => {
  const tbody = document.getElementById("table-body");
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#name");
  const passwordInput = form.querySelector("#type");

  if (tbody && form) {
    tbody.addEventListener("click", (e) => {
      if (e.target.closest(".btn-edit")) {
        const tr = e.target.closest("tr");
        const id = tr.dataset.key;

        userService.getUser(id).then((user) => {
          nameInput.value = user.login;
          passwordInput.value = user.password;

          form.dataset.user = id;
        });
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (form.dataset.user) {
        const user = {
          login: nameInput.value,
          password: passwordInput.value,
        };

        //сохранили пользователя user, получили ответ в виде json объекта
        userService.editUser(form.dataset.user, user).then(() => {
          //здесь ответ уже точно пришел на весь users из localhost
          userService.getUsers().then((users) => {
            // отрисовываем users
            render(users);
            form.reset();
            form.removeAttribute("data-user");
          });
        });
      }
    });
  }
};
