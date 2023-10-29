export const maskPhone = (nameInputPhone) => {
  const arrayForm = document.querySelectorAll("form");

  const mask = (event) => {
    var keyCode;

    event.keyCode && (keyCode = event.keyCode);
    var pos = event.target.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = event.target.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) : a;
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i);
    }
    var reg = matrix
      .substr(0, event.target.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(event.target.value) ||
      event.target.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    ) {
      event.target.value = new_value;
    }
    if (event.type == "blur" && event.target.value.length < 5) {
      event.target.value = "";
    }
  };

  arrayForm.forEach((form) => {
    let inputPhone = form.querySelector(`input[name="${nameInputPhone}"]`);

    inputPhone.addEventListener("input", mask, false);
    inputPhone.addEventListener("focus", mask, false);
    inputPhone.addEventListener("blur", mask, false);
    inputPhone.addEventListener("keydown", mask, false);
  });
};
