//ForEach e Eventos - O metodo addEventListener é adicionado á um unico elemento. entao é necessario um loop
//entre elementos de uma lista,para adicionarmos a cada um deles.
const imgs = document.querySelectorAll('img');

function imgsrc(event){
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
};

imgs.forEach((img)=>{
    img.addEventListener('click', imgsrc);
})
    
