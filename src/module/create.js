fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'My cool new game',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
