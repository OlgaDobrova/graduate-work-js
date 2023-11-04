import { render } from "./render";

export const filterUsers = () => {
  const btnChildren = document.getElementById("btn-isChildren");
  const btnPermissions = document.getElementById("btn-isPermissions");
  const btnAll = document.getElementById("btn-isAll");

  if (btnChildren && btnPermissions && btnAll) {
    btnChildren.addEventListener("click", () => {
      userService.filterUsers("children").then((users) => {
        render(users);
      });
    });
    btnPermissions.addEventListener("click", () => {
      userService.filterUsers("permission").then((users) => {
        render(users);
      });
    });
    btnAll.addEventListener("click", () => {
      userService.getUsers().then((users) => {
        render(users);
      });
    });
  }
};
