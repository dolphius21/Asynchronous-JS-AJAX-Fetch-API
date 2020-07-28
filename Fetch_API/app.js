const handleTxtErrors = (res) => {
  if (!res.ok) throw new Error(res.error);
  return res.text();
}

const handleJSONErrors = (res) => {
  if (!res.ok) throw new Error(res.error);
  return res.json();
}

// Get local text file data
const getText = () => {
  fetch('test.txt')
    .then(handleTxtErrors)
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error))
};

// Get local json data
const getJSON = () => {
  fetch('posts.json')
    .then(handleJSONErrors)
    .then(data => {
      let output = '';
      data.forEach(post => {
        output += `<p>Title: ${post.title}, Body: ${post.body}</p>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
};

// Get external API
const getAPI = () => {
  fetch('https://api.github.com/users')
    .then(handleJSONErrors)
    .then(data => {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
};

document.getElementById('button3').addEventListener('click', getAPI);
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
