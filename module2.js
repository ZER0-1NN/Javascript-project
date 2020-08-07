// 1° exercício
var buttonElement = document.querySelector('#button');
var divElement = document.querySelector('#app');
const ids = []

buttonElement.onclick = () => {
    var boxElement = document.createElement('div');

    boxElement.style.margin = '2%';
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#F00';
    
    boxElement.onmouseover = () => (boxElement.style.backgroundColor = getRandomColor())

    divElement.appendChild(boxElement);
}

// 2° exercício
const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3° exercício
var nomes = ["Diego", "Gabriel", "Lucas"];

const renderLista = () => {
    let divElement = document.querySelector('#div-list');
    let listElement = document.querySelector('#list');
    
    listElement.innerHTML = '';

    for (var nome of nomes) {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(nome);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }

    divElement.appendChild(listElement);
}

renderLista();

// 4° exercício
const addUser = () => {
    let inputElement = document.querySelector('#nome');
    let text = inputElement.value;

    if (text.length > 0) {
        inputElement.value = '';
        nomes.push(text);
        renderLista();
    } else {
        alert('O campo de texto está vazio');
    }
}
