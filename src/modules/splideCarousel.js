import Splide from "@splidejs/splide";

export const splideCarousel = () => {
  //когда страница загружена
  document.addEventListener("DOMContentLoaded", function () {
    let portfolioSpliderActive;

    //общие св-ва для класса
    Splide.defaults = {
      direction: "ltr", //направление: слева направо
      pauseOnHover: true, // приостанов
      autoplay: true, // автопрокрутка (по умолч через 5000мс)
    };

    // ====================================================
    // СЛАЙДЕРЫ ТОЛЬКО НА МОБИЛЬНОЙ ВЕРСИИ
    const windowClientWidth = document.documentElement.clientWidth;

    if (windowClientWidth < 1024) {
      //БЛОК ФОРМУЛА - мобилка
      const splideSliderFormula = new Splide("#formula .splide", {
        type: "loop", // зацикливание слайдера
        perPage: 3, // кол-во видимых страниц
        perMove: 1, //движение по 1 слайду
        focus: "center", // м.б. num(№ слайда) или позиционирование
        // pauseOnHover: true,
        // autoplay: true,
        pagination: false, // наличие пагинации
        breakpoints: {
          // точки останова
          768: {
            perPage: 1,
            gap: ".7rem",
          },
        },
      });
      // инициализация слайдера
      splideSliderFormula.mount();

      //БЛОК ДОГОВОР - мобилка
      const splideTransparency = new Splide(
        ".transparency-slider-wrap.splide",
        {
          type: "loop", // зацикливание слайдера
          perPage: 1, // кол-во видимых страниц
          perMove: 1, //движение по 1 слайду
          focus: "center", // м.б. num(№ слайда) или позиционирование
          autoplay: false,
          pagination: false, // наличие пагинации
        }
      );
      // инициализация слайдера
      splideTransparency.mount();
    }

    // ====================================================
    // СЛАЙДЕРЫ В МОДАЛЬНОМ ОКНЕ

    //БЛОК ДОГОВОР - модалка
    const splidePopupTransparency = new Splide(
      ".popup-transparency-slider-wrap.splide",
      {
        type: "loop", // зацикливание слайдера
        perPage: 1, // кол-во видимых страниц
        perMove: 1, //движение по 1 слайду
        focus: "center", // м.б. num(№ слайда) или позиционирование
        autoplay: false,
        pagination: true, // наличие пагинации
      }
    );
    // инициализация слайдера
    splidePopupTransparency.mount();

    let paginationPopupTransparency = document.querySelector(
      ".popup-transparency-slider-wrap.splide .splide__pagination"
    );
    let countPopupTransparency =
      paginationPopupTransparency.querySelector(".count");
    countPopupTransparency.textContent = `${
      paginationPopupTransparency.childElementCount - 1
    }`;
    let spliderPopupTransparency = document.querySelector(
      ".popup-transparency-slider-wrap.splide"
    );
    spliderPopupTransparency.classList.remove("is-initialized");

    //блок repair-types
    //основной
    const repairTypesSliderSplide = new Splide(".repair-types-slider.splide", {
      type: "fade", // плавный переход, не поддерживает perPage
      // perPage: 1,
      rewind: true, // определяет перематывать ли карусель, не работает при type:"loop"
      pagination: false,
      arrows: false, // наличие стрелок
      autoplay: false,
    });
    //миниатюры
    const repairTypesTabSplide = new Splide(".repair-types-tab.splide", {
      autoWidth: true, //ширина слайдов определяется их шириной. При нем не указывать значения perPage и perMove
      perMove: undefined, //значение отменено
      gap: 10, //number|string  Промежуток между слайдами
      rewind: true,
      pagination: false,
      focus: "center",
      arrows: false,
      isNavigation: true, //карусель делает слайды кликабельными для перехода к другой карусели
      autoplay: false,
      breakpoints: {
        1024: {
          // здесь изменения
          updateOnMove: true, //Обновляет is-active статус слайдов непосредственно перед перемещением карусели
          type: "loop",
          perMove: 1,
          perPage: 1,
          gap: 0,
          arrows: true,
          autoplay: false,
          focus: "center",
        },
      },
    });
    //связь слайдеров: основной.sync(миниатюры)  , при наличии св-ва isNavigation: true
    repairTypesSliderSplide.sync(repairTypesTabSplide);
    //запуск слайдеров, инициализация
    repairTypesSliderSplide.mount();
    repairTypesTabSplide.mount();

    //слайдеры внутри основного
    let nestedSplideArray = document.querySelectorAll(
      ".nestedSplideTrack.splide"
    );
    nestedSplideArray.forEach((splide) => {
      let pagination, count;

      new Splide(splide, {
        type: "loop",
        perPage: 1,
        pagination: true,
        arrows: false,
        pauseOnHover: true,
      }).mount();

      pagination = splide.querySelector(".splide__pagination");
      count = pagination.querySelector(".count");
      count.textContent = `/ ${pagination.childElementCount - 1}`;
    });

    // БЛОК ПОРТФОЛИО
    const portfolioSplider = new Splide(".portfolio-desktop.splide", {
      perMove: 1,
      pauseOnHover: true,
      autoplay: false,
      pagination: false,
      arrowPath:
        "M16.03 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L14.439 6l-4.242-4.243a.75.75 0 1 1 1.06-1.06L16.03 5.47zM.5 5.25h15v1.5H.5v-1.5z",
    });

    // portfolioSplider.on("click", function (e) {
    //   const popupPortfolioSplider = new Splide(
    //     ".popup-portfolio-slider-wrap.splide",
    //     {
    //       type: "loop",
    //       perPage: 1,
    //       perMove: 1,
    //       pauseOnHover: true,
    //       autoplay: false,
    //       pagination: true,
    //       index: e.index,
    //       // focus: e.index,
    //     }
    //   );

    //   popupPortfolioSplider.on("mounted", function (e) {
    //     console.log(portfolioSpliderActive);
    //     console.log(popupPortfolioSplider.options);
    //   });

    //   popupPortfolioSplider.mount();
    // });

    portfolioSplider.mount();

    // БЛОК ОТЗЫВЫ
    const reviewsSplider = new Splide(".reviews-slider-wrap.splide", {
      type: "loop",
      perPage: 1,
      autoplay: false,
      pagination: false,
    });
    //инициализация
    reviewsSplider.mount();
  });
};
