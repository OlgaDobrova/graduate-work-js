import { handleElement } from "./helpers";

export const menu = () => {
  const menuBtn = document.querySelectorAll(".menu .menu__icon");
  const menu = document.querySelector(".popup-dialog-menu");
  const scrollBtn = document.querySelector(".footer .button-footer");

  let idInterval;
  let topElement;
  let direction = "down";

  const scroll = () => {
    let top = topElement;
    let currentTop = document.documentElement.scrollTop;

    idInterval = requestAnimationFrame(scroll);

    if (direction == "up") {
      if (top - currentTop < 0) {
        currentTop -= 30;
        document.documentElement.scrollTop = currentTop;
      } else {
        cancelAnimationFrame(idInterval);
      }
    } else {
      if (top - currentTop > 0) {
        currentTop += 15;
        document.documentElement.scrollTop = currentTop;
      } else {
        cancelAnimationFrame(idInterval);
      }
    }
  };

  menuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      handleElement(".popup-dialog-menu", "active-menu");
    });
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest(".close-menu")) {
      handleElement(".popup-dialog-menu", "active-menu");
    } else if (e.target.closest(".popup-menu-nav>.popup-menu-nav__item>a")) {
      const link = e.target.attributes["href"].value.slice(1);

      e.preventDefault();
      topElement = document.getElementById(link).offsetTop; // позиция элемента от верхнего края документа
      handleElement(".popup-dialog-menu", "active-menu");
      direction = "down";
      scroll();
    }
  });

  //кнопка скролла в подвале
  scrollBtn.addEventListener("click", function (event) {
    const link = this.querySelector("a").attributes["href"].value.slice(1); //main

    event.preventDefault();

    topElement = document.getElementById(link).offsetTop; // позиция элемента от верхнего края документа
    direction = "up";
    scroll();
  });
};
