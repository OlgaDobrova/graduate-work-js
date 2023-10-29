import { headerPhone } from "./modules/headerPhone";
import { menu } from "./modules/menu";
import { popupToggle } from "./modules/popupToggle";
import { sendForm } from "./modules/sendForm";
import { maskPhone } from "./modules/maskPhone";
// import { messageFeedbackService } from "./modules/messageFeedbackService";

// window.messageFeedbackService = new MessageFeedbackService();

// messageFeedbackService.getMessageFeedback().then((data) => {
//   console.log(data);
// });

headerPhone();
menu();
popupToggle();
maskPhone("phone"); //значение атрибута name для input, в котором нужна маска
sendForm({
  formId: "feedback1",
  someElem: [{ id: "БАННЕР. Консультация от специалиста в удобное время" }],
});
sendForm({
  formId: "feedback2",
  someElem: [
    {
      id: "Блок МЕЧТА. Обсудите проект со специалистом или вызовите замерщика",
    },
  ],
});
sendForm({
  formId: "feedback3",
  someElem: [{ id: "Блок АКЦИЯ. Консультация от специалиста в удобное время" }],
});
sendForm({
  formId: "feedback4",
  someElem: [
    {
      id: "Блок РАСЧЕТ. Обсудите проект со специалистом или вызовите замерщика",
    },
  ],
});
sendForm({
  formId: "feedback5",
  someElem: [
    {
      id: "Блок ОТВЕТ. Обсудите проект со специалистом или вызовите замерщика",
    },
  ],
});
