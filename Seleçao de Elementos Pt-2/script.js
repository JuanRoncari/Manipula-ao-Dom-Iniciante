//HTMLCollection vs NodeList - A diferença esta nos metodos e propriedades de ambas.Além disso a NodeList retornada
//com queryselectorAll é estatica.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');
console.log(gridSectionHTML); //4 itens
console.log(gridSectionNode); //3 itens


//Array-like - HTMLCollection e NodeList sao array-like, parecem uma array mas não são. o metodo de array
//foreach() por exemplo, existe apenas em NodeList.
const gridSection = document.querySelectorAll('.grid-section');
gridSection.forEach(function(gridItem,index,array){
    gridItem.classList.add('azul');
    console.log(index);//index do item array
    console.log(array);//a array completa
});
//É possivel transformar array-like em uma array real,utilizando o metodo array.from(grid-section).