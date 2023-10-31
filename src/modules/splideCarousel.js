import Splide from "@splidejs/splide";

export const splideCarousel = () => {
  document.addEventListener("DOMContentLoaded", function () {
    Splide.defaults = {
      perPage: 1,
      perMove: 1,
      focus: "center",
      pauseOnHover: true,
      autoplay: true,
    };
    window.addEventListener("resize", () => {
      const windowClientWidth = document.documentElement.clientWidth;

      if (windowClientWidth < 1024) {
        const splideSliderFormula = new Splide("#formula .splide", {
          type: "loop",
          direction: "ltr",
          perPage: 3,
          perMove: 1,
          focus: "center",
          pauseOnHover: true,
          autoplay: true,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
              gap: ".7rem",
            },
          },
        });

        splideSliderFormula.mount();
      }
    });

    //блок repair-types
    //основной
    const repairTypesSliderSplide = new Splide(".repair-types-slider.splide", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
      autoplay: false,
    });
    //миниатюры
    const repairTypesTabSplide = new Splide(".repair-types-tab.splide", {
      fixedWidth: 300,
      gap: 10,
      rewind: true,
      pagination: false,
      focus: "center",
      arrows: false,
      isNavigation: true,
      autoplay: false,
      breakpoints: {
        1024: {
          fixedWidth: "",
          type: "loop",
          gap: 0,
          arrows: true,
          autoplay: false,
          focus: "center",
          rewind: false,
        },
      },
    });
    //связь слайдеров
    repairTypesSliderSplide.sync(repairTypesTabSplide);
    //запуск слайдеров
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
        pagination: true,
        arrows: false,
        pauseOnHover: true,
      }).mount();

      pagination = splide.querySelector(".splide__pagination");
      count = pagination.querySelector(".count");
      count.textContent = `/ ${pagination.childElementCount - 1}`;
    });
  });
};
