const handleElement = (selector, toggleClass) => {
  const element = document.querySelector(selector);
  element.classList.toggle(toggleClass);
};

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

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

export { handleElement, animate, emerging, hiding };
