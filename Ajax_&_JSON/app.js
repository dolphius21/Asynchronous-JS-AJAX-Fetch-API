const loadCustomer = () => {
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
};

const loadCustomers = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const customers = JSON.parse(xhr.responseText);
      let output = '';
      
      customers.forEach(customer => {
        output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;

    } else {
      console.log('Error parsing data...')
    }
  };
  xhr.send();
};

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);