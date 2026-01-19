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
}
  animaisLista.addEventListener('click', callback3);
