import { repairRender } from "./repairRender";

export const editRepairs = () => {
  const tbody = document.getElementById("tbody");
  const form = document.querySelector("form");
  // const
  const typeInput = form.querySelector("#type");
  const nameInput = form.querySelector("#name");
  const unitsInput = form.querySelector("#units");
  const costInput = form.querySelector("#cost");

  const filling = (id) => {
    repairService.getRepair(id).then((repair) => {
      typeInput.value = repair.type;
      nameInput.value = repair.name;
      unitsInput.value = repair.units;
      costInput.value = repair.cost;

      form.dataset.repair = id;
    });
  };

  if (!tbody || !form) {
    return;
  }

  tbody.addEventListener("click", (e) => {
    if (e.target.closest(".btn-edit")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;
      const modalOverlay = document.getElementById("modal");
      if (modalOverlay) {
        const modalHeader = modalOverlay.querySelector(".modal__header");
        modalHeader.textContent = "Редактирование услуги";
        modalOverlay.style.display = "flex";

        modalOverlay.addEventListener("click", (e) => {
          if (
            !e.target.closest(".modal") ||
            e.target.closest(".button__close") ||
            e.target.closest(".cancel-button")
          ) {
            modalOverlay.style.display = "";
            form.reset();
            form.removeAttribute("data-repair");
          }
        });
      }

      filling(id);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.repair) {
      const repair = {
        type: typeInput.value,
        name: nameInput.value,
        units: unitsInput.value,
        cost: costInput.value,
      };

      //сохранили пользователя repair, получили ответ в виде json объекта
      repairService.editRepair(form.dataset.repair, repair).then(() => {
        //здесь ответ уже точно пришел на весь repairs из localhost
        repairService.getRepairs().then((repairs) => {
          // отрисовываем repairs
          repairRender(repairs);
          form.reset();
          form.removeAttribute("data-repair");

          document.getElementById("modal").style.display = "";
        });
      });
    }
  });
};
