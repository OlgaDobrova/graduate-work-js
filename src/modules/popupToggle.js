import { handleElement, animate } from "./helpers";

export const popupToggle = () => {
  //при наведении на любой элемент блока formula ищем data-атрибут
  const blockFormula = document.getElementById("formula");
  const arrayFormulaItem = blockFormula.querySelectorAll(".formula-item");

  //появление
  const emerging = (popupElement) => {
    popupElement.style.visibility = "visible";

    popupElement.style.opacity = 0;
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        popupElement.style.opacity = String(progress);
      },
    });
  };

  //скрытие
  const hiding = (popupElement, removeClass = "") => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        popupElement.style.opacity = String(1 - progress);
        if (progress == 1) {
          popupElement.style.visibility = "";
          popupElement.style.opacity = "";
          if (removeClass != "") {
            popupElement.classList.remove(removeClass);
          }
        }
      },
    });
  };

  arrayFormulaItem.forEach((item) => {
    let dataAtt = item.dataset["popupformula"];
    let popupElement = document.querySelector(`.formula-item-popup.${dataAtt}`);

    if (popupElement) {
      item.addEventListener("mouseenter", () => {
        console.log(popupElement);

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
        if (
          !e.target.closest(".popup-dialog") ||
          e.target.classList.contains("close")
        ) {
          hiding(popupElement);
        }
      });
    }
  });
};
