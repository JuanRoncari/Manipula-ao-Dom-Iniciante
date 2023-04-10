//ID - GetElementById seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animaisSection = document.getElementById('animais');
console.log(animaisSection);
const contatoSection = document.getElementById('contato');
//Retorna Null caso nao exista
const naoExiste = document.getElementById('teste');


//CLASSE E TAG - GetElementByClassName e GetElementByTagName - selecionam e retornam uma lista de elemento no DOOM

//Seleciona pela classe, retorna uma HTMLcollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
const gridContato = document.getElementsByClassName('grid-section contato');
console.log(gridContato);

//Selececiona todas as UL's, retorna um HTMLcollection
const ul = document.getElementsByTagName('ul');
console.log(ul);

//Retorna o primeiro elemento
console.log(gridSection[0]);


//SELETOR GERAL ÚNICO - QuerySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

//Busca dentro do UL apenas
const navItem = primeiroUl.querySelector('li');


//Seletor geral lista - retorna todos os elementos compativeis com o seletor CSS em uma nodelist
const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

//retorna o segundo elemento
console.log(gridSection[1]);
//Diferente do getElementsByClassName, a lista aqui é estatica
