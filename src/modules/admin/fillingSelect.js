export const fillingSelect = () => {
  repairService.getRepairs().then((repairs) => {
    const select = document.getElementById("typeItem");
    let newRepairs = [];
    repairs.forEach((item) => {
      let consilience = false;
      if (newRepairs.length) {
        newRepairs.forEach((element) => {
          if (item.type == element) {
            consilience = true;
          }
        });
        if (!consilience) {
          newRepairs.push(item.type);
        }
        consilience = false;
      } else {
        newRepairs.push(item.type);
      }
    });

    if (!select) {
      return;
    }

    select.innerHTML = `<option value="Все услуги">Все услуги</option>`;

    newRepairs.forEach((item, index) => {
      let newElem = document.createElement("option");
      newElem.value = item;
      newElem.textContent = item;

      select.append(newElem);
    });
  });
};
