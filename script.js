const paletaCores = document.getElementsByClassName('color');
const cores = ['black', 'red', 'blue', 'green'];
let i = 0;

for (i = 0; i < paletaCores.length; i += 1) {
  paletaCores[i].style.backgroundColor = cores[i];
}

const getPixelBord = document.getElementById('pixel-board');

for (i = 0; i < 25; i += 1) {
  const createPixel = document.createElement('div');
  createPixel.className = 'pixel';
  getPixelBord.appendChild(createPixel);
}
window.onload = function () {
  paletaCores[0].className = 'color selected';
};

paletaCores[0].addEventListener('click', function () {
  for (i = 0; i < paletaCores.length; i += 1){
    paletaCores[i].className = 'color';
  }
  if (paletaCores[0].className !== 'color selected') {
    paletaCores[0].classList.add('selected');
  }
});

paletaCores[1].addEventListener('click', function () {
  for (i = 0; i < paletaCores.length; i += 1){
    paletaCores[i].className = 'color';
  }
  if (paletaCores[1].className !== 'color selected') {
    paletaCores[1].classList.add('selected');
  }
});

paletaCores[2].addEventListener('click', function () {
  for (i = 0; i < paletaCores.length; i += 1){
    paletaCores[i].className = 'color';
  }
  if (paletaCores[2].className !== 'color selected') {
    paletaCores[2].classList.add('selected');
  }
});

paletaCores[3].addEventListener('click', function () {
  for (i = 0; i < paletaCores.length; i += 1){
    paletaCores[i].className = 'color';
  }
  if (paletaCores[3].className !== 'color selected') {
    paletaCores[3].classList.add('selected');
  }
});

const selecBody = document.getElementsByTagName('body');
const buttonClear = document.createElement('button');
buttonClear.innerText = 'Limpar';
buttonClear.id = 'clear-board';
selecBody[0].appendChild(buttonClear);

function clearColor() {
  for (i = 0; i < getPixel.length; i += 1) {
    getPixel[i].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearColor);

const getPixel = document.getElementsByClassName('pixel');
const getSelectColor = document.getElementsByClassName('selected');

for (i = 0; i < getPixel.length; i += 1) {
  getPixel[i].addEventListener('click', colorPixel);
}

function colorPixel(event) {
  for(i = 0; i < getPixel.length; i += 1){
    event.target.style.backgroundColor = getSelectColor[0].style.backgroundColor;
  }
}

const createBoard = document.createElement('input');
createBoard.id = 'board-size';
selecBody[0].appendChild(createBoard);
createBoard.type = 'number';
createBoard.min = 1;

const createButtonInput = document.createElement('button');
createButtonInput.id = 'generate-board';
createButtonInput.innerText = 'VQV';
selecBody[0].appendChild(createButtonInput);

createButtonInput.addEventListener('click', newBoard);

function newBoard() {
  for (i = getPixel.length - 1; i >= 0; i -= 1) {
    getPixel[i].remove();
  }
  if (createBoard.value > 50) {
    createBoard.value = 50;
  }
  if (createBoard.value < 5) {
    createBoard.value = 5;
  }
  for (i = 0; i < createBoard.value * createBoard.value; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    getPixelBord.appendChild(createPixel);
  }
  for (i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click', colorPixel);
  }
}