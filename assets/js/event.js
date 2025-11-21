document.getElementById('btn-update-title')
.addEventListener('click',function (){
    console.log('button click')
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerText = 'Update Page Title text';
});