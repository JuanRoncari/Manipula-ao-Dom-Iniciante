//Verifique a distancia da primeira imagem em relaçao ao topo da pagina
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens
function somarImgs(){
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((item)=>{
    soma +=item.offsetWidth;
    console.log(soma);
})
};
window.onload = function(){
    somarImgs();
};

//Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo.(48px de acordo com o google).
const links = document.querySelectorAll('a');
links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link,' Possui acessibilidade');
    }else{
        console.log(link,'Nao possui boa acessibilidade');
    };
});

//Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const broserSmall = window.matchMedia('(max-width: 720px)').matches;
if(broserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}