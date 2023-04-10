//Adicione a classe ativo em todos os items do menu
const ativos = document.querySelectorAll('.menu a');
ativos.forEach((item)=>{
    item.classList.add('ativo');
});

//Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ativos.forEach((item)=>{
    item.classList.remove('ativo');
});
ativos[0].classList.add('ativo');

//Verifique se todas as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((item)=>{
   const possuiAtributo = item.hasAttribute('alt');
   console.log(item, possuiAtributo);
});

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href','https://www.google.com');
console.log(link);