import { repairRender } from "./repairRender";
import { fillingSelect } from "./fillingSelect";

export const filterRepairs = () => {
  const select = document.getElementById("typeItem");

  fillingSelect();

  if (!select) {
    return;
  }
  select.addEventListener("change", () => {
    if (select.value == "Все услуги") {
      repairService.getRepairs().then((repairs) => {
        repairRender(repairs);
      });
    } else {
      repairService.filterRepairs(select.value).then((repairs) => {
        repairRender(repairs);
      });
    }
  });
};
