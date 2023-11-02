import { render } from "./render";

export const sortUsers = () => {
  const headerSortChildren = document.getElementById("sort-is-children");

  if (headerSortChildren) {
    let isSort = false;

    headerSortChildren.style.cursor = "pointer";

    headerSortChildren.addEventListener("click", () => {
      userService
        .getSortUsers({
          name: "children",
          value: isSort ? "asc" : "desc",
        })
        .then((user) => {
          render(user);
        });
      isSort = !isSort;
    });
  }
};
