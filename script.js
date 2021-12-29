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

let selecBody = document.getElementsByTagName('body');
let buttonClear = document.createElement('button');
buttonClear.innerText = 'Limpar';
buttonClear.id = 'clear-board';
selecBody[0].appendChild(buttonClear);

function clearColor () {
    for(i = 0; i < getPixel.length; i += 1){
        getPixel[i].style.backgroundColor = 'white';
    }
}

buttonClear.addEventListener('click', clearColor);

const getPixel = document.getElementsByClassName('pixel');
const getSelectColor = document.getElementsByClassName('selected');

getPixel[0].addEventListener('click', function () {
    getPixel[0].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[1].addEventListener('click', function () {
    getPixel[1].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[2].addEventListener('click', function () {
    getPixel[2].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[3].addEventListener('click', function () {
    getPixel[3].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[4].addEventListener('click', function () {
    getPixel[4].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[5].addEventListener('click', function () {
    getPixel[5].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[6].addEventListener('click', function () {
    getPixel[6].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[7].addEventListener('click', function () {
    getPixel[7].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[8].addEventListener('click', function () {
    getPixel[8].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[9].addEventListener('click', function () {
    getPixel[9].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[10].addEventListener('click', function () {
    getPixel[10].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[11].addEventListener('click', function () {
    getPixel[11].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[12].addEventListener('click', function () {
    getPixel[12].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[13].addEventListener('click', function () {
    getPixel[13].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[14].addEventListener('click', function () {
    getPixel[14].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[15].addEventListener('click', function () {
    getPixel[15].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[16].addEventListener('click', function () {
    getPixel[16].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[17].addEventListener('click', function () {
    getPixel[17].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[18].addEventListener('click', function () {
    getPixel[18].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[19].addEventListener('click', function () {
    getPixel[19].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[20].addEventListener('click', function () {
    getPixel[20].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[21].addEventListener('click', function () {
    getPixel[21].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[22].addEventListener('click', function () {
    getPixel[22].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[23].addEventListener('click', function () {
    getPixel[23].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});
getPixel[24].addEventListener('click', function () {
    getPixel[24].style.backgroundColor = getSelectColor[0].style.backgroundColor;
});