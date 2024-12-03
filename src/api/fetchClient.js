// const BASE_URL = 'https://mate.academy/students-api';
const BASE_URL = 'http://localhost:5000';

// returns a promise resolved after a given delay
function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// To have autocompletion and avoid mistypes
// type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request(url, method = 'GET', data = null) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(100)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: (url) => request(url),
  post: (url, data) => request(url, 'POST', data),
  // patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  // delete: (url: string) => request(url, 'DELETE'),
};
