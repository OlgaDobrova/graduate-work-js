import Splide from "@splidejs/splide";

export const splideCarousel = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let portfolioSpliderActive;

    Splide.defaults = {
      direction: "ltr", //направление: слева направо
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
      perPage: 1,
      rewind: true,
      pagination: false,
      arrows: false,
      autoplay: false,
    });
    //миниатюры
    const repairTypesTabSplide = new Splide(".repair-types-tab.splide", {
      autoWidth: true,
      gap: 10,
      rewind: true,
      pagination: false,
      focus: "center",
      arrows: false,
      isNavigation: true,
      autoplay: false,
      breakpoints: {
        1024: {
          updateOnMove: true,
          isNavigation: true,
          focus: "is-active",
          cloneStatus: false,
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
        perPage: 1,
        pagination: true,
        arrows: false,
        pauseOnHover: true,
      }).mount();

      pagination = splide.querySelector(".splide__pagination");
      count = pagination.querySelector(".count");
      count.textContent = `/ ${pagination.childElementCount - 1}`;
    });

    //
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

    // document.querySelector(
    //   ".popup-portfolio-slider-wrap.splide.is-initialized"
    // ).style.visibility = "hidden !important";
  });
};
