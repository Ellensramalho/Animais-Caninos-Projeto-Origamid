const img = document.querySelector('img');

function callback(){
  console.log('clicou');
}
img.addEventListener('click', callback);

function callback2(e){
  console.log(e);
}
img.addEventListener('click', callback2);

const animaisLista = document.querySelector('.animais-lista');
function callback3(e){
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e.type); 
  console.log(this);
}
  animaisLista.addEventListener('click', callback3);

const h1 = document.querySelector('h1');

function handleEvent(e){
  console.log(e.type, e);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mouseout', handleEvent);
h1.addEventListener('mousemove', handleEvent);
window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
