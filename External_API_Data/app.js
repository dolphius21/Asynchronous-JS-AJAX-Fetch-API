const clearInput = () => {
  const number = document.getElementById('number').value = '';
}

const getJokes = (e) => {
  const number = document.getElementById('number').value;

  if (number === '') {
    alert('Please supply a number');
  } else {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        
        let output = '';
        
        if (data.type === 'success') {
          data.value.forEach(value => {
            output += `
              <li>${value.joke}</li>
            `;
          });
  
          document.getElementById('jokes').innerHTML = output;
        } else {
          output += 'Something went wrong.';
        }
        
      } else {
        console.log('Error parsing data...');
      }
    };

    clearInput();

    xhr.send();
  }

  e.preventDefault();
};

document.getElementById('get-jokes').addEventListener('click', getJokes);