function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
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

function getPosts(callback) {
  getData('https://jsonplaceholder.typicode.com/posts', function (posts) {
    callback(sortPosts(posts));
  });
}

function getComments(callback) {
  getData('https://jsonplaceholder.typicode.com/comments', function (comments) {
    callback(sortComments(comments));
  });
}

getPosts(function (posts) {
  console.log(posts);
});

getComments(function (comments) {
  console.log(comments);
});
