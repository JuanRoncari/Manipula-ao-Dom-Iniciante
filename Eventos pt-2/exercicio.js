//Quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais
//itens caso eles possuam a mesma. previna o comportamento padrao desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) =>{
        link.classList.remove('ativo')
    })
    this.classList.toggle('ativo');
}

linksInternos.forEach((links) =>{
    links.addEventListener('click', handleLink);
});

//Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos
//estao sendo clicados
const todosElementos = document.querySelectorAll('body *');
todosElementos.forEach((elemento)=>{
    elemento.addEventListener('click',handleElemento)
});
function handleElemento(event){
    console.log(event.currentTarget);
}

//utilizando o codigo anterior, ao inves de mostrar no console, remova o elemento que esta sendo clicado, o metodo remove() remove um elemento
function handleElemento(event){
    event.currentTarget.remove();
}

//Se o usuario clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event){
    console.log(event.key)
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);

