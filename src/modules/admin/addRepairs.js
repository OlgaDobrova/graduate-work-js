import { repairRender } from "./repairRender";

export const addRepairs = () => {
  const btnAddItem = document.querySelector(".button.btn-addItem");
  const modalOverlay = document.getElementById("modal");

  const addition = () => {
    const form = document.querySelector("form");
    const typeInput = form.querySelector("#type");
    const nameInput = form.querySelector("#name");
    const unitsInput = form.querySelector("#units");
    const costInput = form.querySelector("#cost");

    if (!form) {
      return;
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.dataset.repair) {
          const repair = {
            type: typeInput.value,
            name: nameInput.value,
            units: unitsInput.value,
            cost: costInput.value,
          };

          //сохранили работу repair, получили ответ в виде json объекта
          repairService.addRepairs(repair).then(() => {
            //здесь ответ уже точно пришел на весь repairs из localhost
            repairService.getRepairs().then((repairs) => {
              // отрисовываем repairs
              repairRender(repairs);
              form.reset();
              modalOverlay.style.display = "";
            });
          });
        }
      });
    }
  };

  if (btnAddItem) {
    btnAddItem.addEventListener("click", () => {
      if (modalOverlay) {
        const form = document.querySelector("form");
        const formHeader = modalOverlay.querySelector(".modal__header");
        modalOverlay.style.display = "flex";
        formHeader.textContent = "Добавение новой услуги";

        modalOverlay.addEventListener("click", (e) => {
          if (
            !e.target.closest(".modal") ||
            e.target.closest(".button__close") ||
            e.target.closest(".cancel-button")
          ) {
            form.reset();
            modalOverlay.style.display = "";
          }
        });
      }
    });

    addition();

    if (document.getElementById("modal")) {
      document.getElementById("modal").style.display = "";
    }
  }
};
