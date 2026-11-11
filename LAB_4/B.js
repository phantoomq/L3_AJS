function getData(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function cutUsers(users) {
  return users.map(function (user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    };
  });
}

function filterTodos(todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
}

function getUsers() {
  return getData('https://jsonplaceholder.typicode.com/users').then(cutUsers);
}

function getTodos() {
  return getData('https://jsonplaceholder.typicode.com/todos').then(filterTodos);
}

getUsers().then(function (users) {
  console.log(users);
});

getTodos().then(function (todos) {
  console.log(todos);
});
