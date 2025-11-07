const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    // console.log(li.innerText);
}
const allHeading = document.getElementsByTagName('h1');
for(h1 of allHeading){
    // console.log(h1.innerText);
}
const allList = document.getElementsByClassName('One');
for(const list of allList){
    console.log(list.innerText);
}

const header = document.getElementById('title');
 header.innerText = 'Top Three Country';

 const listOne = document.getElementById('list');
 listOne.innerText = 'Select Country';