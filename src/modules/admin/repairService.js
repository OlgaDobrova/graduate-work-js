export class RepairService {
  // method: "GET" - считывание всех данных
  getRepairs() {
    return fetch("http://localhost:4545/repairTypes").then((res) => res.json());
  }

  // method: "POST" - добавление объекта данных
  addRepairs(repair) {
    return fetch("http://localhost:4545/repairTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(repair), // это отправка в виде сротоки
    }).then((res) => res.json()); // это получение ответа в виде json объекта
  }

  //method: "DELETE" - удаление объекта данных
  removeRepair(id) {
    return fetch(`http://localhost:4545/repairTypes/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  //получение данных по указанной работе
  getRepair(id) {
    return fetch(`http://localhost:4545/repairTypes/${id}`).then((res) =>
      res.json()
    );
  }

  // method: "PUT" - изменение объекта данных
  //изменение данных указанного пользователя
  editRepair(id, repair) {
    return fetch(`http://localhost:4545/repairTypes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(repair), // это отправка в виде сротоки
    }).then((res) => res.json());
  }

  //фильтрация
  //GET запрос - чтение данных
  filterRepairs(filterOption) {
    return fetch(`http://localhost:4545/repairTypes?type=${filterOption}`).then(
      (res) => res.json()
    );
  }

  //сортировка
  getSortRepairs(sortOption, order) {
    return fetch(
      `http://localhost:4545/repairTypes?_sort=${sortOption.name}&_order=${sortOption.value}`
    ).then((res) => res.json());
  }
}
