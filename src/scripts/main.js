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

  player = player === 'x' ? 'o' : 'x';
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
  let draw = true;

  for (let i = 0; i < win.length; i++) {
    if (cells[win[i][0]].innerHTML === 'x'
      && cells[win[i][1]].innerHTML === 'x'
      && cells[win[i][2]].innerHTML === 'x') {
      alert('Выиграли: Крестики');
      location.reload();

      return;
    }

    if (cells[win[i][0]].innerHTML === 'o'
      && cells[win[i][1]].innerHTML === 'o'
      && cells[win[i][2]].innerHTML === 'o') {
      alert('Выиграли: Нолики');
      location.reload();

      return;
    }

    if (cells[i].innerHTML === '') {
      draw = false;
    }
  }

  if (draw) {
    alert('Ничья');
    location.reload();
  }
};
