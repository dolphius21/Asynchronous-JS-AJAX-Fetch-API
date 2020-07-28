const getText = () => {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(error => console.log(error))
};

document.getElementById('button1').addEventListener('click', getText);