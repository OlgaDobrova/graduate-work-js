import { repairRender } from "./repairRender";

export const sortRepairs = () => {
  const table = document.querySelector("table");
  if (!table) {
    return;
  }
  const headerSortId = table.querySelector(".th-id");
  const headerSortType = table.querySelector(".th-type");
  const headerSortName = table.querySelector(".th-name");
  const headerSortUnits = table.querySelector(".th-units");
  const headerSortCost = table.querySelector(".th-cost");

  let isSort = false;

  if (
    !table ||
    !headerSortId ||
    !headerSortType ||
    !headerSortName ||
    !headerSortUnits ||
    !headerSortCost
  ) {
    return;
  }

  headerSortId.addEventListener("click", () => {
    repairService
      .getSortRepairs({
        name: "id",
        value: isSort ? "asc" : "desc",
      })
      .then((repair) => {
        repairRender(repair);
      });
    isSort == false
      ? headerSortId.classList.add("down")
      : headerSortId.classList.remove("down");
    isSort = !isSort;
  });

  headerSortType.addEventListener("click", () => {
    repairService
      .getSortRepairs({
        name: "type",
        value: isSort ? "asc" : "desc",
      })
      .then((repair) => {
        repairRender(repair);
      });
    isSort == false
      ? headerSortType.classList.add("down")
      : headerSortType.classList.remove("down");
    isSort = !isSort;
  });

  headerSortName.addEventListener("click", () => {
    repairService
      .getSortRepairs({
        name: "name",
        value: isSort ? "asc" : "desc",
      })
      .then((repair) => {
        repairRender(repair);
      });
    isSort == false
      ? headerSortName.classList.add("down")
      : headerSortName.classList.remove("down");
    isSort = !isSort;
  });

  headerSortUnits.addEventListener("click", () => {
    repairService
      .getSortRepairs({
        name: "units",
        value: isSort ? "asc" : "desc",
      })
      .then((repair) => {
        repairRender(repair);
      });
    isSort == false
      ? headerSortUnits.classList.add("down")
      : headerSortUnits.classList.remove("down");
    isSort = !isSort;
  });

  headerSortCost.addEventListener("click", () => {
    repairService
      .getSortRepairs({
        name: "cost",
        value: isSort ? "asc" : "desc",
      })
      .then((repair) => {
        repairRender(repair);
      });
    isSort == false
      ? headerSortCost.classList.add("down")
      : headerSortCost.classList.remove("down");
    isSort = !isSort;
  });
};
