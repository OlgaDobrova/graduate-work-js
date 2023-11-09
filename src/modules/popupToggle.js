import { handleElement, animate, emerging, hiding } from "./helpers";

export const popupToggle = () => {
  //при наведении на любой элемент блока formula ищем data-атрибут
  const blockFormula = document.getElementById("formula");
  const arrayFormulaItem = blockFormula.querySelectorAll(".formula-item");

  arrayFormulaItem.forEach((item) => {
    let dataAtt = item.dataset["popupformula"];
    let popupFormulaElement = document.querySelector(
      `.formula-item-popup.${dataAtt}`
    );

    if (popupFormulaElement) {
      item.addEventListener("mouseenter", () => {
        if (popupFormulaElement.getBoundingClientRect().y < 0) {
          popupFormulaElement.classList.add("active-bottom");
        }
        popupFormulaElement.style.visibility = "visible";
        popupFormulaElement.style.opacity = 1;
      });

      item.addEventListener("mouseleave", () => {
        popupFormulaElement.classList.remove("active-bottom");
        popupFormulaElement.style.opacity = "";
        popupFormulaElement.style.visibility = "";
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
      if (dataAtt == "popup-transparency" || dataAtt == "popup-portfolio") {
        let splideList = popupElement.querySelector(".splide");
        if (!splideList) {
          return;
        }
        splideList.classList.add("is-initialized");
      }
      emerging(popupElement);

      popupElement.addEventListener("click", (e) => {
        if (dataAtt == "popup-consultation") {
          if (
            !e.target.closest(".feedback-wrap") ||
            e.target.classList.contains("close")
          ) {
            hiding(popupElement);
          }
        } else if (
          (dataAtt == "popup-transparency" || dataAtt == "popup-portfolio") &&
          (!e.target.closest(".popup-dialog") ||
            e.target.classList.contains("close"))
        ) {
          let splider = popupElement.querySelector(".splide");
          if (!splider) {
            return;
          }
          splider.classList.remove("is-initialized");
          hiding(popupElement);
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
