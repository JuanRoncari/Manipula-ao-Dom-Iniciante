//Retorne no console todas as imagens do site
const mostraImg = document.querySelectorAll('img');
console.log(mostraImg);

//Retorne no console apenas as imagens que começarem com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

//Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

//Selecione o primeiro h2 dentro de .animais-descrição
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

//Selecione o ultimo p do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo[paragrafo.length -1])