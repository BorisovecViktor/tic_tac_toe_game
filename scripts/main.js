'use strict';

const area = document.querySelector('.area');
let player = 'x';

for (let i = 0; i < 9; i++) {
  area.innerHTML += `
  <div class="cell"></div>
  `;
}

area.addEventListener('click', e => {
  if (!e.target.innerHTML) {
    e.target.innerHTML = player;
  } else {
    alert('Эта ячейка уже занята');

    return;
  }

  check();
});

const check = () => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cells = document.querySelectorAll('.cell');
  const modal = document.querySelector('.modal');
  const modalText = document.querySelector('.modal__text');
  const overlay = document.querySelector('.overlay');
  let draw = true;

  for (let i = 0; i < win.length; i++) {
    if (cells[win[i][0]].innerHTML === 'x'
      && cells[win[i][1]].innerHTML === 'x'
      && cells[win[i][2]].innerHTML === 'x') {
      modalText.textContent = `Выиграли: ${player}`;
      modal.classList.add('modal--active');
      overlay.classList.add('overlay--active');

      return;
    }

    if (cells[win[i][0]].innerHTML === 'o'
      && cells[win[i][1]].innerHTML === 'o'
      && cells[win[i][2]].innerHTML === 'o') {
      modalText.textContent = `Выиграли: ${player}`;
      modal.classList.add('modal--active');
      overlay.classList.add('overlay--active');

      return;
    }
  }

  cells.forEach(item => {
    if (item.innerHTML === '') {
      draw = false;
    }
  });

  if (draw) {
    modalText.textContent = 'Ничья';
    modal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  }

  player = player === 'x' ? 'o' : 'x';
};

const restartGame = document.querySelector('.modal__button');

restartGame.addEventListener('click', () => {
  location.reload();
});
