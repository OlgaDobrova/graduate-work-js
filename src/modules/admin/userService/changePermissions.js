import { render } from "./render";

export const changePermissions = () => {
  const tbody = document.getElementById("table-body");

  if (tbody) {
    tbody.addEventListener("click", (e) => {
      if (e.target.closest("input[type='checkbox']")) {
        const tr = e.target.closest("tr");
        const input = tr.querySelector("input[type='checkbox']");
        const id = tr.dataset.key;

        userService.changeUser(id, { permission: input.checked }).then(() => {
          userService.getUsers().then((users) => {
            // отрисовываем users
            render(users);
          });
        });
      }
    });
  }
};
