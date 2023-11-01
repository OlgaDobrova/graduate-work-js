import { handleElement } from "./helpers";

export const accordion = () => {
  const listLiAccordion = document.querySelectorAll("#faq .accordion li");

  listLiAccordion.forEach((item) => {
    // let itemH2 = item.querySelector("h2");
    // itemH2.classList.remove("msg-active");

    item.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("title_block") &&
        e.target.classList.contains("msg-active")
      ) {
        listLiAccordion.forEach((item2) => {
          item2.querySelector("h2").classList.remove("msg-active");
        });
      } else if (
        e.target.classList.contains("title_block") &&
        !e.target.classList.contains("msg-active")
      ) {
        listLiAccordion.forEach((item2) => {
          item2.querySelector("h2").classList.remove("msg-active");
        });
        e.target.classList.toggle("msg-active");
      }
    });
  });
};
