let paletaCores = document.getElementsByClassName('color');
let cores = ['black', 'red', 'blue', 'green'];

for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].style.backgroundColor = cores[i];
}


let getpixelBord = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
    let createPixel = document.createElement('div');
    createPixel.className = 'pixel'
    getpixelBord.appendChild(createPixel);
}

window.onload = function() {
    paletaCores[0].className = 'color selected';
}

function mudaSelectCor() {
    for (let i = 0; i < paletaCores.length; i += 1){
        if (paletaCores[i].className === 'color selected') {
            paletaCores[i].className = 'color';
        }
    }
}

for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener('click', mudaSelectCor); 
}