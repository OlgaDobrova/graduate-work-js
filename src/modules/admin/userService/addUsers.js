import { render } from "./render";

export const addUsers = () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#name");
  const passwordInput = form.querySelector("#type");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.dataset.user) {
        const user = {
          login: nameInput.value,
          password: passwordInput.value,
        };

        //сохранили пользователя user, получили ответ в виде json объекта
        userService.addUsers(user).then(() => {
          //здесь ответ уже точно пришел на весь users из localhost
          userService.getUsers().then((users) => {
            // отрисовываем users
            render(users);
            form.reset();
          });
        });
      }
    });
  }
};
