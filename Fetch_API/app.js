// Get local text file data
const getText = () => {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error))
};

// Get local json data
const getJSON = () => {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(post => {
        output += `<p>Title: ${post.title}, Body: ${post.body}</p>`
      });
      document.getElementById('output').innerHTML = output;
    })
};

// Get external API
const getAPI = () => {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
};

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);