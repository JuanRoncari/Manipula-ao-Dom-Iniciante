//ClassList - Retorna uma lista com as classes do elemento. Permite adicionar,remover e verificar se contem.
const menu = document.querySelector('.menu');
console.log(menu);

menu.className; //String
menu.classList; //Lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo','mobile'); //Adiciona 2 classes
menu.classList.remove('ativo'); //Remove a classe ativo
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo','inativo'); //Substitui a classe ativo para inativo

//Atributes - Retorna uma array-like com os atributos do elemento.
const animais = docuent.querySelector('.animais');
animais.attributes; //Retorna todos os atributos
animais.attributes[0]; //Retorna o primeiro atributo

//GetAttribute e setAttribute - Metodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
img.getAttribute('src');//valor do src
img.setAttribute('alt','Texto alternativo');//Muda o alt
img.hasAttribute('id');//true/false
img.removeAttribute('alt'); //remove o alt
img.hasAttribute(); //true /false se tem algum atributo
//é muito comum metodos de get e set;

//ReadOnly vs Writable - Existem propriedades que nao permitem a mudança de seus valores, essas sao consideradas
//ReadOnly, ou seja, apenas leitura.
const animais1 = document.querySelector('.animais');
animais.className; //String com o nome das classes
animais.className = 'azul'; //Substitui completamente a string
animais.className += ' vermelho'; //adiciona vermelho a string
animais.attributes = 'class="ativo"'; //ReadOnly nao funciona...
//Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''