export const repairTypesContent = () => {
  const tabPanel = document.querySelector(
    ".popup-repair-types-tab .nav-list-popup-repair"
  );
  const tabContent = document.querySelector(
    ".popup-repair-types-content-table__list tbody"
  );
  const tabContentTitle = document.querySelector(
    ".popup-repair-types-content .popup-repair-types-content__head-title"
  );

  const repairTypes = (arrRepair) => {
    let arrRepairType = [];
    arrRepair.forEach((item) => {
      let consilience = false;
      if (arrRepairType.length) {
        arrRepairType.forEach((element) => {
          if (item.type == element) {
            consilience = true;
          }
        });
        if (!consilience) {
          arrRepairType.push(item.type);
        }
        consilience = false;
      } else {
        arrRepairType.push(item.type);
      }
    });

    arrRepairType.forEach((item, index) => {
      let newElem = document.createElement("button");
      newElem.classList.add("button_o");
      newElem.classList.add("popup-repair-types-nav__item");
      if (index == 0) {
        newElem.classList.add("active");
      }
      newElem.textContent = item;

      tabPanel.append(newElem);
    });
  };

  const tabs = (arrRepair, tabName) => {
    let filter = arrRepair.filter((e) => {
      return e.type == tabName;
    });

    tabContentTitle.textContent = tabName;
    tabContent.innerHTML = ``;

    filter.forEach((item) => {
      let newTrTable = document.createElement("tr");
      newTrTable.classList.add("mobile-row");
      newTrTable.classList.add("showHide");
      newTrTable.innerHTML = `
      <td class="repair-types-name">${item.name}</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
      <td class="repair-types-value">${
        item.units == "м2" ? "м<sup>2</sup>" : item.units
      }</td>
      <td class="repair-types-value">${item.cost} руб.</td>
      `;

      tabContent.append(newTrTable);
    });
  };

  const getData = (file) => {
    return fetch(file).then((response) => response.json());
  };

  // заполнение списков
  getData("./dbb/dbRepairTypes.json")
    .then((arrRepair) => {
      //Заполнение списка услуг и цен
      repairTypes(arrRepair);
      //заполнение правой части
      //первоначально...
      tabs(arrRepair, "Потолок: Демонтажные работы");
      //по клику...
      tabPanel.addEventListener("click", (e) => {
        if (e.target.closest(".nav-list-popup-repair")) {
          const tabBtn = e.target.closest(".popup-repair-types-nav__item");
          tabs(arrRepair, tabBtn.textContent);
        }
      });
    })
    .catch((error) => console.log(error));
};
