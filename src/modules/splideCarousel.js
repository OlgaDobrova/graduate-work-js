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

      // //в БЛОКе ПОЛНЫЙ СПИСОК УСЛУГ И ЦЕН - мобилка
      // const splideNavListPopupRepair = new Splide(
      //   ".nav-popup-repair-types.splide",
      //   {
      //     type: "loop", // зацикливание слайдера
      //     perPage: 1, // кол-во видимых страниц
      //     perMove: 1, //движение по 1 слайду
      //     focus: "center", // м.б. num(№ слайда) или позиционирование
      //     // pauseOnHover: true,
      //     autoplay: false,
      //     pagination: false, // наличие пагинации
      //   }
      // );
      // // инициализация слайдера
      // splideNavListPopupRepair.mount();

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
    if (windowClientWidth < 576) {
      //БЛОК УСЛОВИЯ РЕМОНТА - мобилка
      const splideRepairConditions = new Splide(
        ".services .services-slider.splide",
        {
          type: "loop", // зацикливание слайдера
          perPage: 1, // кол-во видимых страниц
          perMove: 1, //движение по 1 слайду
          focus: "center", // м.б. num(№ слайда) или позиционирование
          pagination: false, // наличие пагинации
        }
      );
      // инициализация слайдера
      splideRepairConditions.mount();
    }

    // ====================================================
    // СЛАЙДЕРЫ В МОДАЛЬНОМ ОКНЕ

    //БЛОК ДОГОВОР - модалка
    // const arrTransparency = document.querySelectorAll(
    //   "#transparency .transparency-slider.splide__list .transparency-item__img"
    // );

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

    // ====================================================

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
          rewind: false,
          autoWidth: false,
          perMove: 1,
          perPage: 1,
          gap: 0,
          arrows: true,
          autoplay: false,
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

    // ====================================================
    // ОСНОВНОЙ БЛОК СО СЛАЙДЕРОМ НА DESKTOP, ПО КЛИКУ ПЕРЕХОД В МОДАЛЬНОЕ ОКНО!!!
    //БЛОК ПОРТФОЛИО
    const portfolioSplider = new Splide(".portfolio-desktop.splide", {
      perMove: 1,
      pauseOnHover: true,
      autoplay: false,
      pagination: false,
      omitEnd: true,
      arrowPath:
        "M16.03 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L14.439 6l-4.242-4.243a.75.75 0 1 1 1.06-1.06L16.03 5.47zM.5 5.25h15v1.5H.5v-1.5z",
      breakpoints: {
        1024: {
          perPage: 2,
          type: "loop",
        },
        768: {
          perPage: 1,
        },
      },
    });

    portfolioSplider.on("click", function (e) {
      let pagination, count;
      const popupPortfolioSplider = new Splide(
        ".popup-portfolio-slider-wrap.splide",
        {
          type: "loop",
          perPage: 1,
          perMove: 1,
          pauseOnHover: true,
          autoplay: false,
          pagination: true,
          start: e.index,
          updateOnMove: true,
        }
      );

      popupPortfolioSplider.mount();

      let spliderPopupPortfolio = document.querySelector(
        ".popup-portfolio-slider-wrap.splide"
      );
      pagination = spliderPopupPortfolio.querySelector(".splide__pagination");
      let el = document.createElement("div");
      el.classList.add("count");
      el.textContent = pagination.childElementCount;
      pagination.append(el);

      // console.log(count);

      spliderPopupPortfolio.classList.remove("is-initialized");
    });
    // countPopupPortfolio.textContent =
    //   paginationPopupPortfolio.childElementCount;

    portfolioSplider.mount();

    // ====================================================
    // СЛАЙДЕР ОБЫКНОВЕННЫЙ

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
