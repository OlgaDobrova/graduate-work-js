export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const sussesText = `<div>Спасибо за заявку!</div><div>Наш менеджер свяжется с вами!</div>`;

  let formNameInput, formNamePhone, formCheckboxInput;

  statusBlock.classList.add("feedback__message");

  const validate = () => {
    formNameInput = form.querySelector('input[name="name"]');

    //В поля name="user_name" разрешить ввод только кириллицы и пробелов
    if (formNameInput) {
      formNameInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я\s]/gi, "");
      });
    }
  };

  const sendData = (data) => {
    return fetch(`http://localhost:4545/${formId}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    someElem.forEach((elem) => {
      formBody["form-name"] = elem.id;
    });

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData(formBody)
      .then((data) => {
        let formElements = form.querySelectorAll("input");

        form.querySelector(".feedback__body").style.display = "none";
        statusBlock.innerHTML = sussesText;

        formElements.forEach((input) => {
          input.value = "";
        });
      })
      .catch((error) => {
        form.querySelector(".feedback__body").style.display = "none";
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error(
        `Предполагается отправка данных ФОС с id="${formId}". На странице её нет. Верните в вёрстку ФОС с указанным id!`
      );
    }

    // validate();
    // let formCheckbox = form.querySelector(".checkbox");

    form.addEventListener("submit", (e) => {
      formNameInput = form.querySelector('input[name="name"]');
      formNamePhone = form.querySelector('input[name="phone"]');
      e.preventDefault();

      const user = {
        name: formNameInput ? formNameInput.value : "",
        phone: formNamePhone.value,
      };

      console.log(user);

      formCheckboxInput = form.querySelector('input[type="checkbox"]');
      if (!formCheckboxInput.checked) {
        console.log("нужна ли подсказка для checkbox");
      } else {
        submitForm();
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
