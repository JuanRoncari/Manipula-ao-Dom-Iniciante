//addEventListener - Adiciona uma funçao ao elemento, esta chamada de callback,que será ativada assim que certo
//evento ocorrer neste elemento.
const img = document.querySelector('img');
  //elemento.addEventListener(event, callback, options).
  //img.addEventListener('click',() =>{
    //console.log('clicou');
  //});
//o Terceiro parametro é opcional.


//Callback - É boa pratica separar a funçao de callback do addEventListener, ou seja, declarar uma funçao ao inves
//de passar diretamente uma função anonima
function callback(){
    console.log('clicou');
};
img.addEventListener('click', callback);


//Event - O primeiro parametro do callback é referente ao evento que ocorreu.
function callback(event){
    console.log(event);
};
img.addEventListener('click', callback);


//Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');
function executarCallback(event){
    const currentTarget = event.currentTarget; //this
    const target = event.target; //onde o clique ocorreu
    const type = event.type; //tipo de evento
    const path = event.path;
    console.log(currentTarget,target,type,path);
};

animaisLista.addEventListener('click', executarCallback);


//event.preventDefault() - Previne o comportamento padrao do evento no browser. No caso de um link externo.
//por exemplo, ira prevenir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event){
    event.preventDefault();
    console.log(event.currentTarget.href);
};
linkExterno.addEventListener('click', clickNoLink);


//This - pode fazer referencia a diferentes objetos dependendo do contexto. no caso de eventos, ela fara referencia
//ao elemento em que addEventListener foi adicionado.
const img1 = document.querySelector('img');
function callback(event){
    console.log(this); //retorna a imagem
    console.log(this.getAttribute('src'));
};
img1.addEventListener('click', callback);
//Geralmente This é igual ao event.currentTarget


//Diferentes Eventos - Existem diversos eventos como click,scroll,resize,keydown,keyup,mouseenter e mais.
//Eventos podem ser adicionados, como o window e document tambem.
const h1 = document.querySelector('h1');
function callback(event){
    console.log(event.type, event);
};

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('mousemove', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);

//KeyBoard - Voce pode adicionar atalhos para faciliar a navegação no seu site, atraves de eventos KeyBoard.
function handleKeyBoard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    }
}
window.addEventListener('keydowm', handleKeyBoard);
