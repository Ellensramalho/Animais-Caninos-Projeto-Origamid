const imgs = document.querySelectorAll('img');
  console.log(imgs);

let i = 0;
imgs.forEach(function(item, index, array){
  console.log(item, index, array)
})

const titulos = document.getElementsByClassName('titulo');
  console.log(titulos);
const titulosArray = Array.from(titulos);

titulosArray.forEach(item => {
 console.log(item);
});

