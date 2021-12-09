const paletaCores = document.getElementsByClassName('color');
const cores = ['black', 'red', 'blue', 'green'];
let i = 0;

for (i = 0; i < paletaCores.length; i += 1) {
  paletaCores[i].style.backgroundColor = cores[i];
}

const getpixelBord = document.getElementById('pixel-board');

for (i = 0; i < 25; i += 1) {
  const createPixel = document.createElement('div');
  createPixel.className = 'pixel';
  getpixelBord.appendChild(createPixel);
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