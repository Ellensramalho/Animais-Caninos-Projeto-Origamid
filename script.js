const h1 = document.querySelector('h1');
//const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML;
console.log(h1.innerHTML);
//console.log(animaisLista.innerHTML);

h1.outerHTML = '<p>Novo texto</p>';
console.log(h1.outerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);
console.log(lista.parentElement.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children);
console.log(lista.children[lista.children.length -1]);

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const animais = document.querySelector('.animais');
const mapa= document.querySelector('.mapa');

contato.insertBefore(animais, titulo);

const novoh1 = document.createElement('h1');
console.log(novoh1);
novoh1.innerHTML = 'Caninos são fofos';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);