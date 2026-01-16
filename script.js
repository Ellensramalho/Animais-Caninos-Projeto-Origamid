const menu = document.querySelector('.menu');
console.log(menu.classList);

menu.classList.add('ativo','teste');
menu.classList.remove('azul')
menu.classList.toggle('azul');

console.log(menu.classList)

if(menu.classList.contains('azul')){
  console.log('possui a classe azul');
} else {
  console.log('não possui a classe azul');
}

const animais = document.querySelector('.animais');
console.log(animais.attributes['id'] );

const img = document.querySelector('img');
console.log(img.getAttribute('src'));