async function getData(url) {
  var response = await fetch(url);
  return await response.json();
}

function sortPosts(posts) {
  return posts.sort(function (a, b) {
    return b.title.length - a.title.length;
  });
}

function sortComments(comments) {
  return comments.sort(function (a, b) {
    return a.name.localeCompare(b.name);
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

async function getPosts() {
  var posts = await getData('https://jsonplaceholder.typicode.com/posts');
  return sortPosts(posts);
}

async function getComments() {
  var comments = await getData('https://jsonplaceholder.typicode.com/comments');
  return sortComments(comments);
}

async function getUsers() {
  var users = await getData('https://jsonplaceholder.typicode.com/users');
  return cutUsers(users);
}

async function getTodos() {
  var todos = await getData('https://jsonplaceholder.typicode.com/todos');
  return filterTodos(todos);
}

async function main() {
  console.log(await getPosts());
  console.log(await getComments());
  console.log(await getUsers());
  console.log(await getTodos());
}

main();
