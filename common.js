const state = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const handleState = (state) => {
  const getGameInfoBox = document.getElementsByClassName('game-info')[0];
  const statusMessage = `Next player: ${state.xIsNext ? 'X' : 'O'}`;

  return {
    addText: () => {
      const createStateBox = document.createElement('div');
      const createStateText = document.createTextNode(statusMessage);
      createStateBox.appendChild(createStateText);
      getGameInfoBox.appendChild(createStateBox);

    },
    changeText: () => {
      const changePlace = getGameInfoBox.firstElementChild;
      changePlace.innerHTML=statusMessage;
    }
  }
}

function square(e) {
  const squarePoint = document.getElementById(e.id);
  const squares = state.squares.slice();
  squares[e.id] = state.xIsNext ? 'X' : 'O';
  state.squares = squares,
  state.xIsNext = !state.xIsNext
  squarePoint.textContent = squares[e.id];

  handleState(state).changeText();

}

function handleClick(e) {
  square(e);

}

(function() { handleState(state).addText(); }());

