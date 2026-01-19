const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML;
console.log(h1.innerHTML);
console.log(animaisLista.innerHTML);

h1.outerHTML = '<p>Novo texto</p>';
console.log(h1.outerHTML);

