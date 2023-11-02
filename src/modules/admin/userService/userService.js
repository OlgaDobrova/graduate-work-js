export class UserService {
  // method: "GET" - считывание всех данных
  getUsers() {
    return fetch("http://localhost:3535/users").then((res) => res.json());
  }

  // method: "POST" - добавление объекта данных
  addUsers(user) {
    return fetch("http://localhost:3535/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // это отправка в виде сротоки
    }).then((res) => res.json()); // это получение ответа в виде json объекта
  }

  //method: "DELETE" - удаление объекта данных
  removeUser(id) {
    return fetch(`http://localhost:3535/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
  // method: "PATCH" - изменение 1св-ва объекта данных
  changeUser(id, data) {
    return fetch(`http://localhost:3535/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // это отправка в виде сротоки
    }).then((res) => res.json());
  }

  //получение данных по указанному пользователю
  getUser(id) {
    return fetch(`http://localhost:3535/users/${id}`).then((res) => res.json());
  }

  // method: "PUT" - изменение объекта данных
  //изменение данных указанного пользователя
  editUser(id, user) {
    return fetch(`http://localhost:3535/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // это отправка в виде сротоки
    }).then((res) => res.json());
  }

  //фильтрация
  //GET запрос - чтение данных
  filterUsers(filterOption) {
    return fetch(`http://localhost:3535/users?${filterOption}=true`).then(
      (res) => res.json()
    );
  }

  //сортировка
  getSortUsers(sortOption, order) {
    return fetch(
      `http://localhost:3535/users?_sort=${sortOption.name}&_order=${sortOption.value}`
    ).then((res) => res.json());
  }
}
