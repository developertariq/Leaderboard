import _ from 'lodash';
import './style.css';
import sortList from './data.js';

const ul = document.getElementById('leaderboard');
const form = document.getElementById('entry-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const score = form.elements.score.value;

  ul.insertAdjacentHTML('beforeend',
    `<li class="leaderboard-item" data-score=${score}>`
        + `<span class="name">${name}</span>`
        + `<span class="score">${score}</span>`
      + '</li>');

  sortList(ul);
});
