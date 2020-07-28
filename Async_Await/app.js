const myFunc = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  })
  const error = false;

  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong!'))
  }

  
};

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err))


const getUsers = async (url) => {
  const response = await fetch(url);

  const data = await response.json();

  return data;
};

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data));