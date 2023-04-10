//outerHTML,innerHTML e innerTEXT - Propriedades que retornam uma string contendo o html ou texto, É possivel
//atribuir um novo valor para as mesmas element.innerTEXT = 'novo Texto'.
const menu = document.querySelector('.menu');
const animaislista = document.querySelector('h1');
menu.outerHTML; //todo o html do elemento
menu.innerHTML; //html interno, altera todo o conteudo dentro
menu.innerText; //texto sem tags
menu.innerText = '<p>Texto</p>'; //a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; //a tag é renderizada
console.log(animaislista.innerText);

//Transversing - como navegar pelo DOM, utilizando suas propriedades e metodos
const lista = document.querySelector('.animais-lista');
lista.parentElement; // pai
lista.parentElement.parentElement; //pai do pai
lista.previousElementSibling; //Elemento acima ou pagina de cima
lista.nextElementSibling; //elemento abaixo ou proximo da pagina

lista.children; //HTMLCollection com os filhos
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; //Ultimo filho

lista.querySelectorAll('li');//todas as LI's
lista.querySelector('li:last-child'); //ultimo filho

//element vs node - Element's representam um elemento html, ou seja,uma tag.Node representa um nó, e pode ser
//um elemento(element), texto, comentario, quebra de linha e mais.
const lista1 = document.querySelector('.animais-lista');
lista1.previousElementSibling; //elemento acima
lista1.previousSibling; //node acima

lista1.firstChild; //primeiro node child
lista1.childNodes; //todos os node
//Geralmente estamos atras de um elemento e nao de qualquer node em si.