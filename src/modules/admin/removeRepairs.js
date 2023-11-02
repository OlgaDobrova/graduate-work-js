import { repairRender } from "./repairRender";

export const removeRepairs = () => {
  const tbody = document.getElementById("tbody");

  if (tbody) {
    tbody.addEventListener("click", (e) => {
      if (e.target.closest(".btn-remove")) {
        const tr = e.target.closest("tr");
        const id = tr.dataset.key;

        repairService.removeRepair(id).then(() => {
          repairService.getRepairs().then((repairs) => {
            // отрисовываем repairs
            repairRender(repairs);
          });
        });
      }
    });
  }
};
