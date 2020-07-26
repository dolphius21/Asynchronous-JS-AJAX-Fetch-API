const loadData = () => {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${xhr.responseText}</h1>`;
    }
  };

  xhr.onerror = () => {
    console.log('Request error...')
  };

  xhr.send();
};

document.getElementById('button').addEventListener('click', loadData);

