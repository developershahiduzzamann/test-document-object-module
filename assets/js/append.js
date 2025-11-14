const append = document.getElementById('bookList');
// console.log(append);
const li = document.createElement('li');
li.innerText ='islam shikkha';
append.appendChild(li);

const mContainer = document.getElementById('m-container');
// console.log(mContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'my furuts  items';
section.appendChild(h1);
mContainer.appendChild(section);