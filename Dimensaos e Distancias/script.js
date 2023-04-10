//Height e Width - Estas são propriedades e metodos dos objetos Element e HTMLElement, a maioria delas sao readOnly.
const section = document.querySelector('.animais-lista');
section.clientHeight; //Height + padding
section.offsetHeight; //Height + padding + border
section.scrollHeight; //height total, mesmo dentro do scroll
//Mesma coisa para width,clientWidth

//offsetTop e offsetLeft 
//Distancia entre o topo do elemento e o topo da pagina
section.offsetTop;

//Distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
section.offsetLeft;

//getBoundingClientRect() - Metodo que retorna um objeto com valores de width,height,distancias do elemento e mais
const section1 = document.querySelector('.animais');
const rect = section1.getBoundingClientRect();
rect.height;//heigth do elemento
rect.width;//width do elemento
rect.top; //distancia entre o topo do elemento e o scroll

//window
window.innerWidth//width da janela
window.outerWidth//soma dev tools tambem
window.innerHeight//height da janela
window.outerWidth//soma a barra do endereco

window.pageYOffset;//distancia total do scroll horizontal
window.pageXOffset;//distancia total do scroll vertical

if(window.innerWidth < 600){
    console.log('Tela menor que 600px');
};

//MatchMedia - Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
if(small.matches){
    console.log('Tela menor que 600px');
}else{
    console.log('Tela maior que 600px');
};