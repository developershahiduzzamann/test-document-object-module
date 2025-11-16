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

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'Apple';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'Orange';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'Banana';
ul.appendChild(li3);
const li4 = document.createElement('li')
li4.innerText = 'Mango';
ul.appendChild(li4);

section.appendChild(ul);

mContainer.appendChild(section);