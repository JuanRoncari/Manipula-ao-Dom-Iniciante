//ForEach - constantimente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos
//é utilizando o metodo FOREACH.
const imgs = document.querySelectorAll('img');
imgs.forEach(function(item,index,array){
    console.log(item);
});

//Parametros do Foreach - O primeiro parametro é o callback, ou seja, a funçao que sera ativada a cada item,
//Essa funçao pode receber tres parametros:ValorAtual,index e Array;
const imgs1 = document.querySelectorAll('img');
imgs1.forEach(function(ValorAtual,index,array){
    console.log(ValorAtual);//Valor Atual
    console.log(index);//o numero do index
    console.log(array);//a array completa
});

//ForEach e Array - é um metodo de array, alguns objetos array-like possuem esse metodo, caso nao possua,
//o ideal é transforma-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item,index,array){
    console.log(item);
})

//Arrow Function - Sintaxe curta em relação a function expression, Basta remover a palavra function e adicionar
//a fat arrow => apos os argumentos
const imgs2 = document.querySelectorAll('img');
imgs2.forEach((item) => {
    console.log(item);
})