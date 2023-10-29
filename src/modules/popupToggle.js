import { handleElement, animate, emerging, hiding } from "./helpers";

export const popupToggle = () => {
  //при наведении на любой элемент блока formula ищем data-атрибут
  const blockFormula = document.getElementById("formula");
  const arrayFormulaItem = blockFormula.querySelectorAll(".formula-item");

  arrayFormulaItem.forEach((item) => {
    let dataAtt = item.dataset["popupformula"];
    let popupElement = document.querySelector(`.formula-item-popup.${dataAtt}`);

    if (popupElement) {
      item.addEventListener("mouseenter", () => {
        if (popupElement.getBoundingClientRect().y < 0) {
          popupElement.classList.add("active-bottom");
        }

        emerging(popupElement);
      });

      item.addEventListener("mouseleave", () => {
        hiding(popupElement, "active-bottom");
      });
    }
  });

  //при клике по любому элементу ищем data-атрибут popup
  document.addEventListener("click", (e) => {
    let dataAtt = e.target.dataset["popup"];
    let popupElement = document.querySelector(`.popup.${dataAtt}`);

    if (
      dataAtt == "popup-repair-types" &&
      e.target.classList.contains("menu-link")
    ) {
      handleElement(".popup-dialog-menu", "active-menu");
    }

    if (popupElement) {
      emerging(popupElement);

      popupElement.addEventListener("click", (e) => {
        if ((dataAtt = "popup-consultation")) {
          if (
            !e.target.closest(".feedback-wrap") ||
            e.target.classList.contains("close")
          ) {
            hiding(popupElement);
          }
        } else {
          if (
            !e.target.closest(".popup-dialog") ||
            e.target.classList.contains("close")
          ) {
            hiding(popupElement);
          }
        }
      });
    }
  });
};
