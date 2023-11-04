import { render } from "./render";

export const removeUsers = () => {
  const tbody = document.getElementById("table-body");

  if (tbody) {
    tbody.addEventListener("click", (e) => {
      if (e.target.closest(".btn-remove")) {
        const tr = e.target.closest("tr");
        const id = tr.dataset.key;

        userService.removeUser(id).then(() => {
          userService.getUsers().then((users) => {
            // отрисовываем users
            render(users);
          });
        });
      }
    });
  }
};
