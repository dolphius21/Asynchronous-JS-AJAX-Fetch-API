class EasyHTTP {
  constructor () {
    this.http = new XMLHttpRequest();
  }
  // Make an HTTP GET Request
  get(url, callback) {
    this.http.open('GET', url);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback('Error: ' + this.http.status);
      }
    };

    this.http.send();
  }
  // Make an HTTP POST Request
  post(url, data, callback) {
    this.http.open('POST', url);

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
      callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
  }

  // Make an HTTP PUT Request
  put(url, data, callback) {
    this.http.open('PUT', url);

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
      callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
  }

  // Make an HTTP DELETE Request
  delete(url, callback) {
    this.http.open('DELETE', url);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, 'Post deleted!');
      } else {
        callback('Error: ' + this.http.status);
      }
    };

    this.http.send();
  }
}

