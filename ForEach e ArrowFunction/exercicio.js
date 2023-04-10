//Mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item,index,array)=>{
    console.log(item);
});

//Mostre o texto dos paragrafos no console
paragrafos.forEach((item,index,array)=>{
    console.log(item.innerText);
});

//Como corrigir os erros abaixo:
const imgs4 = document.querySelectorAll('img');
imgs4.forEach((item,index,array)=>{
    console.log(item);
});

let i = 0;
imgs4.forEach(()=>{
    console.log(i++);
});

imgs4.forEach(() => i++); 