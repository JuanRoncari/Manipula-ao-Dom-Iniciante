//Manipulando Elementos - É possivel mover elementos no dom com metodos de Node.
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); //move lista para o final de contato
contato.insertBefore(lista, titulo); //insere a lista antes de titulo
contato.removeChild(titulo); //remove titulo do contato
contato.replaceChild(lista, titulo); //substitui titulo por lista

//Novos Elementos - Podemos criar novos elementos com o metodo createElement()
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Titulo';
novoH1.classList.add('titulo');
animais.appendChild(novoH1);

//Clonar Elementos - Todo elemento selecionado é unico. Para criarmos um novo elemento baseado no anterior,é 
//necessario utilizar o metodo cloneNode().
const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
//titulo,titulo2 e novoTitulo sao iguais

const clonarTitulo = titulo.cloneNode(true);
const contato1 = document.querySelector('.contato');
contato1.appendChild(clonarTitulo);
//TRUE sinaliza para incluir os filhos