const headerPhone = () => {
  const headerContactsArrow = document.querySelector(".header-contacts__arrow");
  const headerContactsPhoneNumberAccord = document.querySelector(
    ".header-contacts__phone-number-accord"
  );

  headerContactsArrow.addEventListener("click", () => {
    headerContactsPhoneNumberAccord.classList.toggle("open");
  });
};
export default headerPhone;
