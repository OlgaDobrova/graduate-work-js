import { headerPhone } from "./modules/headerPhone";
import { menu } from "./modules/menu";
import { accordion } from "./modules/accordion";
import { popupToggle } from "./modules/popupToggle";
import { maskPhone } from "./modules/maskPhone";
import { sendForm } from "./modules/sendForm";
import { repairTypesContent } from "./modules/repairTypesContent";

headerPhone();
menu();
accordion();
popupToggle();
maskPhone("phone"); //значение атрибута name для input, в котором нужна маска
repairTypesContent();

sendForm({
  formId: "feedback1",
  someElem: [{ id: "БАННЕР" }],
});
sendForm({
  formId: "feedback2",
  someElem: [
    {
      id: "Блок МЕЧТА",
    },
  ],
});
sendForm({
  formId: "feedback3",
  someElem: [{ id: "Блок АКЦИЯ" }],
});
sendForm({
  formId: "feedback4",
  someElem: [
    {
      id: "Блок РАСЧЕТ",
    },
  ],
});
sendForm({
  formId: "feedback5",
  someElem: [
    {
      id: "Блок ОТВЕТ",
    },
  ],
});
sendForm({
  formId: "feedback6",
  someElem: [
    {
      id: "Блок КОНСУЛЬТАЦИЯ.",
    },
  ],
});
