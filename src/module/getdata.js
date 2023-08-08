const getData = () => {
  const refresh = document.querySelector('.refresh');
  refresh.addEventListener('click', async () => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cf3Cr4pDGiMnG7DbId9H/scores/')
      .then((response) => response.json())
      .then((json) => {
        document.querySelector('ul').innerHTML = '';
        json.result.forEach((user) => {
          document.querySelector('ul').innerHTML += ` <li><span>${user.user} </span>: <span>${user.score}</span></li> `;
        });
      });
  });
};

export default getData;