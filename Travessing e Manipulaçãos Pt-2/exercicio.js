//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

//Selecione o primeiro dt da dl de faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

///Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

//Substitua o conteudo html de .faq pelo de .animais
const animais1 = document.querySelector('.animais');
faq.innerHTML = animais1.innerHTML