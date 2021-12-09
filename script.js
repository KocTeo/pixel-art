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