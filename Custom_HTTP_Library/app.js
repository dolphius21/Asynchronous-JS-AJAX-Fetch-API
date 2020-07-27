const http = new EasyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', (error, posts) => {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});

// Get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', (error, post) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});


const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Post data
http.post('https://jsonplaceholder.typicode.com/posts', data, (error, post) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});


// Put data to the post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (error, post) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
})

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
