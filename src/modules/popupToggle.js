import { handleElement, animate } from "./helpers";

export const popupToggle = () => {
  // console.log(document.querySelectorAll(".link-list"));

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

      popupElement.addEventListener("click", (e) => {
        if (
          !e.target.closest(".popup-dialog") ||
          e.target.classList.contains("close")
        ) {
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
              }
            },
          });
        }
      });
    }
  });
};
