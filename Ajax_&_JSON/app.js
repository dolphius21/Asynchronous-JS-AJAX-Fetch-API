const loadCustomer = (e) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const customer = JSON.parse(xhr.responseText);
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    } else {
      console.log('Error parsing data...')
    }
  };
  xhr.send();
}

document.getElementById('button1').addEventListener('click', loadCustomer);