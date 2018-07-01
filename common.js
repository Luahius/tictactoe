const state = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const addText = (state) => {
  const getGameInfoBox = document.getElementsByClassName('game-info');
  const createStateBox = document.createElement('div');
  const createStateText = document.createTextNode(`Next player: ${state.xIsNext ? 'X' : 'O'}`);
  createStateBox.appendChild(createStateText);
  getGameInfoBox[0].appendChild(createStateBox);
}

const changeText = (state) => {
  const chang = document.getElementsByClassName('game-info');
  const child = chang[0].firstElementChild;
  child.innerHTML=`Next player: ${state.xIsNext ? 'X' : 'O'}`;
}

function square(e) {
  const squarePoint = document.getElementById(e.id);
  const squares = state.squares.slice();
  console.dir(squares);
  squares[e.id] = state.xIsNext ? 'X' : 'O';
  state.squares = squares,
  state.xIsNext = !state.xIsNext
  console.dir(state);
  squarePoint.textContent = squares[e.id];

  changeText(state);

}

function handleClick(e) {
  square(e);

}

(function() {
  addText(state);
  
}());

